import axios from 'axios';
import {useEffect, useState} from 'react';

import MovieCard from '../components/MovieCard'

import Pagination from '../components/Pagination'


const PolpularsPage = () => {
    const [moviesList, setMoviesList] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/popular?page=1', {
          params: {
              api_key: '8d08d31e1b08de961a19e2ae293de867'
          }
      })
      .then ((response) => {
        setMoviesList ({
            isFetched: true,
            data: response.data,
            error: false,
        })
      })
      .catch(function (error) {
        setMoviesList({
            isFetched: true,
            data: [],
            error: error
        })
      })
      .then(function () {
         // always axecuted
      })
    }, [activePage])

    // console.log(moviesList)

    const activePageChanger = (page) => {
        setActivePage(page);
    }

    return (
        <div className="popu">
            {
                moviesList.isFetched ? (
                    
                    <div className="movies-holder">
                        <Pagination
                            activePage={activePage}
                            setActivePage={activePageChanger}
                            totalPages={moviesList.data.total_pages}
                        />
                        <div className="wrapper">
                            {
                                moviesList.data.results.map((item, index) => (
                                    <MovieCard
                                        id={item.id}
                                        imgLink={item.poster_path}
                                        title={item.title}
                                        key={index} 
                                        rating={item.vote_average}
                                        releaseDate={item.release_date}
                                    />
                                )) 
                            }
                        </div>
                    </div>
                ) : (
                    <h1>Loading ...</h1>
                )
            }
        </div>

    )
}

export default PolpularsPage;