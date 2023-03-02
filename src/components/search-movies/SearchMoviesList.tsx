'use client';

import useStore from '@/store';
import { IMovieItem } from '@/types';
import { FC } from 'react';
import { Gallery } from '../gallery/Gallery';

interface SearchMovilesListProps {
  searchTerm: string;
  searchResults: IMovieItem[];
}

export const SearchMoviesList: FC<SearchMovilesListProps> = ({
  searchTerm,
  searchResults,
}) => {
  // const { searchTerm, searchResults } = useStore();

  if (searchResults?.length > 0) {
    return <Gallery movies={searchResults} />;
  }

  if (searchTerm) {
    return <p>Nothing found!</p>;
  }

  return null;
};
