import React, { useState } from 'react'
import "./Popular.css"
import right from "../images/arrow-right.png"
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"
import c4 from "../images/c4.png"
import video from "../images/video.png"
import star from "../images/star.png"



const Popular = () => {
    const [data, setData] = useState([
        {
            id: 1,
            image: c1,
            about: "Entire bungalow",
            title: "Matterhorn Suites",
            price: "$342/night",
            rating: "4.8",
            reviews: "(2,345 reviews)"
        },
        {
            id: 2,
            image: c2,
            about: "2-Story beachfront suite",
            title: "Discovery Shores",
            price: "$852/night",
            rating: "3.4",
            reviews: "(104 reviews)"
        },
        {
            id: 3,
            image: c3,
            about: "Single deluxe hut",
            title: "Arctic Hut ",
            price: "$348/night",
            rating: "3.1",
            reviews: "(200 reviews)"
        },
        {
            id: 4,
            image: c4,
            about: "Deluxe King Room",
            title: "ADeluxe King Room",
            price: "550/night",
            rating: "4.9",
            reviews: "(309 reviews)"
        },
    ])


    return (
        <div className="containerPopular">
            <div className="head">

                <h1 className='headT'>Popular Stays</h1>
                <div className="view">
                    <p>View all stays</p>
                    <img src={right} alt="" />
                </div>
            </div>
            <div className="cardContainer">
                <div className="cardContainer">
                    {data.map((item) => {
                        return (
                            <div className="cards" key={item.id}>
                                <img className='c1' src={item.image} alt="" />
                                <div className="about">
                                    <p className='abutp'>{item.about}</p>
                                    <img className='arrow1' src={video} alt="" />
                                </div>
                                <h2 className="titleC1">{item.title}</h2>
                                <p className='price'>{item.price}</p>
                                <div className="ratings">
                                    <img src={star} alt="" />
                                    <p>{item.rating}</p>
                                    <strong className='review'>{item.reviews}</strong>
                                </div>
                                <div className="btncon">
                                    <button className='detailsbtn'>MORE DETAILS</button>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

        </div>
    )
}
export default Popular
