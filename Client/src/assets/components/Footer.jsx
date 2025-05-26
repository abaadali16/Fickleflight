import React from 'react'
import "./Footer.css"
import Symbols from "../images/Group.png"
import Facebook from "../images/Vector.png"
import Instagram from "../images/Vector1.png"
import Tweeter from "../images/Vector2.png"
const Footer = () => {
    return (
        <div>
            <div className="footermain">
                <div className="footersec1">
                    <div className="flogo">
                        <img src={Symbols} alt="footer logo here" />
                    </div>
                    <div className="fpara">
                        <p>Fickle Flight is your one-stop travel portal. We offer hassle free flight and <br /> hotel bookings. We also have all your flight needs in you online shop.</p>
                    </div>
                    <div className="ficons">
                        <div className="ficon1">
                            <img src={Facebook} alt="facebook icon" />
                        </div>
                        <div className="ficon2">
                            <img src={Instagram} alt="instagram icon" />
                        </div>
                        <div className="ficon3">
                            <img src={Tweeter} alt="tweeter icon" />
                        </div>
                    </div>

                </div>
                <div className="hline">
                <hr />
                </div>
                <div className="footersec2">
                   <div className="list1">
                     <h4>Company</h4>
                   <ul>
                   <li>About us</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>How we work</li>
                   </ul>
                   </div>
                   <div className="list2">
                     <h4>Support</h4>
                   <ul>
                   <li>Account</li>
                    <li>Support Center</li>
                    <li>FAQ</li>
                    <li>Accesibility</li>
                   </ul>
                   </div>
                   <div className="list2">
                     <h4>More</h4>
                   <ul>
                   <li>Covid Advisory</li>
                    <li>Airline Fees</li>
                    <li>Tips</li>
                    <li>Quarentines ruls</li>
                   </ul>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
