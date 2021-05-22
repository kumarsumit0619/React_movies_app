import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './Requests';
import './Banner.css';

function Banner() {
  const [movie , setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchRomanceMovies);

      /*getting a random movie from romance movies for banner image */
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)
        ]
      );
    return request;
    }
    fetchData();
  }, []);

  console.log("Sumit: "+movie);

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1) + "..." :str;
  }

  return (
    <header className="banner"
      style={{
            backgroundSize: "cover",
            backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
      }}
    >

    <div className="banner_contents">
        {/* <<<Background Image */}
        {/* title of banner The Witcher */}
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

        {/* div 2 buttons (play and My List) */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button> 
        </div>

        {/* discription */}
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
    </div>
    <div className="banner-fadeBottom">

    </div>
    
    </header>
  )
}

export default Banner
