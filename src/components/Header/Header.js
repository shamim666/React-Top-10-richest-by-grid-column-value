import React from 'react';
// import logo from '../../images/Worlds-Top-10-Richest-Billionaires-2021-4-1-1.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className="rich-container">
            <div className = "rich-text">
                <h2>WelCome to Our Rich World</h2>
                <h4>Top 10 richest People in the World</h4>
                <p>10 percent of the richest people in the United States own almost 70 percent of U.S total Wealth</p>
            </div>
            {/* <div >
                <img className="rich-logo" src={logo} alt="" />
            </div> */}
        </div>
    );
};

export default Header;