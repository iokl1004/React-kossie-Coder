import React from 'react';

// 1. 이렇게 부모 props명인 movie로 직접적으로 해도되고
// const Movie = ( { movie } ) => {
//     return (
//         <div className="movie">
//             <div className="movie-title">{movie.title}</div>
//             <div className="movie-year">{movie.year}</div>
//         </div>
//     );

// };

// 2. 자식 컴포넌트에서 props를 이용해서 할수도 잇다.
const Movie = ( props ) => {
    return (
        <div className="movie">
            <div className="movie-title">{props.movie.title}</div>
            <div className="movie-year">{props.movie.year}</div>
        </div>
    );

};

export default Movie;