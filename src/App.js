import {useState} from 'react';

import './App.css';

const App = (props) => {
    const [counter, setCounter] = useState(props.counter);
    
    const counterInc = () => {
      if (counter < 50) setCounter(counter => counter + 1);
    }
    
    const counterDec = () => {
      if (counter > -50) setCounter(counter => counter - 1)
    }
    
    const randomValue = () => {
      let rndm = Math.floor(Math.random() * (50 - (-50)) + (-50));
      setCounter(counter => rndm);
    }
    
    const resetCounter = () => {
      setCounter(counter => 0)
    }
    
    return (
      <div className="app">
        <div className="counter">{counter}</div>
        <div className="controls">
          <button onClick={counterInc}>INC</button>
          <button onClick={counterDec}>DEC</button>
          <button onClick={randomValue}>RND</button>
          <button onClick={resetCounter}>RESET</button>
        </div>
      </div>
    )
  }

export default App;