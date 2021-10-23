import { GetMoviesSearchDocument } from '@/apollo/__generated__'
import { fireEvent, renderApollo, screen } from '@/lib/setupTests'

import SearchBar from '../SearchBar'

const mocks = [
  {
    request: {
      query: GetMoviesSearchDocument,
      variables: { query: 'title' },
    },
    result: {
      data: {
        moviesSearch: {
          results: [
            {
              id: 1,
              media_type: 'movie',
              title: 'movie title',
            },
            {
              id: 2,
              media_type: 'tv',
              title: 'tv title',
            },
          ],
        },
      },
    },
  },
]

describe('searchBar', () => {
  it('should check all cases', async () => {
    const { baseElement } = renderApollo(<SearchBar />, { mocks })

    const inputElement = screen.getByPlaceholderText('Search...')

    // open dropdown
    fireEvent.focus(inputElement)

    // check if empty value doesn't trigger request
    fireEvent.input(inputElement, { target: { value: '   ' } })

    // fetch movie
    fireEvent.input(inputElement, { target: { value: 'title' } })
    const movieSearchResultHighlight = await screen.findAllByText('title')
    const movieSearchResult = screen.getByText('movie')
    expect(movieSearchResultHighlight[0]).toBeInTheDocument()
    expect(movieSearchResult).toBeInTheDocument()
    expect(baseElement).toMatchSnapshot()

    // clear input on click
    const clearButton = screen.getByTitle('Clear')
    fireEvent.click(clearButton)
    expect(inputElement).toHaveProperty('value', '')
  })
})
