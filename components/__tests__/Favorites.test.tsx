import { fireEvent, renderApollo, screen } from '@/lib/setupTests'

import Favorites from '../Favorites'

jest.mock('next/link', () => ({ children }: { children: React.ReactElement }) =>
  children,
)

const mocks = [
  {
    backdrop_path: null,
    budget: '0',
    id: 1,
    media_type: 'movie',
    overview: 'test data',
    poster_path: null,
    release_date: '2020',
    revenue: '0',
    similar: {
      results: [
        {
          id: 1,
          poster_path: null,
          release_date: '2020',
          title: 'test',
        },
      ],
    },
    title: 'clicked data',
    vote_average: 5,
  },
]

describe('favorites', () => {
  it('should open favorites and register click', () => {
    localStorage.setItem('favorites', JSON.stringify(mocks))

    const { baseElement } = renderApollo(<Favorites />)

    const iconButton = screen.getByRole('button')

    fireEvent.click(iconButton)

    expect(baseElement).toMatchSnapshot()
  })

  it('should clear local storage if value is unsupported', () => {
    localStorage.setItem('favorites', 'wrong value')

    renderApollo(<Favorites />)

    const iconButton = screen.getByRole('button')

    fireEvent.click(iconButton)

    expect(localStorage.getItem('favorites')).toBeNull()
  })
})
