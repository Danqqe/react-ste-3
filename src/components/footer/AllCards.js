import {Card, Stack} from 'react-bootstrap';
import CardProd from './CardProd';
import './AllCards.css'

function AllCards() {
    return (
        <div className="MainContent">
        <Stack direction="horizontal" gap={3} >
            <h1>Все твороги</h1>
            <input className="ms-auto" placeholder='Поиск 🔍' />
        </Stack>

        <div className="Cards">
        <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
      </div>
</div>
    );
}

export default AllCards;