import React, { useState, useEffect } from 'react';
import InputField from './InputField';

const MovieForm = ({ addMovie }) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    }

    const validateForm = () => {
        resetErrors();
        let validated = true;
        if (!movieTitle) {
            setTitleError('영화 제목을 넣어주세요');
            validated = false;
        }

        if (!movieYear) {
            setYearError('개봉년도을 넣어주세요');
            validated = false;
        }
        return validated;
    };

    const resetErrors = () => {
        setTitleError('');
        setYearError('');
    };

    const onSubmit = (event) => {
        event.preventDefault(); //Submit을 햇을때 페이지 리프레시가 안된다!
        if (validateForm()) {
            addMovie({
                id: Date.now(),
                title: movieTitle,
                year: movieYear,
            });
            resetErrors();
            resetForm(); // onSubmit 함수가 끝나면 movieTitle, movieYear 값을 공백으로 처리!
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <InputField
                type="text"
                value={movieTitle}
                placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)}
                errorMessage={titleError}
            />
            <InputField
                type="number"
                value={movieYear}
                placeholder="개봉년도"
                onChange={e => setMovieYear(e.target.value)}
                errorMessage={yearError}
            />
            <button>영화추가</button>

        </form>
    )
}

export default MovieForm;