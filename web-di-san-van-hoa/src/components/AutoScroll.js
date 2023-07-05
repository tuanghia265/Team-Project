import React from 'react'
import './AutoScroll.css'
import hinh11 from './Images/img11.png'
import hinh22 from './Images/img22.jpg'
import hinh33 from './Images/img33.jpg'
import hinh44 from './Images/img44.jpg'


export default function AutoScroll() {
    return(
        <div class="container">
        <div class="display">
            <div class="wrap">
                <div class="image">
                    <img  width="1280px" src={hinh11} /> 
                </div>
                <div class="image">
                    <img  width="1280px"src={hinh22} />
                </div>
                <div class="image">
                    <img  width="1280px"src={hinh33}/>
                </div>
                <div class="image">
                    <img  width="1280px"src={hinh44} />
                </div>
            </div>
        </div>
    </div>
    )
}
