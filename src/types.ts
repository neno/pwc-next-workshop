export type IMovieItem = Pick<IMovie, 'id' | 'title' | 'poster_path' | 'release_date'>

export interface IMovie {
  id: number;
  title: string;
  tagline: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  overview: string;
  genres: IGenre[];
  budget: number;
  revenue: number;
  homepage: string;
  imdb_id: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  spoken_languages: ILanguage[];
}

export interface ILanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IApiMovieListResult {
  page: number;
  results: IMovieItem[];
  total_pages: number;
  total_results: number;
}

// const imagePath = "https://image.tmdb.org/t/p/original"

// "id": 646389,
//     "original_language": "en",
//     "original_title": "Plane",
//     "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
//     "popularity": 2277.913,
//     "poster_path": "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
//     "release_date": "2023-01-12",
//     "title": "Plane",
//     "video": false,
//     "vote_average": 6.9,
//     "vote_count": 683