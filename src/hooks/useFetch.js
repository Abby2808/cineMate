import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=86708f894e89ef0db9594b1006c83d60&query=${queryTerm}`;
    //const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
    }, [url]);

  return { data }
}
