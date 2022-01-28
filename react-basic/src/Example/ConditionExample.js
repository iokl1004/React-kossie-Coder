import React, { useState, useEffect } from 'react';

function ConditionExample() {
  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);

  useEffect(() => {
    console.log(condition);
  }, [condition]);

  // condition의 값이 true일 경우 renderCondition 변수에 'true' 넣고,
  // 아니면 'False'값 넣기
  const renderCondition = condition
    ? 'True'
    : 'False'

  return (
    <div className="App">
      <h1>Kossie Coder</h1>
      <div>
        {renderCondition}
      </div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ConditionExample;
