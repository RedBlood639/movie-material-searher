import MoviesAPI from './datasource'

export type Context = {
  dataSources: {
    moviesAPI: MoviesAPI
  }
}
