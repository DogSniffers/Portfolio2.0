import React from 'react';
import route from './routes'
import Nav from './Components/Nav/Nav'
import './App.css';

function App() {
  return (
    <>
    <Nav/>
      {route}
    </>
  );
}

export default App;
