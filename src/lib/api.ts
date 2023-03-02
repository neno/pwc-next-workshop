const fetchData = async (path: string, params?: string) => {
  const url = `https://api.themoviedb.org/3/${path}?api_key=00f3f32198696caff437631c007a7548${params ? `&${params}` : ''}`;
  console.log('fetchData - api', url);
  
  const res = await fetch(url);
  return await res.json();
}

export async function getPopularMovies() {
  // `https://api.themoviedb.org/3/movie/popular?api_key=00f3f32198696caff437631c007a7548`
  return await fetchData('movie/popular');
}

export async function searchMovies(searchTerm: string): Promise<any | undefined> {
  if (searchTerm) {
    return await fetchData('search/movie', `query=${searchTerm}`);
  }
  
  // console.log('searchMovies - api', searchTerm);
  // return await Promise.resolve({ page: 1, results: []})
}
