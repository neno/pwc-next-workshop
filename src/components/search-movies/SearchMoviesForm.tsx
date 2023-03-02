'use client';

import useStore from '@/store';
import { Button } from '../button/Button';

export default function SearchMoviesForm() {
  const { searchTerm, setSearchTerm } = useStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const q = event.currentTarget.searchTerm.value;
    setSearchTerm(q);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ol className='w-full p-4 m-0 bg-gray-200 flex gap-4 items-center content'>
        <li className='flex-1'>
          <input
            type='text'
            placeholder='Search movies by title'
            name='searchTerm'
            className='p-2 flex w-full'
            defaultValue={searchTerm}
          />
        </li>
        <li className='flex-0'>
          <Button type='submit'>Search</Button>
        </li>
      </ol>
    </form>
  );
}
