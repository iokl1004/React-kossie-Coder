import React from 'react';

const Spinner = () => {
    return (
        //스피너의 위치를 가운데로
        <div className="d-flex justfy-content-center">  
            <div
                className='spinner-border'
                style={{ width: '3rem', height: '3rem' }}
                role="status"
            >
                <span className="sr-only">
                    Loading...
                </span>

            </div>
        </div>
    )

}

export default Spinner;