import { useState } from 'react';

import logo from './logo.svg';
import './App.scss';
import Baby from './Baby'
import AppRouter from './AppRouter'

export default function App() {
  const [dad, setDad] = useState("Chang");
  const [born, setBorn] = useState(true);

  const changeDad = () => {
    if (dad === "Chang") {
      setDad("Wang")
    }
    else {
      setDad("Chang")
    }
  }

  const spawnBaby = () => {
    if (born === true) {
      return <Baby dad={dad} changeDad={changeDad}/>;
    }
  }
  return (
    <div className="App">
      
      <header className="App-header">
        {spawnBaby()}
        <div id="talk"></div>
        
        <button onClick={() => { setBorn(!born) }}>{(born === true) ? "讓他回去肚子裡" : "讓他生"}</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.{dad}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AppRouter></AppRouter>
      </header>
      
    </div>
  );
}


