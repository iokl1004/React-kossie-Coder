import React, { useState, useEffect} from 'react';
import MovieForm from '../components/MovieForm';
import Movie from '../components/Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => {
            return movie.id !== id;
        }));
    };

    const renderMovies = movies.length ? movies.map(movie => {
        return (
            <Movie
                movie={movie}
                key={movie.id}
                removeMovie={removeMovie}
            />
        );
    }) : '추가된 영화가 없습니다.';

    const addMovie = (movie) => {
        setMovies([
            ...movies,  //구조분해 할당
            // 예) const p = ["a", "b"] 가 있는데 새로운 배열 Q = ["c"]을 추가하고싶을때는 아래처럼 하면된다!
            movie]);
    };

    return (
        <div>
            <h1>Movie list</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
        </div>
    );
}

export default Movies;