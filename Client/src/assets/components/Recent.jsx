import React from 'react'
import "./Recent.css";
import Fight from "../images/Flight.png"
import Hotel from "../images/Hotel icon.png"
import Atteraction from "../images/Attractions Icon.png"
import Commute from "../images/Commute icon.png"
import Taxi from "../images/Taxi icon.png"
import Movie from "../images/Movies Icon.png"

const Recent = () => {
    return (
        <div className="container">
            <div className="subContainer">
                <p className="srch">REACENT SEACHES</p>
            <div className='containerMain'>
            <div className="leftFL">
                <div className="upperPart">
                    <h2 className='l1'>SIN</h2>
                    <img className='flt' src={Fight} alt="" />
                    <h2 className='l2'>LAX</h2>
                </div>
                <div className="lowerPart">
                    <p className='dept'><span className='sp1'>  Depart on:</span> 7 Sep 2021</p>
                </div>
            </div>
            <div className="leftRt">
                <div className="upperPart">
                    <h2 className='l3'>MY</h2>
                    <img className='flt' src={Fight} alt="" />
                    <h2 className='l4'>DUB</h2>
                </div>
                <div className="lowerPart">
                    <p className='dept'><span className='sp1'>Depart on:</span> 7 Sep 2024</p>
                </div>
            </div> </div>
            </div>
            <div className="prepare">
                <p className='prep'>Prepare for your trip</p>
                <div className="prepImgs">
                    <img className='imgIcon' src={Hotel} alt="" />
                    <img className='imgIcon' src={Atteraction} alt="" />
                    <img className='imgIcon' src={Commute} alt="" />
                    <img className='imgIcon' src={Taxi} alt="" />
                    <img className='imgIcon' src={Movie} alt="" />
                </div>
                <div className="prepData">
                    <p className='data1'>Hote</p>
                    <p className='data2'>Atteraction</p>
                    <p className='data3'>Commute</p>
                    <p className='data4'>Taxi</p>
                    <p className='data5'>Movie</p>
                </div>
            </div>
        </div>
    )
}

export default Recent
