import { GetMoviesDocument } from '@/apollo/__generated__'
import { renderApollo, screen } from '@/lib/setupTests'
import HomePage from '@/pages'

const mocks = [
  {
    request: {
      query: GetMoviesDocument,
    },
    result: {
      data: {
        nowPlaying: {
          page: 1,
          results: [
            {
              __typename: 'NowPlayingResults',
              id: 1,
              media_type: 'movie',
              poster_path: 'https://example.com/img/1',
              title: 'now playing rendered',
              vote_average: 5,
            },
          ],
          total_pages: 20,
        },
        upcoming: {
          page: 1,
          results: [
            {
              __typename: 'UpcomingResults',
              id: 1,
              media_type: 'movie',
              poster_path: null,
              release_date: '2002',
              title: 'upcoming rendered',
            },
          ],
          total_pages: 20,
        },
      },
    },
  },
]

describe('home page', () => {
  it('should fetch initial movies', async () => {
    const { baseElement } = renderApollo(<HomePage />, {
      addTypeName: true,
      mocks,
    })

    expect(await screen.findByText('upcoming rendered')).toBeInTheDocument()
    expect(await screen.findByText('now playing rendered')).toBeInTheDocument()
    expect(baseElement).toMatchSnapshot()
  })

  it('should render error state', async () => {
    const mock = [
      {
        error: new Error('an error has occurred'),
        request: {
          query: GetMoviesDocument,
        },
      },
    ]

    renderApollo(<HomePage />, { mocks: mock })

    expect(
      await screen.findByText(/an error has occurred/i),
    ).toBeInTheDocument()
  })
})
