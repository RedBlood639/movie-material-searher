import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import {
  GetUpcomingDocument,
  GetUpcomingQuery,
  QueryUpcomingArgs,
  useGetUpcomingQuery,
} from '@/apollo/__generated__'
import { addApolloState, initializeApollo } from '@/apollo/client'
import ErrorMessage from '@/components/ErrorMessage'
import MoviesLayout from '@/components/MoviesLayout'

interface Props {
  page: number
}

export default function UpcomingPage({ page }: Props) {
  const { data, error } = useGetUpcomingQuery({
    variables: { page },
  })

  if (error) return <ErrorMessage error={error.message} />

  return data ? (
    <>
      <Head>
        <title>Upcoming</title>
      </Head>
      <MoviesLayout data={data.upcoming} path="upcoming" />
    </>
  ) : null
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  const { page } = params as { page: string }

  try {
    await apolloClient.query<GetUpcomingQuery, QueryUpcomingArgs>({
      query: GetUpcomingDocument,
      variables: { page: +page },
    })
  } catch ({ message }) {
    if (message.includes('404') || message.includes('422')) {
      return {
        notFound: true,
      }
    }
  }

  return addApolloState(apolloClient, {
    props: {
      page: +page,
    },
    revalidate: 60,
  })
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    GetUpcomingQuery,
    QueryUpcomingArgs
  >({
    query: GetUpcomingDocument,
  })

  const paths = Array.from(
    { length: data.upcoming.total_pages },
    (_, page) => ({
      params: { page: (page + 1).toString() },
    }),
  )

  return {
    fallback: true,
    paths,
  }
}
