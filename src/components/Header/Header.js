
import Stack from 'react-bootstrap/Stack';
import './Header.css'

function Header() {

    return <div className='mainHeader'>

    <Stack direction="horizontal" gap={3}>
    <div className='leftHeader'>
      <img class="srcicon" src="/img/free-icon-curd-403586 1 (2).png" width={40} height={40}/>
      <div className='leftHeaderText'>
      <h1 class="textofbar">Shop of curd</h1>
      <p class="textofbar2">Магазин лучшего и наивкуснейшего творога</p>
      </div>
      </div>

      <div className='rightHeader ms-auto'>
      <img class="src" src="/img/Group.svg" width={20} height={20}/>
      <span class="src">1500 рублей</span>
      <img class="src" src="/img/free-icon-hearts-138533 1.png" width={20} height={20}/>
      <img class="src" src="/img/1315_2023_01_29_1_ 14.png" width={20} height={20}/>
      </div>
      </Stack>
    </div>

  }

export default Header
