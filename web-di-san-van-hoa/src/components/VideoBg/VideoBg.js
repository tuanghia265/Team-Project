import React from "react";
import './VideoBg.css'
import bgVideo from '../videos/videoDS.mp4'


const VideoBg = () => {
    return (
        <div className="video-ctn">
            <span className="video-text">Khám phá các nét đẹp văn hoá Lâm Đồng</span>
            {/* <div className="dimmer"></div> */}
            <div className="line"></div>
            <video className="video-low-p" muted autoPlay loop  src={bgVideo} type="video/mp4" ></video>
        </div>
    )
}


export default VideoBg;