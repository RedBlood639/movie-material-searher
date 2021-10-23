import {
  mockMovieInfo,
  mockMoviesSearch,
  mockNowPlaying,
  mockTvShowInfo,
  mockUpcoming,
} from '../__responses__/graphql-responses'
import {
  mockMovieInfoResponse,
  mockMoviesSearchResponse,
  mockNowPlayingResponse,
  mockTvShowInfoResponse,
  mockUpcomingResponse,
} from '../__responses__/raw-responses'
import MoviesAPI from '../datasource'

const mocks = {
  get: jest.fn(),
}

class MockMoviesAPI extends MoviesAPI {
  get = mocks.get
}
const api = new MockMoviesAPI()

describe('getUpcomingMovies', () => {
  it('should get upcoming', async () => {
    mocks.get.mockReturnValueOnce(mockUpcomingResponse)

    const page = 1
    const res = await api.getUpcoming(page)

    expect(res).toStrictEqual(mockUpcoming)
    expect(mocks.get).toHaveBeenCalledWith('/movie/upcoming', { page })
  })
})

describe('getTopRatedMovies', () => {
  it('should get and transform top now playing movies', async () => {
    mocks.get.mockReturnValueOnce(mockNowPlayingResponse)

    const page = 1
    const res = await api.getNowPlaying(page)

    expect(res).toStrictEqual(mockNowPlaying)
    expect(mocks.get).toHaveBeenCalledWith('/movie/now_playing', { page })
  })
})

describe('getMoviesSearch', () => {
  it('should get and transform search movies', async () => {
    mocks.get.mockReturnValueOnce(mockMoviesSearchResponse)

    const query = 'spider'
    const res = await api.getMoviesSearch(query, 1)

    expect(res).toStrictEqual(mockMoviesSearch)
    expect(mocks.get).toHaveBeenCalledWith('/search/multi', { page: 1, query })
  })
})

describe('getMovieInfo', () => {
  it('should get and transform movie info', async () => {
    mocks.get.mockReturnValueOnce(mockMovieInfoResponse)

    const id = '556678'
    const res = await api.getMovieInfo(id)

    expect(res).toStrictEqual(mockMovieInfo)
    expect(mocks.get).toHaveBeenCalledWith(`/movie/${id}`, {
      append_to_response: 'similar',
    })
  })
})

describe('getTvShowInfo', () => {
  it('should get and transform tv show info', async () => {
    mocks.get.mockReturnValueOnce(mockTvShowInfoResponse)

    const id = '888'
    const res = await api.getTvShowInfo(id)

    expect(res).toStrictEqual(mockTvShowInfo)
    expect(mocks.get).toHaveBeenCalledWith(`/tv/${id}`, {
      append_to_response: 'similar',
    })
  })
})
