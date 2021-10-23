import * as Apollo from '@apollo/client'
import { gql } from '@apollo/client'
import { GraphQLResolveInfo } from 'graphql'

import { Context } from '@/apollo/context'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  { [P in K]-?: NonNullable<T[P]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: boolean
  Float: number
  ID: string
  Int: number
  String: string
}

export enum Media {
  Movie = 'movie',
  Tv = 'tv',
}

export type UpcomingResults = {
  __typename?: 'UpcomingResults'
  id: Scalars['Int']
  media_type: Media
  poster_path?: Maybe<Scalars['String']>
  release_date: Scalars['String']
  title: Scalars['String']
}

export type Upcoming = {
  __typename?: 'Upcoming'
  page: Scalars['Int']
  results: Array<UpcomingResults>
  total_pages: Scalars['Int']
}

export type NowPlayingResults = {
  __typename?: 'NowPlayingResults'
  id: Scalars['Int']
  media_type: Media
  poster_path?: Maybe<Scalars['String']>
  title: Scalars['String']
  vote_average: Scalars['Float']
}

export type NowPlaying = {
  __typename?: 'NowPlaying'
  page: Scalars['Int']
  results: Array<NowPlayingResults>
  total_pages: Scalars['Int']
}

export type MoviesSearchResults = {
  __typename?: 'MoviesSearchResults'
  id: Scalars['Int']
  media_type: Media
  title: Scalars['String']
}

export type MoviesSearch = {
  __typename?: 'MoviesSearch'
  cursor?: Maybe<Scalars['Int']>
  hasMore?: Maybe<Scalars['Boolean']>
  page: Scalars['Int']
  results: Array<MoviesSearchResults>
  total_pages: Scalars['Int']
}

export type SimilarResults = {
  __typename?: 'SimilarResults'
  id: Scalars['Int']
  media_type: Media
  poster_path?: Maybe<Scalars['String']>
  release_date: Scalars['String']
  title: Scalars['String']
}

export type SimilarMovies = {
  __typename?: 'SimilarMovies'
  cursor?: Maybe<Scalars['Int']>
  hasMore?: Maybe<Scalars['Boolean']>
  results: Array<SimilarResults>
}

export type MovieInfo = {
  __typename?: 'MovieInfo'
  backdrop_path?: Maybe<Scalars['String']>
  budget: Scalars['String']
  id: Scalars['Int']
  media_type: Media
  overview?: Maybe<Scalars['String']>
  poster_path?: Maybe<Scalars['String']>
  release_date: Scalars['String']
  revenue: Scalars['String']
  similar: SimilarMovies
  title: Scalars['String']
  vote_average: Scalars['Float']
}

export type TvShowInfo = {
  __typename?: 'TvShowInfo'
  backdrop_path?: Maybe<Scalars['String']>
  id: Scalars['Int']
  media_type: Media
  number_of_episodes: Scalars['Int']
  number_of_seasons: Scalars['Int']
  overview?: Maybe<Scalars['String']>
  poster_path?: Maybe<Scalars['String']>
  release_date: Scalars['String']
  similar: SimilarMovies
  title: Scalars['String']
  vote_average: Scalars['Float']
}

export type Query = {
  __typename?: 'Query'
  movieInfo: MovieInfo
  moviesSearch: MoviesSearch
  nowPlaying: NowPlaying
  tvShowInfo: TvShowInfo
  upcoming: Upcoming
}

export type QueryNowPlayingArgs = {
  page?: Maybe<Scalars['Int']>
}

export type QueryMovieInfoArgs = {
  cursor?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  pageSize?: Maybe<Scalars['Int']>
}

export type QueryMoviesSearchArgs = {
  cursor?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
  query: Scalars['String']
}

export type QueryTvShowInfoArgs = {
  cursor?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  pageSize?: Maybe<Scalars['Int']>
}

export type QueryUpcomingArgs = {
  page?: Maybe<Scalars['Int']>
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type Resolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> = ResolverFn<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Float: ResolverTypeWrapper<Scalars['Float']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Media: Media
  MovieInfo: ResolverTypeWrapper<MovieInfo>
  MoviesSearch: ResolverTypeWrapper<MoviesSearch>
  MoviesSearchResults: ResolverTypeWrapper<MoviesSearchResults>
  NowPlaying: ResolverTypeWrapper<NowPlaying>
  NowPlayingResults: ResolverTypeWrapper<NowPlayingResults>
  Query: ResolverTypeWrapper<{}>
  SimilarMovies: ResolverTypeWrapper<SimilarMovies>
  SimilarResults: ResolverTypeWrapper<SimilarResults>
  String: ResolverTypeWrapper<Scalars['String']>
  TvShowInfo: ResolverTypeWrapper<TvShowInfo>
  Upcoming: ResolverTypeWrapper<Upcoming>
  UpcomingResults: ResolverTypeWrapper<UpcomingResults>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']
  Float: Scalars['Float']
  ID: Scalars['ID']
  Int: Scalars['Int']
  MovieInfo: MovieInfo
  MoviesSearch: MoviesSearch
  MoviesSearchResults: MoviesSearchResults
  NowPlaying: NowPlaying
  NowPlayingResults: NowPlayingResults
  Query: {}
  SimilarMovies: SimilarMovies
  SimilarResults: SimilarResults
  String: Scalars['String']
  TvShowInfo: TvShowInfo
  Upcoming: Upcoming
  UpcomingResults: UpcomingResults
}>

export type UpcomingResultsResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UpcomingResults'] = ResolversParentTypes['UpcomingResults']
> = ResolversObject<{
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  media_type?: Resolver<ResolversTypes['Media'], ParentType, ContextType>
  poster_path?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  release_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type UpcomingResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Upcoming'] = ResolversParentTypes['Upcoming']
> = ResolversObject<{
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  results?: Resolver<
    Array<ResolversTypes['UpcomingResults']>,
    ParentType,
    ContextType
  >
  total_pages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
}>

export type NowPlayingResultsResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['NowPlayingResults'] = ResolversParentTypes['NowPlayingResults']
> = ResolversObject<{
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  media_type?: Resolver<ResolversTypes['Media'], ParentType, ContextType>
  poster_path?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  vote_average?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
}>

export type NowPlayingResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['NowPlaying'] = ResolversParentTypes['NowPlaying']
> = ResolversObject<{
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  results?: Resolver<
    Array<ResolversTypes['NowPlayingResults']>,
    ParentType,
    ContextType
  >
  total_pages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
}>

export type MoviesSearchResultsResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['MoviesSearchResults'] = ResolversParentTypes['MoviesSearchResults']
> = ResolversObject<{
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  media_type?: Resolver<ResolversTypes['Media'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type MoviesSearchResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['MoviesSearch'] = ResolversParentTypes['MoviesSearch']
> = ResolversObject<{
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
  cursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  hasMore?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  results?: Resolver<
    Array<ResolversTypes['MoviesSearchResults']>,
    ParentType,
    ContextType
  >
  total_pages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
}>

export type SimilarResultsResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['SimilarResults'] = ResolversParentTypes['SimilarResults']
> = ResolversObject<{
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  media_type?: Resolver<ResolversTypes['Media'], ParentType, ContextType>
  poster_path?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  release_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type SimilarMoviesResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['SimilarMovies'] = ResolversParentTypes['SimilarMovies']
> = ResolversObject<{
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
  cursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  hasMore?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  results?: Resolver<
    Array<ResolversTypes['SimilarResults']>,
    ParentType,
    ContextType
  >
}>

export type MovieInfoResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['MovieInfo'] = ResolversParentTypes['MovieInfo']
> = ResolversObject<{
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
  backdrop_path?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  budget?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  media_type?: Resolver<ResolversTypes['Media'], ParentType, ContextType>
  overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  poster_path?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  release_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  revenue?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  similar?: Resolver<ResolversTypes['SimilarMovies'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  vote_average?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
}>

export type TvShowInfoResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['TvShowInfo'] = ResolversParentTypes['TvShowInfo']
> = ResolversObject<{
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
  backdrop_path?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  media_type?: Resolver<ResolversTypes['Media'], ParentType, ContextType>
  number_of_episodes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  number_of_seasons?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  poster_path?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  release_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  similar?: Resolver<ResolversTypes['SimilarMovies'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  vote_average?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
}>

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  movieInfo?: Resolver<
    ResolversTypes['MovieInfo'],
    ParentType,
    ContextType,
    RequireFields<QueryMovieInfoArgs, 'id' | 'pageSize'>
  >
  moviesSearch?: Resolver<
    ResolversTypes['MoviesSearch'],
    ParentType,
    ContextType,
    RequireFields<QueryMoviesSearchArgs, 'query' | 'pageSize'>
  >
  nowPlaying?: Resolver<
    ResolversTypes['NowPlaying'],
    ParentType,
    ContextType,
    RequireFields<QueryNowPlayingArgs, 'page'>
  >
  tvShowInfo?: Resolver<
    ResolversTypes['TvShowInfo'],
    ParentType,
    ContextType,
    RequireFields<QueryTvShowInfoArgs, 'id' | 'pageSize'>
  >
  upcoming?: Resolver<
    ResolversTypes['Upcoming'],
    ParentType,
    ContextType,
    RequireFields<QueryUpcomingArgs, 'page'>
  >
}>

export type Resolvers<ContextType = Context> = ResolversObject<{
  MovieInfo?: MovieInfoResolvers<ContextType>
  MoviesSearch?: MoviesSearchResolvers<ContextType>
  MoviesSearchResults?: MoviesSearchResultsResolvers<ContextType>
  NowPlaying?: NowPlayingResolvers<ContextType>
  NowPlayingResults?: NowPlayingResultsResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  SimilarMovies?: SimilarMoviesResolvers<ContextType>
  SimilarResults?: SimilarResultsResolvers<ContextType>
  TvShowInfo?: TvShowInfoResolvers<ContextType>
  Upcoming?: UpcomingResolvers<ContextType>
  UpcomingResults?: UpcomingResultsResolvers<ContextType>
}>

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>

export type GetMovieInfoQueryVariables = Exact<{
  id: Scalars['ID']
  pageSize?: Maybe<Scalars['Int']>
}>

export type GetMovieInfoQuery = { __typename?: 'Query' } & {
  movieInfo: { __typename?: 'MovieInfo' } & Pick<
    MovieInfo,
    | 'backdrop_path'
    | 'budget'
    | 'id'
    | 'media_type'
    | 'overview'
    | 'poster_path'
    | 'release_date'
    | 'revenue'
    | 'title'
    | 'vote_average'
  > & {
      similar: { __typename?: 'SimilarMovies' } & {
        results: Array<
          { __typename?: 'SimilarResults' } & Pick<
            SimilarResults,
            'id' | 'media_type' | 'poster_path' | 'release_date' | 'title'
          >
        >
      }
    }
}

export type GetTvShowInfoQueryVariables = Exact<{
  id: Scalars['ID']
  pageSize?: Maybe<Scalars['Int']>
}>

export type GetTvShowInfoQuery = { __typename?: 'Query' } & {
  tvShowInfo: { __typename?: 'TvShowInfo' } & Pick<
    TvShowInfo,
    | 'backdrop_path'
    | 'id'
    | 'media_type'
    | 'number_of_episodes'
    | 'number_of_seasons'
    | 'overview'
    | 'poster_path'
    | 'release_date'
    | 'title'
    | 'vote_average'
  > & {
      similar: { __typename?: 'SimilarMovies' } & {
        results: Array<
          { __typename?: 'SimilarResults' } & Pick<
            SimilarResults,
            'id' | 'media_type' | 'poster_path' | 'release_date' | 'title'
          >
        >
      }
    }
}

export type GetMoviesQueryVariables = Exact<{ [key: string]: never }>

export type GetMoviesQuery = { __typename?: 'Query' } & {
  nowPlaying: { __typename?: 'NowPlaying' } & Pick<
    NowPlaying,
    'page' | 'total_pages'
  > & {
      results: Array<
        { __typename?: 'NowPlayingResults' } & Pick<
          NowPlayingResults,
          'id' | 'media_type' | 'poster_path' | 'title' | 'vote_average'
        >
      >
    }
  upcoming: { __typename?: 'Upcoming' } & Pick<
    Upcoming,
    'page' | 'total_pages'
  > & {
      results: Array<
        { __typename?: 'UpcomingResults' } & Pick<
          UpcomingResults,
          'id' | 'media_type' | 'poster_path' | 'release_date' | 'title'
        >
      >
    }
}

export type GetUpcomingQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>
}>

export type GetUpcomingQuery = { __typename?: 'Query' } & {
  upcoming: { __typename?: 'Upcoming' } & Pick<
    Upcoming,
    'page' | 'total_pages'
  > & {
      results: Array<
        { __typename?: 'UpcomingResults' } & Pick<
          UpcomingResults,
          'id' | 'media_type' | 'poster_path' | 'release_date' | 'title'
        >
      >
    }
}

export type GetNowPlayingQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>
}>

export type GetNowPlayingQuery = { __typename?: 'Query' } & {
  nowPlaying: { __typename?: 'NowPlaying' } & Pick<
    NowPlaying,
    'page' | 'total_pages'
  > & {
      results: Array<
        { __typename?: 'NowPlayingResults' } & Pick<
          NowPlayingResults,
          'media_type' | 'id' | 'poster_path' | 'title' | 'vote_average'
        >
      >
    }
}

export type GetMoviesSearchQueryVariables = Exact<{
  pageSize?: Maybe<Scalars['Int']>
  query: Scalars['String']
}>

export type GetMoviesSearchQuery = { __typename?: 'Query' } & {
  moviesSearch: { __typename?: 'MoviesSearch' } & {
    results: Array<
      { __typename?: 'MoviesSearchResults' } & Pick<
        MoviesSearchResults,
        'id' | 'media_type' | 'title'
      >
    >
  }
}

export const GetMovieInfoDocument = gql`
  query GetMovieInfo($id: ID!, $pageSize: Int) {
    movieInfo(id: $id, pageSize: $pageSize) {
      backdrop_path
      budget
      id
      media_type
      overview
      poster_path
      release_date
      revenue
      similar {
        results {
          id
          media_type
          poster_path
          release_date
          title
        }
      }
      title
      vote_average
    }
  }
`

/**
 * __useGetMovieInfoQuery__
 *
 * To run a query within a React component, call `useGetMovieInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetMovieInfoQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMovieInfoQuery,
    GetMovieInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMovieInfoQuery, GetMovieInfoQueryVariables>(
    GetMovieInfoDocument,
    options,
  )
}
export function useGetMovieInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMovieInfoQuery,
    GetMovieInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetMovieInfoQuery, GetMovieInfoQueryVariables>(
    GetMovieInfoDocument,
    options,
  )
}
export type GetMovieInfoQueryHookResult = ReturnType<
  typeof useGetMovieInfoQuery
>
export type GetMovieInfoLazyQueryHookResult = ReturnType<
  typeof useGetMovieInfoLazyQuery
>
export type GetMovieInfoQueryResult = Apollo.QueryResult<
  GetMovieInfoQuery,
  GetMovieInfoQueryVariables
>
export const GetTvShowInfoDocument = gql`
  query GetTvShowInfo($id: ID!, $pageSize: Int) {
    tvShowInfo(id: $id, pageSize: $pageSize) {
      backdrop_path
      id
      media_type
      number_of_episodes
      number_of_seasons
      overview
      poster_path
      release_date
      similar {
        results {
          id
          media_type
          poster_path
          release_date
          title
        }
      }
      title
      vote_average
    }
  }
`

/**
 * __useGetTvShowInfoQuery__
 *
 * To run a query within a React component, call `useGetTvShowInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTvShowInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTvShowInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetTvShowInfoQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTvShowInfoQuery,
    GetTvShowInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTvShowInfoQuery, GetTvShowInfoQueryVariables>(
    GetTvShowInfoDocument,
    options,
  )
}
export function useGetTvShowInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTvShowInfoQuery,
    GetTvShowInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTvShowInfoQuery, GetTvShowInfoQueryVariables>(
    GetTvShowInfoDocument,
    options,
  )
}
export type GetTvShowInfoQueryHookResult = ReturnType<
  typeof useGetTvShowInfoQuery
>
export type GetTvShowInfoLazyQueryHookResult = ReturnType<
  typeof useGetTvShowInfoLazyQuery
>
export type GetTvShowInfoQueryResult = Apollo.QueryResult<
  GetTvShowInfoQuery,
  GetTvShowInfoQueryVariables
>
export const GetMoviesDocument = gql`
  query GetMovies {
    nowPlaying {
      page
      results {
        id
        media_type
        poster_path
        title
        vote_average
      }
      total_pages
    }
    upcoming {
      page
      results {
        id
        media_type
        poster_path
        release_date
        title
      }
      total_pages
    }
  }
`

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMoviesQuery,
    GetMoviesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(
    GetMoviesDocument,
    options,
  )
}
export function useGetMoviesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMoviesQuery,
    GetMoviesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(
    GetMoviesDocument,
    options,
  )
}
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>
export type GetMoviesLazyQueryHookResult = ReturnType<
  typeof useGetMoviesLazyQuery
>
export type GetMoviesQueryResult = Apollo.QueryResult<
  GetMoviesQuery,
  GetMoviesQueryVariables
>
export const GetUpcomingDocument = gql`
  query GetUpcoming($page: Int) {
    upcoming(page: $page) {
      page
      results {
        id
        media_type
        poster_path
        release_date
        title
      }
      total_pages
    }
  }
`

/**
 * __useGetUpcomingQuery__
 *
 * To run a query within a React component, call `useGetUpcomingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpcomingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpcomingQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetUpcomingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUpcomingQuery,
    GetUpcomingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUpcomingQuery, GetUpcomingQueryVariables>(
    GetUpcomingDocument,
    options,
  )
}
export function useGetUpcomingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUpcomingQuery,
    GetUpcomingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUpcomingQuery, GetUpcomingQueryVariables>(
    GetUpcomingDocument,
    options,
  )
}
export type GetUpcomingQueryHookResult = ReturnType<typeof useGetUpcomingQuery>
export type GetUpcomingLazyQueryHookResult = ReturnType<
  typeof useGetUpcomingLazyQuery
>
export type GetUpcomingQueryResult = Apollo.QueryResult<
  GetUpcomingQuery,
  GetUpcomingQueryVariables
>
export const GetNowPlayingDocument = gql`
  query GetNowPlaying($page: Int) {
    nowPlaying(page: $page) {
      page
      results {
        media_type
        id
        poster_path
        title
        vote_average
      }
      total_pages
    }
  }
`

/**
 * __useGetNowPlayingQuery__
 *
 * To run a query within a React component, call `useGetNowPlayingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNowPlayingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNowPlayingQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetNowPlayingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNowPlayingQuery,
    GetNowPlayingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetNowPlayingQuery, GetNowPlayingQueryVariables>(
    GetNowPlayingDocument,
    options,
  )
}
export function useGetNowPlayingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNowPlayingQuery,
    GetNowPlayingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetNowPlayingQuery, GetNowPlayingQueryVariables>(
    GetNowPlayingDocument,
    options,
  )
}
export type GetNowPlayingQueryHookResult = ReturnType<
  typeof useGetNowPlayingQuery
>
export type GetNowPlayingLazyQueryHookResult = ReturnType<
  typeof useGetNowPlayingLazyQuery
>
export type GetNowPlayingQueryResult = Apollo.QueryResult<
  GetNowPlayingQuery,
  GetNowPlayingQueryVariables
>
export const GetMoviesSearchDocument = gql`
  query GetMoviesSearch($query: String!, $pageSize: Int) {
    moviesSearch(query: $query, pageSize: $pageSize) {
      results {
        id
        media_type
        title
      }
    }
  }
`

/**
 * __useGetMoviesSearchQuery__
 *
 * To run a query within a React component, call `useGetMoviesSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetMoviesSearchQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMoviesSearchQuery,
    GetMoviesSearchQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMoviesSearchQuery, GetMoviesSearchQueryVariables>(
    GetMoviesSearchDocument,
    options,
  )
}
export function useGetMoviesSearchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMoviesSearchQuery,
    GetMoviesSearchQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetMoviesSearchQuery,
    GetMoviesSearchQueryVariables
  >(GetMoviesSearchDocument, options)
}
export type GetMoviesSearchQueryHookResult = ReturnType<
  typeof useGetMoviesSearchQuery
>
export type GetMoviesSearchLazyQueryHookResult = ReturnType<
  typeof useGetMoviesSearchLazyQuery
>
export type GetMoviesSearchQueryResult = Apollo.QueryResult<
  GetMoviesSearchQuery,
  GetMoviesSearchQueryVariables
>
