import React from 'react';
import "./App.css"
import Footer from './components/Footer';
import Info from './components/Info';
import Main from './components/Main';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='App'>
      <Nav/>
      <Main/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;

