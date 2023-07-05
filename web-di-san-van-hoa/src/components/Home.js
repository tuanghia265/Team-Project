import logo from './logo.svg';
import './Home.css';
import Footer from './Footer';
import Item from './Event/Item.js'
import VerticalText from './VerticalText.js';
import VerticalTextReverse from './VerticalTextReverse.js';
import AutoScroll from './AutoScroll';
import Heading from './Heading';
import { Link, NavLink } from "react-router-dom";

import ScrollReveal from 'scrollreveal';
// import Scroll Reveal
// import ScrollReveal from 'scrollreveal';
// import 'scrollreveal/dist/scrollreveal.css';



import hinh1 from './Event/images/congchieng.jpg'
import hinhLuaChin from './Event/images/lua-chin-vai-lon.jpg'
import hinhLua2 from './Event/images/hinhlua2.jpg'
import hinhLua3 from './Event/images/hinh3.jpg'
import hinhLua1 from './Event/images/g9.jpg'
import VideoBg from './VideoBg/VideoBg';
import Services from './Services/Services';



const ShowMessage = () => {
  return (alert("Cliked"))
}

const pannel1Element = document.querySelector('.pannel1');
const pannel2Element = document.querySelector('.pannel2');
const pannel3Element = document.querySelector('.pannel3');/////LỖI CHỖ NÀY 
//import

const hinh2 = require('./Event/images/lecuoibatchong.jpg')
const hinh3 = require('./Event/images/luachin.jpg')
const butngoc = require('./Images/butngoc.jpg')
const nhatho = require('./Images/nhatho.png')
const hinhVideo = require('./Images/firstimage.jpg')
const Home = (props) => {
    return (
            <div className='Main'>
      
      <VideoBg />
      <Services/>


      <div className='ctn12'>
        <img className='hinhbn' src={butngoc} />
        <div className='ctn22'>
          <div className='Underline Underline1'></div>
          <span className='title'>Đa dạng di sản văn hoá</span>
          <p>Bảo tàng Lâm Đồng đã tiếp nhận 124 hiện vật từ Kho bạc Nhà nước do Sở Tài chính Lâm Đồng bàn giao. Các hiện vật từng được vua quan, hoàng tộc triều Nguyễn sử dụng, trong đó có một số hiện vật của vua Tự Đức, vua Khải Định, đặc biệt là những hiện vật của vua Bảo Đại và Nam Phương Hoàng hậu.</p>
          <Link to='/DiSan'style={{ textDecoration: 'none' }}><button>Tìm hiểu thêm về di sản</button></Link>
        </div>
      </div>



      <div className='ctn13'>
        <VerticalTextReverse className="Vertical-rv-nhaThoconga" style={{ color: "#f0f0f0", fontSize: "30px" }} text="NHÀ THỜ CON GÀ" />
        <img className='hinhbn' src={nhatho} />
        <div className='ctn23'>
          <div className='Underline Underline1'></div>
          <span className='title'>Nhà thờ Con gà</span>
          <p>Nhà thờ Chánh Tòa là một trong những nhà thờ công giáo ở Việt Nam. Người dân và khách du lịch ưu ái vài gọi nó một cái tên khác “đáng yêu” hơn là nhà thờ Con Gà vì trên đỉnh tháp chuông gắn tượng một con gà trống lớn – một biểu tượng của sự sám hối theo kinh Tân Ước.</p>
          <button>Tìm hiểu thêm</button>
        </div>
      </div>



      <AutoScroll />

      <h2 className='sknb'>Sự kiện nổi bật</h2>
      <div className='Khung-sk'>
        <div className='box-event'>

          <div onClick={() => {
            pannel2Element.style.display = 'none';
            pannel3Element.style.display = 'none';
            pannel1Element.style.display = 'block';
          }}>
            <Item text="Cồng chiêng" hinh={hinhLua1} />
          </div>

          <div onClick={() => {
            pannel1Element.style.display = 'none';
            pannel3Element.style.display = 'none';
            pannel2Element.style.display = 'block';
          }}>
            <Item text="Mừng Lúa Mới" hinh={hinhLua2} />
          </div>

          <div onClick={() => {
            pannel1Element.style.display = 'none';
            pannel2Element.style.display = 'none';
            pannel3Element.style.display = 'block';
          }}>
            <Item text="Phục dựng lễ ..." hinh={hinhLua3} />
          </div>
          <div onClick={() => {
            pannel1Element.style.display = 'none';
            pannel2Element.style.display = 'none';
            pannel3Element.style.display = 'block';
          }}>
            <Item text="Cồng chiêng" hinh={hinhLua1} />
          </div>
          <div onClick={() => {
            pannel1Element.style.display = 'none';
            pannel2Element.style.display = 'none';
            pannel3Element.style.display = 'block';
          }}>
            <Item text="Mừng Lúa Mới" hinh={hinhLua2} />
          </div>
          <div onClick={() => {
            pannel1Element.style.display = 'none';
            pannel2Element.style.display = 'none';
            pannel3Element.style.display = 'block';
          }}>
            <Item text="Phục dựng lễ ..." hinh={hinhLua3} />
          </div>
        </div>

        <div className='pannels'>
          <div className='pannel pannel1'>
            <h3>Liên hoan cồng chiêng Tây Nguyên “Tiếng gọi Đại ngàn”</h3>
            <div className='Underline'></div>
            <p>Được tổ chức lúc 19h00 ngày 29/4/2023; tại điểm tham quan Quần thể Khu du lịch Pini (thôn Đạ Nghịt, xã Lát, huyện Lạc Dương); quy tụ Đoàn nghệ nhân cồng chiêng các địa phương: Đà Lạt, Lạc Dương, Đơn Dương, Đức Trọng và Lâm Hà; diễn tấu cồng chiêng, múa xoang và giao lưu ẩm thực.</p>
            <img className='hinhpn' src={hinh1} />
            <button >Tìm hiểu thêm</button>
          </div>

          <div className='pannel pannel2'>
            <h3>Tái hiện “Lễ hội mừng lúa chín” của người dân tộc Churu</h3>
            <div className='Underline'></div>
            <p>Cộng đồng người Churu là một trong các dân tộc bản địa Lâm Đồng, cũng là một trong những chủ nhân của Di sản không gian văn hóa cồng chiêng Tây Nguyên, mang nhiều nét đẹp văn hóa, phong tục, tập quán, tín ngưỡng giàu bản sắc. Trong khuôn khổ Tuần lễ vàng Du lịch Lâm Đồng 2023, Chương trình tái hiện "Lễ hội mừng lúa chín" sẽ được tổ chức ngày 25/4/2023, tại Nhà văn hoá xã Tà Hine, huyện Đức Trọng.</p>
            <img className='hinhpn' src={hinh2} />
            <button>Tìm hiểu thêm</button>
          </div>

          <div className='pannel pannel3'>
            <h3>Phục dựng "Lễ cưới truyền thống của người K'Ho"</h3>
            <div className='Underline'></div>
            <p>Nhằm giới thiệu cho du khách, khán giả hiểu biết về các nghi thức  trong đám cưới của người K’Ho; với những nét đẹp của người K’Ho trong  lễ hội, phong tục tập quán; giới thiệu một số làn điệu dân ca, cồng chiêng, các nhạc cụ  truyền thống, dân vũ…; khấu hóa nhằm tạo điều kiện cho du khách dễ hiểu, nhưng việc phát triển phải phù hợp với phong tục, tập quán của ngtười K’Ho.</p>
            <img className='hinhpn' src={hinh3} />
            <button>Tìm hiểu thêm</button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
    )
}

export default Home;
