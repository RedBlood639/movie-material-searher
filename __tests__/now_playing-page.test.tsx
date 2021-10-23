import { GetNowPlayingDocument } from '@/apollo/__generated__'
import { renderApollo, screen } from '@/lib/setupTests'
import NowPlayingPage from '@/pages/now_playing/[page]'

describe('now playing page', () => {
  it('should render error state', async () => {
    const mock = [
      {
        error: new Error('an error has occurred'),
        request: {
          query: GetNowPlayingDocument,
          variables: {
            page: 1,
          },
        },
      },
    ]

    renderApollo(<NowPlayingPage page={1} />, {
      mocks: mock,
    })

    expect(
      await screen.findByText(/an error has occurred/i),
    ).toBeInTheDocument()
  })
})
