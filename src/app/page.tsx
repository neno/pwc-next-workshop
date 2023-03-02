import { Gallery } from '@/components/gallery/Gallery';
import { getPopularMovies } from '@/lib/api';

export default async function Home() {
  const results = await getPopularMovies();
  return (
    <main>
      <div className='grid grid-cols-fluid gap-16'>
        {/* <Gallery movies={results} /> */}
      </div>
    </main>
  );
}
