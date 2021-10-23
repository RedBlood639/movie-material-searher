import {
  mockMovieInfo,
  mockMoviesSearch,
  mockNowPlaying,
  mockTvShowInfo,
  mockUpcoming,
} from '@/apollo/__responses__/graphql-responses'
import resolvers from '@/apollo/resolvers'

describe('[Query.upcoming]', () => {
  const mockContext = {
    dataSources: {
      moviesAPI: { getUpcoming: jest.fn() },
    },
  }

  const { getUpcoming } = mockContext.dataSources.moviesAPI

  it('calls upcoming', async () => {
    getUpcoming.mockReturnValueOnce(mockUpcoming)

    const res = await resolvers.Query?.upcoming!(
      {} as any,
      { page: 1 },
      mockContext as any,
      {} as any,
    )

    expect(res).toStrictEqual(mockUpcoming)
  })

  it('catches upcoming 404', async () => {
    getUpcoming.mockReturnValueOnce(mockUpcoming)

    let errorMessage = ''

    try {
      await resolvers.Query?.upcoming!(
        {} as any,
        { page: 100 },
        mockContext as any,
        {} as any,
      )
    } catch (error) {
      errorMessage = error.message
    } finally {
      expect(errorMessage).toStrictEqual('Error: 404 Not found')
    }
  })

  it('catches upcoming error', async () => {
    getUpcoming.mockRejectedValueOnce('error')

    let errorMessage = ''

    try {
      await resolvers.Query?.upcoming!(
        {} as any,
        { page: 1 },
        mockContext as any,
        {} as any,
      )
    } catch (error) {
      errorMessage = error.message
    } finally {
      expect(errorMessage).toStrictEqual('error')
    }
  })
})

describe('[Query.nowPlaying]', () => {
  const mockContext = {
    dataSources: {
      moviesAPI: { getNowPlaying: jest.fn() },
    },
  }

  const { getNowPlaying } = mockContext.dataSources.moviesAPI

  it('calls nowPlaying', async () => {
    getNowPlaying.mockReturnValueOnce(mockNowPlaying)

    const res = await resolvers.Query?.nowPlaying!(
      {} as any,
      { page: 1 },
      mockContext as any,
      {} as any,
    )

    expect(res).toStrictEqual(mockNowPlaying)
  })

  it('catches nowPlaying 404', async () => {
    getNowPlaying.mockReturnValueOnce(mockNowPlaying)

    let errorMessage = ''

    try {
      await resolvers.Query?.nowPlaying!(
        {} as any,
        { page: 100 },
        mockContext as any,
        {} as any,
      )
    } catch (error) {
      errorMessage = error.message
    } finally {
      expect(errorMessage).toStrictEqual('Error: 404 Not found')
    }
  })

  it('catches nowPlaying error', async () => {
    getNowPlaying.mockRejectedValueOnce('error')

    let errorMessage = ''

    try {
      await resolvers.Query?.nowPlaying!(
        {} as any,
        { page: 1 },
        mockContext as any,
        {} as any,
      )
    } catch (error) {
      errorMessage = error.message
    } finally {
      expect(errorMessage).toStrictEqual('error')
    }
  })
})

describe('[Query.moviesSearch]', () => {
  const mockContext = {
    dataSources: {
      moviesAPI: { getMoviesSearch: jest.fn() },
    },
  }

  const { getMoviesSearch } = mockContext.dataSources.moviesAPI

  it('calls moviesSearch and preserve cursor', async () => {
    getMoviesSearch.mockReturnValueOnce(mockMoviesSearch)

    const res = await resolvers.Query?.moviesSearch!(
      {} as any,
      { cursor: 2, pageSize: 2, query: 'spider' },
      mockContext as any,
      {} as any,
    )

    expect(res).toStrictEqual({
      ...mockMoviesSearch,
      cursor: 2,
      hasMore: false,
    })
  })

  it('should refetch if there is no results and total pages more than 1', async () => {
    const mock = {
      page: 1,
      results: [],
      total_pages: 5,
    }

    getMoviesSearch
      .mockReturnValueOnce(mock)
      .mockReturnValueOnce(mockMoviesSearch)

    const res = await resolvers.Query?.moviesSearch!(
      {} as any,
      { cursor: 2, pageSize: 2, query: 'spider' },
      mockContext as any,
      {} as any,
    )

    expect(res).toStrictEqual({
      cursor: 2,
      hasMore: false,
      ...mockMoviesSearch,
    })
  })

  it('catches moviesSearch error', async () => {
    getMoviesSearch.mockRejectedValueOnce('error')

    let errorMessage = ''

    try {
      await resolvers.Query?.moviesSearch!(
        {} as any,
        { cursor: 2, pageSize: 2, query: 'spider' },
        mockContext as any,
        {} as any,
      )
    } catch (error) {
      errorMessage = error.message
    } finally {
      expect(errorMessage).toStrictEqual('error')
    }
  })
})

describe('[Query.movieInfo]', () => {
  const mockContext = {
    dataSources: {
      moviesAPI: { getMovieInfo: jest.fn() },
    },
  }

  const { getMovieInfo } = mockContext.dataSources.moviesAPI

  it('calls movieInfo.similar and paginate results', async () => {
    getMovieInfo.mockReturnValueOnce(mockMovieInfo)

    const res = await resolvers.Query?.movieInfo!(
      {} as any,
      { id: '556678', pageSize: 1 },
      mockContext as any,
      {} as any,
    )

    expect(res).toStrictEqual({
      ...mockMovieInfo,
      similar: {
        cursor: 1,
        hasMore: false,
        results: [mockMovieInfo.similar.results[0]],
      },
    })
  })

  it('catches movieInfo error', async () => {
    getMovieInfo.mockRejectedValueOnce('error')

    let errorMessage = ''

    try {
      await resolvers.Query?.movieInfo!(
        {} as any,
        { id: '556678', pageSize: 1 },
        mockContext as any,
        {} as any,
      )
    } catch (error) {
      errorMessage = error.message
    } finally {
      expect(errorMessage).toStrictEqual('error')
    }
  })
})

describe('[Query.tvShowInfo]', () => {
  const mockContext = {
    dataSources: {
      moviesAPI: { getTvShowInfo: jest.fn() },
    },
  }

  const { getTvShowInfo } = mockContext.dataSources.moviesAPI

  it('calls tvShowInfo.similar and paginate results', async () => {
    getTvShowInfo.mockReturnValueOnce(mockTvShowInfo)

    const res = await resolvers.Query?.tvShowInfo!(
      {} as any,
      { id: '888', pageSize: 1 },
      mockContext as any,
      {} as any,
    )

    expect(res).toStrictEqual({
      ...mockTvShowInfo,
      similar: {
        cursor: 1,
        hasMore: false,
        results: [mockTvShowInfo.similar.results[0]],
      },
    })
  })

  it('catches tvShowInfo error', async () => {
    getTvShowInfo.mockRejectedValueOnce('error')

    let errorMessage = ''

    try {
      await resolvers.Query?.tvShowInfo!(
        {} as any,
        { id: '888', pageSize: 1 },
        mockContext as any,
        {} as any,
      )
    } catch (error) {
      errorMessage = error.message
    } finally {
      expect(errorMessage).toStrictEqual('error')
    }
  })
})
