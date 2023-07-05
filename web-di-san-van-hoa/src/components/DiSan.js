import React from 'react'
import './DiSan.css'
import avt1 from './Images/nhathoconga.jpg'
import avt2 from './Images/detvai.jpg'
import avt3 from './Images/domain.jpg'
import avt4 from './Images/lhcongchieng.png'
import avt5 from  './Images/lecungthansuoi.jpg'
import avt6 from './Images/dtcattien.jpg'
import h1 from './Images/CongChienLangbiang.png'
import h2 from './Images/vuonhoa.jpg'
import h3 from './Images/le-hoi-dam-trau-lam-dong.jpg'
import h4 from './Images/le-hoi-tra-lam-dong.jpg'
import h5 from  './Images/Congchieng.jpg'
import h6 from './Images/lecungthansuoi.jpg'
import Footer from './Footer'


export default function DS() {
  return (
    <div class = "page">
        <div class = "head">
            <div class = "danhmuc">Danh mục</div>
            <div class = "sort-filter">
                <button class = "sort-button">
                    <p>Sắp xếp</p>
                    <div class = "down-button">
                        ▼
                    </div>
                </button>
                <div class = "sort-content">
                    <a href = "">(A-Z)</a>
                    <a href = "">Lượt truy cập nhiều nhất</a>
                </div>
            </div>
        </div>
        <div class = "body">
            <div class = "body-l">
                <p>Danh lam thắng cảnh</p>
                <p>Di tích lịch sử</p>
                <p>Di vật lịch sử</p>
                <p>Bảo tàng</p>
                <p>Tình trạng</p>
                <p>Địa điểm</p>
                <p>Thời gian</p>
            </div>
            <div class = "body-r">
                <div class = "gallery">
                    <img src = {avt1}></img>
                    <div class="desc"><a href = "">Nhà thờ Con Gà</a></div>
                </div>
                <div class = "gallery">
                    <img src = {avt2}></img>
                    <div class="desc"><a href = "">Nghề dệt vải của dân tộc K'Ho</a></div>
                </div>
                <div class = "gallery">
                    <img src = {avt3}></img>
                    <div class="desc"><a href = "">Nhà Thờ Domaine De Marie</a></div>
                </div>
                <div class = "gallery">
                    <img src = {avt4}></img>
                    <div class="desc"><a href = "">Lễ hội Cồng chiêng LangBiang</a></div>
                </div>
                <div class = "gallery">
                    <img src = {avt5}></img>
                    <div class="desc"><a href = "">Lễ cúng Thần Suối</a></div>
                </div>
                <div class = "gallery">
                    <img src = {avt6}></img>
                    <div class="desc"><a href = "">Di tích Cát Tiên</a></div>
                </div>
            </div>
        </div>
        <div class = "scroll-container">
        <div class = "line-title">
                    <div class =  "history-title">CẬP NHẬT GẦN ĐÂY</div>
                </div>
        <div class="Slide">
        <div class="containerr">
            <div class="slide-container">
                <div class="slide-content">
                    <div class="cards">
                        <div class="card">
                            <div class="card-image">
                                <img src = {h1} class="card-img"></img>
                                
                            </div>
                            <div class="card-content">
                                <p>Lễ hội cồng chiêng LangBiang 2023</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image">
                                <img src = {h2} class="card-img"></img>
                            </div>
                            <div class="card-content">
                                <p>Giá vé tham quan vườn hoa tp. Đà Lạt</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image">
                                <img src = {h3} class="card-img"></img>
                            </div>
                            <div class="card-content">
                                <p>Lễ hội đâm trâu Lâm Đồng</p>
                            </div>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="card">
                            <div class="card-image">
                                <img src = {h4} class="card-img"></img>
                            </div>
                            <div class="card-content">
                                <p>Lễ hội trà Lâm Đồng</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image">
                                <img src = {h5} class="card-img"></img>
                            </div>
                            <div class="card-content">
                                <p>Lễ hội cồng chiêng Tây Nguyên</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image">
                                <img src = {h6} class="card-img"></img>
                            </div>
                            <div class="card-content">
                                <p>Lễ cúng thần suối</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
        </div>
        
        <div class = "news-update">
            <div class = "Main3">
                <div class = "line-title">
                    <div class =  "history-title">TRUY CẬP GẦN ĐÂY</div>
                </div>
                <div class = "main3-dsvh">
                    <div class = "box3 box-dsvh-1">
                        <div class = "text-dsvh">Cát Tiên - Một thánh địa tại vùng Tây Nguyên</div>
                    </div>
                    <div class = "box3 box-dsvh-2">
                        <div class = "text-dsvh">Đến Đà Lạt thưởng thức Cồng chiêng Tây Nguyên dưới chân núi LangBiang</div>
                    </div>
                    <div class = "box3 box-dsvh-3">
                        <div class = "text-dsvh">Nhà thờ Domaine De Marie - Dấu ấn Châu Âu giữa lòng thành phố Đà Lạt</div>
                    </div>
                    <div class = "button-vm"><a href = "">Xem thêm</a></div>
                </div>
            </div>
            
        </div>
       <div class="Footer"><Footer/></div> 
    </div>
    
  )
}
