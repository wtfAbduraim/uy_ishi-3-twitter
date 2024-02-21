import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <hr className='span'/>
        <Main />
        <hr className='span_2'/>
        <Footer />
      </div>
    </>
  );
}

export default App;
