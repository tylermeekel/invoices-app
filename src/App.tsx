//Purpose: Main App file, loaded in by index.tsx file, loads in MainContent, InputForm, and **SIDEBAR** - might not longer load in SideBar
//Handles toggling of the InputForm

//Imports
import React from 'react';
import './App.css';
//import Sidebar from './Sidebar'; - Might be removing
import MainContent from './MainContent';
import InputForm from './InputForm';


//Main Function
function App() {
  
  //State to determine whether or not to display input form
  const [inputting, setInputting] = React.useState(false);


  //Function to toggle Input form
  function toggleInputting(){
    setInputting(v => !v)
  }

  //Component JSX
  return (
    <div className="App">
      <MainContent addInvoiceFunc={toggleInputting}/>
      {inputting && <InputForm closeFunction={toggleInputting}/>} {/*Conditionally loads the InputForm based on 'inputting' state value*/}
    </div>
  );
}

export default App;
