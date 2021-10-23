import { GetTvShowInfoDocument } from '@/apollo/__generated__'
import { renderApollo, screen } from '@/lib/setupTests'
import TvPage from '@/pages/tv/[id]'

const mocks = [
  {
    request: {
      query: GetTvShowInfoDocument,
      variables: {
        id: '1',
      },
    },
    result: {
      data: {
        tvShowInfo: {
          __typename: 'TvShowInfo',
          backdrop_path: null,
          id: 1,
          media_type: 'tv',
          number_of_episodes: 30,
          number_of_seasons: 5,
          overview: 'overview',
          poster_path: null,
          release_date: '2002',
          similar: {
            results: [
              {
                __typename: 'SimilarResults',
                id: 2,
                media_type: 'tv',
                poster_path: null,
                release_date: '2002',
                title: 'rendered similar',
              },
            ],
          },
          title: 'rendered tv',
          vote_average: 10,
        },
      },
    },
  },
]

describe('tv page', () => {
  it('should fetch tv by id', async () => {
    const { baseElement } = renderApollo(<TvPage id="1" />, {
      addTypeName: true,
      mocks,
    })

    expect(await screen.findByText('rendered tv')).toBeInTheDocument()
    expect(await screen.findByText('rendered similar')).toBeInTheDocument()
    expect(baseElement).toMatchSnapshot()
  })

  it('should render error state', async () => {
    const mock = [
      {
        error: new Error('an error has occurred'),
        request: {
          query: GetTvShowInfoDocument,
          variables: {
            id: '1',
          },
        },
      },
    ]

    renderApollo(<TvPage id="1" />, { mocks: mock })

    expect(
      await screen.findByText(/an error has occurred/i),
    ).toBeInTheDocument()
  })
})
