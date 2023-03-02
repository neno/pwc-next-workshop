import { create } from 'zustand';
import { IMovie, IMovieItem } from './types';

export interface IStore {
  searchTerm: string;
  searchResults: IMovieItem[];
  selectedMovieId: number | null;
  favoriteMovies: IMovieItem[];
  setSearchTerm: (searchTerm: string) => void;
  setSearchResults: (searchResults: IMovieItem[]) => void;
  setSelectedMovieId: (id: number | null) => void;
  addToFavorites: (movie: IMovie) => void;
  removeFromFavorites: (id: number) => void;
}

const useStore = create<IStore>((set): IStore => ({
  searchTerm: '',
  searchResults: [],
  selectedMovieId: null,
  favoriteMovies: [],
  setSearchTerm: (searchTerm: string) => set(state => ({ ...state, searchTerm })),
  setSearchResults: (searchResults: IMovieItem[]) => set(state => ({ ...state, searchResults })),
  setSelectedMovieId: (id: number | null) => set(state => ({ ...state, selectedMovieId: id })),
  addToFavorites: (movie: IMovie) => set(state => ({ ...state, favoriteMovies: [...state.favoriteMovies, movie] })),
  removeFromFavorites: (id: number) => set(state => ({ ...state, favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== id) })),
}));

export default useStore;
