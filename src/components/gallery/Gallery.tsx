import { IMovieItem } from '@/types';
import { FC } from 'react';
import { Card } from '../card/Card';

interface GalleryProps {
  movies: IMovieItem[];
}
export const Gallery: FC<GalleryProps> = ({ movies }) => (
  <div className='gallery'>
    <ul className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-x-8 md:gap-y-16'>
      {movies?.map((movie) => (
        <li className='relative' key={movie.id}>
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        </li>
      ))}
    </ul>
  </div>
);
