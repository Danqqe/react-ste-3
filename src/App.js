import { useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import Header from './components/Header/Header';
import './App.css';
import Main from './components/Main/Carousel';
import AllCards from './components/footer/AllCards';
import SideCart from './components/Cart/Cart';

function App() {

    return <div>
      <SideCart/>
      <Header />
      <Main />
      <AllCards/>
    </div>
  }

export default App