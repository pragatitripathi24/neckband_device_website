import React from 'react';
import './Features.css';

const Features = () => {
  const categories = [
    { name: "Health Alert (For Female Animals)", icon: "https://cdn-icons-png.flaticon.com/512/2830/2830304.png" },
    { name: "Activity Monitoring", icon: "https://cdn-icons-png.flaticon.com/512/1554/1554570.png" },
    { name: "Primary Health Parameters", icon: "https://cdn-icons-png.flaticon.com/512/4297/4297821.png" },
    { name: "Livestock & Calving Register", icon: "https://cdn-icons-png.flaticon.com/512/2942/2942506.png" },
    { name: "Animal Vaccination Calendar & Alert", icon: "https://cdn-icons-png.flaticon.com/512/748/748312.png" },
    { name: "Calf Register & Feed Calculator", icon: "https://cdn-icons-png.flaticon.com/512/1517/1517468.png" },
    { name: "Growth Record of Young Stock", icon: "https://cdn-icons-png.flaticon.com/512/1534/1534834.png" },
    { name: "Herd Health & Cattle Breeding Register", icon: "https://cdn-icons-png.flaticon.com/512/2910/2910053.png" },
    { name: "Animal Prescription & History Sheet", icon: "https://cdn-icons-png.flaticon.com/512/1011/1011215.png" },
   
   
    { name: "Care Reminders", icon: "https://cdn-icons-png.flaticon.com/512/3082/3082383.png" },
  ];

  return (
    <div className="features-container">
      <h2 className="stroke-text-main-features"> HOW DOES IT WORK</h2>
      <p className="features-subtitle">
      Comprehensive Solutions for Animal Health and Care
      </p>
      <div className="features-grid">
        {categories.map((category, index) => (
          <div key={index} className="feature-card">
            <img src={category.icon} alt={category.name} className="feature-icon" />
            <h3 className="feature-name">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
