import React, { useState, useEffect } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    
    // 존재하면 props값이 click이면 props명을 사용하고,
    // 존재하지 않는다면 Click을 사용
    const clickString = props.click || 'Click';

    return (
        <button onClick={increment}>
            {clickString} {count} </button>
    );
};

export default Counter;