import { GetStaticPaths, GetStaticProps } from 'next'

import {
  GetTvShowInfoDocument,
  GetTvShowInfoQuery,
  useGetTvShowInfoQuery,
} from '@/apollo/__generated__'
import { addApolloState, initializeApollo } from '@/apollo/client'
import ErrorMessage from '@/components/ErrorMessage'
import MovieInfo from '@/components/MovieInfo'

export default function TvPage({ id }: { id: string }) {
  const { data, error } = useGetTvShowInfoQuery({ variables: { id } })

  if (error) return <ErrorMessage error={error.message} />

  return data ? <MovieInfo data={data.tvShowInfo} /> : null
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  const { id } = params as { id: string }

  try {
    await apolloClient.query<GetTvShowInfoQuery>({
      query: GetTvShowInfoDocument,
      variables: { id },
    })
  } catch (error) {
    if (error.message.includes('404')) {
      return {
        notFound: true,
      }
    }
  }

  return addApolloState(apolloClient, {
    props: {
      id,
    },
  })
}

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: true,
  paths: [],
})
