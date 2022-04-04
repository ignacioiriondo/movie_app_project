import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

import './App.css'
import SearchIcon from './search.svg'


const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";




const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([])
    
    // useEffect ( (title) => {
    //     fetch(`${API_URL}&s=${title}`)
    //     .then(response => (response.json()))
    //     .then(data => {setMovies(data.Search)} )
    //     .catch(error => console.error(error))
    //   }, []);
    

    const searchMovies = async (title) => {
        fetch(`${API_URL}&s=${title}`)
        .then(response => (response.json()))
        .then(data => {setMovies(data.Search)} )
        .catch(error => console.error(error))
    }

    useEffect(() => {
        searchMovies(`Spiderman`)
    }, []);

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            { movies?.length > 0
                ? (
                <div className="container">
                    {movies.map((movie) => (
                    <MovieCard movie={movie}  />))}
                </div>
                ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
                )}
        </div>
    );
}

export default App;
