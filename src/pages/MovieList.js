// import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';
import { Card } from '../components';

export const MovieList = ({apiPath, title}) => {
  //const [movies, setMovies] = useState([]);
  //const url = `https://api.themoviedb.org/3/${api}?api_key=86708f894e89ef0db9594b1006c83d60`;
  const { data: movies } = useFetch(apiPath);
  const pageTitle = useTitle(title);
  
  // useEffect(() => {
  //   document.title = `${title} / Cinemate`;
  // });

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }
        </div>
      </section>
    </main>
  )
}
