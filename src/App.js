import React from 'react'
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Header/> 
    <main>
      <Navbar/>
      <Form/>
    </main>
    </div>
  );
}

export default App;
