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
            title: "Lake Louise Inn",
            price: "550/night",
            rating: "4.9",
            reviews: "(309 reviews)"
        },
    ])


    return (
        <div className="containerPopularP">
            <div className="headP">

                <h1 className='headTP'>Popular Stays</h1>
                <div className="viewP">
                    <p>View all stays</p>
                    <img src={right} alt="" />
                </div>
            </div>
            <div className="cardContainerP">
                <div className="cardContainerP">
                    {data.map((item) => {
                        return (
                            <div className="cardsP" key={item.id}>
                                <img className='c1P' src={item.image} alt="" />
                                <div className="aboutP">
                                    <p className='abutpP'>{item.about}</p>
                                    <img className='arrow1P' src={video} alt="" />
                                </div>
                                <h2 className="titleC1P">{item.title}</h2>
                                <p className='priceP'>{item.price}</p>
                                <div className="ratingsP">
                                    <img src={star} alt="" />
                                    <p>{item.rating}</p>
                                    <strong className='reviewP'>{item.reviews}</strong>
                                </div>
                                <div className="btnconP">
                                    <button className='detailsbtnP'>MORE DETAILS</button>
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
