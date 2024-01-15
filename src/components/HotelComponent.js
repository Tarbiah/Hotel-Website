// HotelComponent.js
import { FaInfoCircle, FaChartPie, FaHotel, FaRegEye  } from 'react-icons/fa'; 
import { BsFillChatLeftQuoteFill, BsPersonFillX  } from "react-icons/bs"

import { PiArrowsClockwiseBold } from "react-icons/pi";
import React from 'react';
import './HotelComponent.css';
import logoImage from './images/logo.png'
import hostel1 from './images/hotel1.png'
import hostel2 from './images/hotel2.png'
import hostel3 from './images/hotel3.png'
import hostel4 from './images/hotel4.png'
import notification from './images/notification.png'
import search from './images/search.png'
const HotelComponent = () => {
  return (
    <div className="app-container">
      <div className="left-container">
       
        <img src={logoImage} alt="Logo" className="logo" />
        <div className="vertical-text">
        <p><FaChartPie /> Overview</p>
        <p>< BsFillChatLeftQuoteFill /> Quotation</p>
        <p><FaHotel /> Hotels</p>
        <p><FaRegEye  /> Sight Seeings</p>
        <p><PiArrowsClockwiseBold /> Transfers</p>
        <p><FaChartPie /> ROE</p>
      </div>

      <div className="bottom-text">
        <p><FaInfoCircle /> Help and Info</p>
        <p><BsPersonFillX /> Logout</p>
      </div>
      </div>

      <div className="right-container">
        <div className="header-container">
          <div className="hotels-heading">Hotels</div>
          <div className="search-container">
            <input type="text" id="search-input" placeholder="Search..." />
          </div>
          <div className="icons-container">
            <img src={search} alt="search" />
            <img src={notification} alt="search" />
            {/* Add more icons as needed */}
          </div>
        </div>

        <div className="additional-container">
          {/* ... previous code ... */}

          <div className="additional-box">
            
            <img src={hostel1} alt="hotel1" />
            <p>Hotel</p>
            <button className="additional-button">AMBASSADOR BANGKOK</button>
            <p>City</p>
            <button className="additional-button">BANGKOK</button>
            <br />
            <button className="check-details-button">Check Details</button>
          </div>

          <div className="additional-box">
            <img src={hostel2} alt="hotel2" />
            <p>Hotel</p>
            <button className="additional-button">RAMADA BY WYNDHAM <br/>BANKOK SUKHUMVIT 11</button>
            <p>City</p>
            <button className="additional-button">BANGKOK</button>
            <br />
            <button className="check-details-button">Check Details</button>
          </div>

          <div className="additional-box">
            <img src={hostel3} alt="hotel3" />
            <p>Hotel</p>
            <button className="additional-button">IBIS SUKHUMVIT</button>
            <p>City</p>
            <button className="additional-button">BANGKOK</button>
            <br />
            <button className="check-details-button">Check Details</button>
          </div>

          <div className="additional-box">
            <img src={hostel4} alt="hotel4" />    
            <p>Hotel</p>
            <button className="additional-button">ANYA NANA</button>
            <p>City</p>
            <button className="additional-button">BANGKOK</button>
            <br />
            <button className="check-details-button">Check Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelComponent;
