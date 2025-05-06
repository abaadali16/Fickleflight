import React, { useState } from 'react'
import "./Destinations.css"
import right from "../images/arrow-right.png"
import c1 from "../images/c9.png"
import c2 from "../images/c10.png"
import c3 from "../images/c11.png"
import c4 from "../images/c12.png"





const Destinations = () => {
    const [data, setData] = useState([
        {
            id: 1,
            image: c1,
            about: "Paris",
            title: "Matterhorn Suites",
            price: "$958",

        },
        {
            id: 2,
            image: c2,
            about: "Greece",
            title: "Discovery Shores",
    
            price: "$952",

        },
        {
            id: 3,
            image: c3,
            about: "Norway",
            title: "Arctic Hut ",
        
            price: "$355",

        },
        {
            id: 4,
            image: c4,
            about: "Tuscany",
            title: "Lake Louise Inn",
            
            price: "$593",

        },
    ])


    return (
        <div className="containerPopular">
            <div className="head">
                <div className="part1">
                <p className='trip'>Plan your next trip</p>
                <h1 className='headT'>Most Popular Destinations</h1>
                </div>
                <div className="view">
                    <p>View all destinations</p>
                    <img className='ar' src={right} alt="" />
                </div>
            </div>
            <div className="cardContainer">
                <div className="cardContainer">
                    {data.map((item) => {
                        return (
                            <div className="cards" key={item.id}>
                                <img className='c1' src={item.image} alt="" />
                                <div className="about">
                                    <div className="lft">
                                        <p className='abutpD'>{item.about}</p> 
                                    </div>
                                    <p className="arrowD"><span style={{color:"white", fontSize:"small"}}>From</span><br/>{item.price}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

        </div>
    )
}
export default Destinations
