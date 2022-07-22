import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-contain">
                <div className="footer-item">
                    <div className='footer-item-header'>SERVICES</div>
                    <div className="footer-item-all">
                    <div>Emergency Checkup</div>
                    <div>Monthly Checkup</div>
                    <div>Weekly Checkup</div>
                    <div>Deep Checkup</div>
                    </div>
                </div>
                <div className="footer-item">
                    <div className='footer-item-header'>ORAL HEALTH</div>
                    <div className="footer-item-all">
                    <div>Fluoride Treatment</div>
                    <div>Cavity Filling</div>
                    <div>Teath Whitening</div>
                    </div>
                </div>
                <div className="footer-item">
                    <div className='footer-item-header'>OUR ADDRESS</div>
                    <div className="footer-item-all">
                    <div>New York - 101010 Hudson</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;