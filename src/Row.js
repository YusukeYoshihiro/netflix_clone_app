// rfce
import React,{useState, useEffect} from 'react'
import axios from './axios';
import './Row.css';


const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl }) {

  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if put [], run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
      //It will get "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213",
    }
    fetchData();
  }, [fetchUrl])
  
  console.table(movies);
  return (
    <div className="row">
       {/* title */}
       <h2>{title}</h2>
        
      {/* container -> posters */}
       <div className="row__posters">
         {/** row__poster */}

         {movies.map(movie => (
           // poster_path -> is snipped of URL "/2VsVifJ5OCJ9L2419ZPPoGbD4up.jpg"
           <img 
           className="row__poster"
           src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
         ))}
       </div>
      
    </div>
  )
}

export default Row
