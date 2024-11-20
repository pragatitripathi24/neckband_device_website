import React from 'react';
import Card7 from '../../assets/card7.jpeg';
import Card2 from '../../assets/card2.jpeg';
import Card3 from '../../assets/card3.jpeg';
import Card4 from '../../assets/card4.jpeg';


import './Workcard.css';

const Workcard = () => {

  return (
    <div style={{backgroundColor:"#363d42;"}}>
      {/* Centered Heading */}
      <h2 className="stroke-text-main1"> HOW DOES IT WORK</h2>

      {/* Card Deck */}
      <div className="card-deck" style={{ marginTop: "30px", marginBottom: "100px" }}>
        {/* First Card */}
        <div className="card">
          <img src={Card7} alt="Smart Neckband" className="card-image" />
          <div className="card-body">
            <h3>Smart Neckband Data Collection</h3>
            <p>Our IoT Smart Neckbands capture real-time data on health metrics like heart rate and body temperature, sending it to the cloud.</p>
          </div>
        </div>

        {/* Second Card */}
        <div className="card">
          <img src={Card2} alt="Cloud Processing" className="card-image" />
          <div className="card-body">
            <h3>Cloud Processing</h3>
            <p>In the cloud, AI and Machine Learning algorithms process, classify, and convert raw data into actionable insights.</p>
          </div>
        </div>

        {/* Third Card */}
        <div className="card" >
          <img src={Card3} alt="Instant Access" className="card-image" />
          <div className="card-body">
            <h3>Instant Access on Your Devices</h3>
            <p>Users receive health insights on their smartphones and computers, allowing real-time monitoring from anywhere.</p>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="card">
          <img src={Card4} alt="Fourth Card" className="card-image" />
          <div className="card-body">
            <h3>Comprehensive Insights for Livestock Management</h3>
            <p>This IoT-powered solution provides real-time analytics and trend forecasts, enabling farmers to make data-driven decisions to improve livestock health. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
