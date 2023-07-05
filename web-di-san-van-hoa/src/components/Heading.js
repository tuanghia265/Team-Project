import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import logo from './Images/logoTr.png';
import './Heading.css';


const Heading = () => {
    return (
     
        <div class="Ma">
          <div class="Contain">
            <div    class="logo">
                <Link to= "/"><img width={60} src={logo}/></Link>
            </div>
            <div class="Header">
                <Link to= "/"style={{ textDecoration: 'none' }}><p>Trang Chủ</p></Link>
                <div class="Dropdown">
                    <span><p>Dịch vụ</p> </span>
                    <div class="Dropdown-content">
                        <p>Tham quan</p>
                        <p>Lưu niệm</p>
                        <p>Tour guide</p>
                        <p>Lưu trú</p>
                    </div>
                </div>
                <Link to='/SuKien' style={{ textDecoration: 'none' }}><p>Sự kiện</p></Link>
                 <Link to='/DiSan'style={{ textDecoration: 'none' }}><p>Các di sản</p></Link>
                <Link style={{ textDecoration: 'none' }}><p>Liên Hệ</p></Link>
            </div>
          </div>
        </div>
    );
}

export default Heading;
