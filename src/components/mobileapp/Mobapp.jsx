import React from 'react';
import app1 from "../../assets/app1.JPEG";
import app2 from "../../assets/app2.JPEG";
import app3 from "../../assets/app3.JPEG";
import app4 from "../../assets/app4.JPEG";
import tick from "../../assets/nike.png";
// Import Bootstrap first // Import Bootstrap first
import './Mobapp.css';

const Mobapp = () => {
  return (
    <div style={{ backgroundColor:"#ece7ee"}}>
        <div className="Reasons" id="reasons" style={{backgroundColor:"#ece7ee" }}>

<div className="left-r">

    <img src={app1} alt="" />
    <img src={app2} alt="" />
    <img src={app3} alt="" />
    <img src={app4} alt="" />
</div>

<div className="right-r">
    <span className='section-heading'>Look at our</span>
    <div>
        <span className="stroke-text">Mobile app</span>
        <span > Glimpse!!</span>
    </div>
    <div>
        <div className="details-r">
            <div>
                <img src={tick} alt=""></img>
                <span>Anytime, Anywhere Access</span>
            </div>
            <div>
                <img src={tick} alt=""></img>
                <span>Animal Category Selection</span>
            </div> 
            <div>
                <img src={tick} alt=""></img>
                <span>Vitality Tracking</span>
            </div>
            <div>
                <img src={tick} alt=""></img>
                <span>Tracks animal health in real-time with IoT technology.</span>
            </div>
            {/* <div>
                <img src={tick} alt=""></img>
                <span>Helps monitor heart rate, body temperature, and overall well-being.</span>
            </div>  */}
        </div>
    </div>
    <span style={{
        color: 'var(--gray)',
        fontWeight: "normal,"
    }}>
        
    </span>
    {/* <div className="partners">
        <img src={hero_image_back} alt="" />
        <img src={Rid} alt="" />
    </div> */}
</div>
</div>
    </div>
  )
}

export default Mobapp;