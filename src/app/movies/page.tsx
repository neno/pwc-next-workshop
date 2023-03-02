import { Gallery } from '@/components/gallery/Gallery';
import { getPopularMovies } from '@/lib/api';

export default async function MoviesPage() {
  const data = await getPopularMovies();
  return <Gallery movies={data?.results} />;
}
