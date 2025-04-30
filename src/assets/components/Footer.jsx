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
                <div className="footersec2">

                </div>
            </div>
        </div>
    )
}

export default Footer
