import './Cart.css'
import { useState } from 'react';
import {Card, Stack} from 'react-bootstrap';

function SideCart() {
    const[openCart, SetOpenCart]=useState(true)

    let styleOverflow={}
    let styleSideBlock={}
    if(openCart==true){
        styleOverflow={width: '100%'}
        styleSideBlock={width: '385px'}
    }
    else{
        styleOverflow={width: '0'}
        styleSideBlock={width:'0'}
    }

  return (
    <div className='MainCart'>
        <div className='Overflow' style={styleOverflow} onClick={()=> SetOpenCart(!openCart)}></div>
        <div className='SideBlock' style={styleSideBlock}></div>
    </div>
  );
}

export default SideCart;