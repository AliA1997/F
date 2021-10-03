import React from 'react';
import WineApi from './api/wineapi';
import logo from './logo.svg';
import './App.css';

function App() {
  const [wines, setWines] = React.useState([]);
  
  React.useEffect(
    () => {
      async function getWines() {
        const wineResponse = await WineApi.getWines();
        setWines(wineResponse.wines);
      }

      getWines();
    },
    []
  );

  return (
    <div className="App">
      <div>
        {wines && wines.map(wine => <p key={wine.id}>{JSON.stringify(wine)}</p>)}
      </div>
    </div>
  );
}

export default App;
