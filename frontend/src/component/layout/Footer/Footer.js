import React from 'react';
import './Footer.css'
import playStore from '../../../images/playstore.png';
import appStore from '../../../images/Appstore.png';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="" />
                <img src={appStore} alt="" />
            </div>

            <div className="midFooter">
                <h1>E-commerce</h1>
                <p>High quality is our first priority</p>
                <p>Copyright &copy; remonroy34@gmail.com</p>
            </div>

            <div className="rightFooter">
                <h4>Flow Us</h4>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;