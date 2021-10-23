export const mockUpcoming = {
  page: 1,
  results: [
    {
      id: 602269,
      media_type: 'movie',
      poster_path:
        'https://image.tmdb.org/t/p/w200/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg',
      release_date: '28.01.2021',
      title: 'The Little Things',
    },
    {
      id: 560144,
      media_type: 'movie',
      poster_path: null,
      release_date: '25.10.2020',
      title: 'Skylines',
    },
  ],
  total_pages: 12,
}

export const mockNowPlaying = {
  page: 1,
  results: [
    {
      id: 464052,
      media_type: 'movie',
      poster_path:
        'https://image.tmdb.org/t/p/w200/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
      title: 'Wonder Woman 1984',
      vote_average: 6.9,
    },
  ],
  total_pages: 39,
}

export const mockMoviesSearch = {
  page: 1,
  results: [
    {
      id: 516151,
      media_type: 'movie',
      title: 'Brad Upton: Will Be Funny For Money',
    },
    {
      id: 5080,
      media_type: 'tv',
      title: 'Doctors',
    },
  ],
  total_pages: 186,
}

export const mockMovieInfo = {
  backdrop_path:
    'https://image.tmdb.org/t/p/w500/5GbkL9DDRzq3A21nR7Gkv6cFGjq.jpg',
  budget: '$0',
  id: 556678,
  media_type: 'movie',
  overview:
    'In 1800s England, a well-meaning but selfish young woman meddles in the love lives of her friends.',
  poster_path:
    'https://image.tmdb.org/t/p/w200/uHpHzbHLSsVmAuuGuQSpyVDZmDc.jpg',
  release_date: '13 February 2020',
  revenue: '$25,155,355',
  similar: {
    results: [
      {
        id: 410117,
        media_type: 'movie',
        poster_path:
          'https://image.tmdb.org/t/p/w200/xWTJbhTwSTJmhLlX5xAOxPhdnXc.jpg',
        release_date: '2016',
        title: 'Lady Macbeth',
      },
    ],
  },
  title: 'Emma.',
  vote_average: 7.1,
}

export const mockTvShowInfo = {
  backdrop_path:
    'https://image.tmdb.org/t/p/w500/df4V825ahcsw4qKuFTEefippoCG.jpg',
  id: 888,
  media_type: 'tv',
  number_of_episodes: 65,
  number_of_seasons: 5,
  overview:
    'Bitten by a radioactive spider, Peter Parker develops spider-like superpowers. He uses these to fight crime while trying to balance it with the struggles of his personal life.',
  poster_path:
    'https://image.tmdb.org/t/p/w200/wXthtEN5kdWA1bHz03lkuCJS6hA.jpg',
  release_date: '19 November 1994',
  similar: {
    results: [
      {
        id: 2098,
        media_type: 'tv',
        poster_path:
          'https://image.tmdb.org/t/p/w200/7ZsnVtDtkMiuMirKSZdaLaU4wMR.jpg',
        release_date: '1992',
        title: 'Batman: The Animated Series',
      },
    ],
  },
  title: 'Spider-Man',
  vote_average: 8.2,
}
