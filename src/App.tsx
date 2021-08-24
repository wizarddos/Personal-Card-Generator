import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataForm from './components/form';
import AuthorCard from './components/card';
import { render } from '@testing-library/react';
import { useState } from 'react';

export const Data = {
  name: "",
  about:""
}

function App() {
  const [sholudrender, changeShouldRender] = useState(false);


  const generateCard = ()=>{
    changeShouldRender(!sholudrender);
  }
  return (
    <>
      <h1>Sekcja `o autorze` w formie ładnej karty</h1>
      <div className = "content">
        <DataForm  createCard = { generateCard }/>
        <div className = "card-panel">
          <h2>Twoja karta autora</h2>
          {
            sholudrender ? <AuthorCard /> : <></>
          }

          <button className = "btn btn-primary btn-danger" onClick = {generateCard} >Wyczyść Kartę</button>
        </div>
      </div>
    </>
    

  );
}

export default App;
