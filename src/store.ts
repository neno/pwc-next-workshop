import { createStore, create } from 'zustand';
import { IMovie, IMovieItem } from './types';

export interface IStore {
  searchTerm: string;
  searchResults: IMovieItem[];
  selectedMovie: IMovie | null;
  favoriteMovies: IMovieItem[];
  setSearchTerm: (searchTerm: string) => void;
  setSearchResults: (searchResults: IMovieItem[]) => void;
  setSelectedMovie: (selectedMovie: IMovie) => void;
  addToFavorites: (movie: IMovie) => void;
  removeFromFavorites: (id: number) => void;
}

const useStore = create<IStore>((set): IStore => ({
  searchTerm: '',
  searchResults: [],
  selectedMovie: null,
  favoriteMovies: [],
  setSearchTerm: (searchTerm: string) => set(state => ({ ...state, searchTerm })),
  setSearchResults: (searchResults: IMovieItem[]) => set(state => ({ ...state, searchResults })),
  setSelectedMovie: (selectedMovie: IMovie) => set(state => ({ ...state, selectedMovie })),
  addToFavorites: (movie: IMovie) => set(state => ({ ...state, favoriteMovies: [...state.favoriteMovies, movie] })),
  removeFromFavorites: (id: number) => set(state => ({ ...state, favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== id) })),
}));

export default useStore;

// const modalStore = create<IStore>(
//   (set): IStore => {
//     return {
//       modalPosition: 'right',
//       modalDuration: 3000,
//       modals: [],
//       addModal: (modal: Omit<IModal, 'id'>) => set(
//         (state) => addModal(state, modal),
//       ),
//       removeModal: (id: string) => set((state) => removeModal(state, id)),
//     };
//   },
// );

// export default modalStore;