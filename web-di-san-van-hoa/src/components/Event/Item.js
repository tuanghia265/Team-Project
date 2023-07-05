import React from 'react'
import './item.css'
import VerticalText from '../VerticalText'

import hinhLua from './images/lua-chin-vai-lon.jpg'
//import files
const hinhcc = require('./images/g9.jpg');
const styles = {
    width: '300px', 
    height: '180px'
}

export default function Item(props) {
    return(
           <div className='big-box'>
            <VerticalText className='text' text={props.text}/>
            <div className='ctn-box'>
                <img style={styles} src={props.hinh}/>
                <div className='attributes'></div>
            </div>
           </div>
    )
}   