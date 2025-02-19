import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

function App() {
  const [backgroundColor, setBackgroundColor] = useState<string>("defaultBackgroung");

  return (
    <div className="App">
      
      {/*<Header/>*/}
      <Main/>
      
 
    </div>
  );
}

export default App;
