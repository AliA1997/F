import React from 'react';
import { Button } from 'react-bootstrap';
import WineApi from './api/wineapi';
import InputApi from './api/inputapi';
import Card from './components/Card';
import Form from './components/Form';
import Modal from './components/Modal';
import logo from './logo.svg';
import './App.css';

function App() {
  const [wines, setWines] = React.useState([]);
  const [showCreateWineModal, setShowCreateWineModal] = React.useState(false);
  const [createWineEntryInputData, setCreateWineEntryInputData] = React.useState([]);
  
  React.useEffect(
    () => {
      async function getWines() {
        const wineResponse = await WineApi.getWines();
        setWines(wineResponse.wines);
        // const 
      }

      async function getInputData() {
        const inputDataResponse = await InputApi.getCreateWineEntryInputData();
        setCreateWineEntryInputData(inputDataResponse.inputs);
        // console.log('inputdataresponse:', inputDataResponse);
      }

      getWines();
      getInputData();
    },
    []
  );

  return (
    <div className="App">
      <h2>Wine Down</h2>
      <Button variant="outline-primary" onClick={async () => {
        const initialvalues = {
          "wine": "new example entry", 
          "vintage": 2021,           
          "gws": "98.00",
          "ci": "B",
          "nbj": 3,
          "country_id": 7,
          "entry_status_id": 1
        };
        await WineApi.createWineEntry(initialvalues);
        alert("Wine Entry Created!");
      }}>Create Wine</Button>
      <Button variant="outline-primary" onClick={async () => {
        const initialvalues = {
          "id": 2,
          "wine": "new example entry updated", 
          "vintage": 2021,           
          "gws": "99.00",
          "ci": "B",
          "nbj": 3,
          "country_id": 7,
          "entry_status_id": 2
        };
        await WineApi.updateWineEntry(initialvalues, initialvalues.id);
        alert("Wine Entry Updated!");
      }}>Update Wine</Button>
      <Button variant="outline-primary" onClick={async () => {
        const initialvalues = {
          "id": 6,
        };
        await WineApi.deleteWineEntry(initialvalues.id);
        alert("Wine Entry Deleted!");
      }}>Delete Wine</Button>
      <div style={{display: 'flex', flexWrap:'wrap'}}>
        {wines && wines.map(wine => <Card key={wine.id}{...wine}/>)}
      </div>
    </div>
  );
}

export default App;
