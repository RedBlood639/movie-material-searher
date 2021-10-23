import { GetUpcomingDocument } from '@/apollo/__generated__'
import { renderApollo, screen } from '@/lib/setupTests'
import UpcomingPage from '@/pages/upcoming/[page]'

describe('upcoming page', () => {
  it('should render error state', async () => {
    const mock = [
      {
        error: new Error('an error has occurred'),
        request: {
          query: GetUpcomingDocument,
          variables: {
            page: 1,
          },
        },
      },
    ]

    renderApollo(<UpcomingPage page={1} />, {
      mocks: mock,
    })

    expect(
      await screen.findByText(/an error has occurred/i),
    ).toBeInTheDocument()
  })
})
