import { IMovie } from '@/types';
import { FC } from 'react';

interface DefListProps {
  movie: IMovie;
}

export const DefList: FC<DefListProps> = ({ movie }) => (
  <dl className='grid grid-cols-3 w-full border'>
    <dt>Title</dt>
    <dd className='col-span-2'>{movie.title}</dd>
    <dt>Tagline</dt>
    <dd className='col-span-2'>{movie.tagline}</dd>
    <dt>Released</dt>
    <dd className='col-span-2'>{movie.release_date}</dd>
    <dt>Runtime</dt>
    <dd className='col-span-2'>{movie.runtime}</dd>
    <dt>Genre</dt>
    <dd className='col-span-2'>
      {movie.genres?.map((g) => g.name).join(', ')}
    </dd>
    <dt>Overview</dt>
    <dd className='col-span-2'>{movie.overview}</dd>
    <dt>Budget</dt>
    <dd className='col-span-2'>{movie.budget}</dd>
    <dt>Revenue</dt>
    <dd className='col-span-2'>{movie.revenue}</dd>
    <dt>Homepage</dt>
    <dd className='col-span-2'>
      {movie.homepage && (
        <a
          href={movie.homepage}
          title={movie.homepage}
          target='_blank'
          className='inline-block max-w-full truncate'
        >
          {movie.homepage}
        </a>
      )}
    </dd>
    <dt>IMDB ID</dt>
    <dd className='col-span-2'>{movie.imdb_id}</dd>
    <dt>Popularity</dt>
    <dd className='col-span-2'>{movie.popularity}</dd>
    <dt>Vote Average</dt>
    <dd className='col-span-2'>{movie.vote_average}</dd>
    <dt>Votes Count</dt>
    <dd className='col-span-2'>{movie.vote_count}</dd>
    <dt>Spoken Languages</dt>
    <dd className='col-span-2'>
      {movie.spoken_languages?.map((g) => g.name).join(', ')}
    </dd>
  </dl>
);
