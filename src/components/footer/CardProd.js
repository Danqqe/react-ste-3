import './Group.css'
import { useState } from 'react';
import {Card, Stack} from 'react-bootstrap';

function CardProd() {

  const [addedCart, SetAddedCart] = useState(false)
  const [addToFav, SetAddToFav] = useState(false)



  return (
    <Card style={{ width: '210px' }} className="photograf1">
      <img id="AddToFavButton" width={32} height={32} src={addToFav ? './img/Group 90.png' : './img/Group 91.svg'} onClick={()=> SetAddToFav(!addToFav)}/>
      <Card.Img variant="top" className='photo1' src="./img/5b0532c915e9f966505dbd80.jpg" />
      <Card.Body>
        <Card.Title className='textofcurd'>Творог обыкновенный</Card.Title>
        <Stack direction="horizontal" gap={3}>
        <div><p className='cost'>Цена:</p><p>430₽/унция</p></div>
        <div className="bg-light border ms-auto">
          <img src={addedCart ? './img/Group 95.svg' : './img/Group 91.svg'} onClick={() => SetAddedCart(!addedCart)}/>
        </div>
    </Stack>
      </Card.Body>
    </Card>
  );
}

export default CardProd;