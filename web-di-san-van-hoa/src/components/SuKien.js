import logo from './logo.svg';
import './SuKien.css';
import Footer from './Footer';
import Item from './Event/Item.js'
import VerticalText from './VerticalText.js';
import VerticalTextReverse from './VerticalTextReverse.js';
import AutoScroll from './AutoScroll';
import Heading from './Heading';


import ScrollReveal from 'scrollreveal';
// import Scroll Reveal
// import ScrollReveal from 'scrollreveal';
// import 'scrollreveal/dist/scrollreveal.css';


const ShowMessage = () => {
  return (alert("Cliked"))
}



const hinhcc = require('./Event/images/cc.png')
const hinhxe = require('./Event/images/xe.png')
const hinhnm = require('./Event/images/nm.png')
const hinhts = require('./Event/images/ts.png')
const hinhtt = require('./Event/images/denhung.jpg')
const hinhpp = require('./Event/images/phat.png')
const hinhchua = require('./Event/images/chua.png')
const hinhga = require('./Event/images/ga.jpg')
const hinhnt = require('./Event/images/nhatho.jpg')

function App() {
  return (
    <div className='Mainnn'>
      
      <div className='title'>
        <div className='title bg'>
          <span className='title-text'>Sự kiện Đang diễn ra - được quan tâm</span>
        </div>
      </div>
      <div className='Khung-sk'>
        <Item text="Cồng chiêng" hinh={hinhcc} />
        <Item text="Thần suối" hinh={hinhts} />
        <Item text="Đền Hùng" hinh={hinhtt} />
      </div>

      <div className='Khung-sk'>
        <Item text="Festival Hoa" hinh={hinhxe} />
        <Item text="Thần suối" hinh={hinhts} />
        <Item text="Năm mới" hinh={hinhnm} />
      </div>
      <div className='title'>
        <div className='title bg'>
          <span className='title-text'>Sự kiện sắp tới</span>
        </div>
      </div>
      <div className='Khung-sk'>
        <Item text="Festival Hoa" hinh={hinhxe} />
        <Item text="Cồng chiêng" hinh={hinhcc} />
        <Item text="Thần suối" hinh={hinhts} />
      </div>
      <div className='title'>
        <div className='title bg'>
          <span className='title-text'>Du lịch - tham quan các di sản</span>
        </div>
      </div>
      <div className='Khung-sk'>
        <Item text="Ga Đà Lạt" hinh={hinhga} />
        <Item text="Chùa Linh Phước" hinh={hinhchua} />
        <Item text="Nhà thờ Cam Ly" hinh={hinhnt} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;