import React, { useEffect, useRef, useState } from 'react';

import './App.css';
import Phone from './common/phone';

function App() {
  let timer = false;
  let time = useRef();
  let btn = useRef(null);
  const [Numbers, setNumbers] = useState(60);
  let num = 5;

  const handleclick = () => {
    if (timer === true) {
      return;
    }
    console.log('aa');
    if (timer === false) {
      time.current = setInterval(() => {
        if (num !== 0) {
          num--;
          btn.current.innerHTML = num;
        } else if (num === 0) {
          num = 0;
          btn.current.innerHTML = 'ok';
        }
      }, 1000);
      timer = true;
    } else {
      clearTimeout(time.current);
      timer = false;
    }
  };
  return (
    <div className="App">
      <button ref={btn} onClick={handleclick}>
        {num}
      </button>
      <Phone />
    </div>
  );
}

export default App;
