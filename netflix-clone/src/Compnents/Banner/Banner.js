import { useEffect } from "react";
import React, {useState}from "react";
import axios from "../../utils/Axios";
import request from "../../utils/request";
import  "./banner.css";

function Banner(){
    const [movie,setMovie]=useState({});

    useEffect(()=>{
        (async ()=>{
            try{
                const requests=await axios.get(request.fetchingNetflexOriginal);
                // console.log(requests);
                setMovie(requests.data.results[Math.floor(Math.random()*requests.data.results.length)]);
            }catch(error){
                console.error("error",error)
            }
        })()
    },[]);

    function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1) + '...' : str;
    }
  return (
    <div className="banner"
       style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://image.tmdb.org/3/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
       }}
    >
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name ||movie?.original_name}

            </h1>
            <div className="banner__buttons">
                <button className="banner__buttons Play">Play</button>
                <button className="banner__buttons List">My List</button>
            </div>
            <p className="banner__description">{truncate(movie?.overview,150)}</p>

        </div>
        

    </div>
  )
}

export default Banner