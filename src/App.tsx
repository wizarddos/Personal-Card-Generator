import React from 'react';
import './App.css';
import DataForm from './components/form';

export const Data = {
  name: "",
  country: "",
  age:"",
  adress:""
}

function App() {


  const generateCard = ()=>{
    console.log("runned")
  }
  return (
    <>
      <h1>Human Card Generator</h1>
      <DataForm  createCard = { () => generateCard() }/>
    </>
    

  );
}

export default App;
