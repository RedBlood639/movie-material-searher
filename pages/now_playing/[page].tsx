import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import {
  GetNowPlayingDocument,
  GetNowPlayingQuery,
  useGetNowPlayingQuery,
} from '@/apollo/__generated__'
import { addApolloState, initializeApollo } from '@/apollo/client'
import ErrorMessage from '@/components/ErrorMessage'
import MoviesLayout from '@/components/MoviesLayout'

interface Props {
  page: number
}

export default function NowPlayingPage({ page }: Props) {
  const { data, error } = useGetNowPlayingQuery({
    variables: { page },
  })

  if (error) return <ErrorMessage error={error.message} />

  return data ? (
    <>
      <Head>
        <title>Now Playing</title>
      </Head>
      <MoviesLayout data={data.nowPlaying} path="now_playing" />
    </>
  ) : null
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  const { page } = params as { page: string }

  try {
    await apolloClient.query<GetNowPlayingQuery>({
      query: GetNowPlayingDocument,
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

  const { data } = await apolloClient.query<GetNowPlayingQuery>({
    query: GetNowPlayingDocument,
  })

  const paths = Array.from(
    { length: data.nowPlaying.total_pages },
    (_, page) => ({
      params: { page: (page + 1).toString() },
    }),
  )

  return {
    fallback: true,
    paths,
  }
}
