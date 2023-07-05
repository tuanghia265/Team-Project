import React from 'react'
import './footer.css'

const Footer = () => {
    return (
      

        <div className='footer-ctn'>
            <div className='footer-title'>
                <span className='text-title text'>Trang quản lý di sản văn hoá Lâm Đồng</span>
            </div>

            <div className='footer-content'>
                <div className='ft-left-column'>
                    <ul className='content-text'>
                        <li className='tang-margins'>ADD: Số 1 Phù Đổng Thiên Vương</li>
                        {/* <li>TEL: 0999 888 777</li> */}
                        <li>HOTLINE: (028) 8888 888</li>
                    </ul>
                </div>
                <div className='ft-right-column'>
                <ul className='content-text'>
                        <li className='tang-margins'>FAX: (065) 888 8888</li>
                        <li>MAIL: baotangdalat@dlu.edu.vn</li>
                    </ul>
                </div>
            </div>

            <div className='ft-bottom-title'>
                <span className='text-title text-bottom-title text'>Quản Lý Di Sản Văn Hoá Đà Lạt - Lâm Đồng. All Right Reversed. Designed by CTK45B</span>
            </div>
        </div>
    )
}

export default Footer;