import React from 'react';

import './App.css';
import  "./css/card.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataForm from './components/form';
import AuthorCard from './components/card';
import { useState } from 'react';

export const Data = {
  name: "",
  about:"",
  isDark: ""
}

function App() {
  const [sholudrender, changeShouldRender] = useState(false);


  const generateCard = ()=>{
    changeShouldRender(true);
  }


  const deleteCard = ()=>{
    changeShouldRender(false);
  }
  return (
    <>
      <h1>Sekcja `o autorze` w formie karty</h1>
      <div className = "content">
        <DataForm  createCard = { generateCard }/>
        <div className = "card-panel">
          <p className = "huge-p">Twoja karta autora</p>
          {
            sholudrender ? <AuthorCard /> : <></>
          }

          <button className = "btn btn-outline-danger" onClick = {deleteCard} >Wyczyść Kartę</button>
        </div>
      </div>
    </>
    

  );
}

export default App;
