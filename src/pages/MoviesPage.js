import {useEffect, useState} from 'react';
import axios from 'axios';

import Pagination from '../components/Pagination/Pagination'

import './moviesPage.scss'

import MovieCard from '../components/MovieCard'

const MoviesPage = () => {

    const [moviesPageList, setMoviesPageList] = useState({
      isFetched: false,
      data: [],
      error: null
    });

    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
            params: {
              api_key: "0a0d562707b514c880247d92ed4795be" // => https://api.themoviedb.org/3/person/latest?api_key=0a0d562707b514c880247d92ed4795be
            }
          })
          .then(function (response) {
            setMoviesPageList({
              isFetched: true,
              data: response.data,
              error: false
            })
          })
          .catch(function (error) {
            setMoviesPageList({
              isFetched: true,
              data: [],
              error: error
            })
          })
          
    }, [activePage])

    // console.log(moviesPageList.data)
    const activePageChanger = (page) => {
      setActivePage(page);
    }

    // console.log(activePage)

    return (
        <div className="popu ">
          
            {
               moviesPageList.isFetched ? (
                 
                 <div className="movies-holder">
                   <Pagination
                      activePage={activePage}
                      setActivePage={activePageChanger}
                      umimiy_saxifalar={moviesPageList.data.total_pages}
                    />
                   {/* <h1>Loaded</h1> */}
                   {
                     moviesPageList.data.results.map((movi, index) => (
                      //  <h2>{movi.title}</h2>
                      <MovieCard
                        id={movi.id}
                        imgLink={movi.poster_path}
                        title={movi.title}
                        key={index} 
                        rating={movi.vote_average}
                        releaseDate={movi.release_date}
                      />
                     ))
                   }

                 </div>

               ) : (
                 <h1>Loading ...</h1>
               )  
            }

           
        </div>

    )
}

export default MoviesPage;