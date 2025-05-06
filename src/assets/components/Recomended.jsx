import React, { useState } from 'react'
import "./Recomended.css"
import right from "../images/arrow-right.png"
import c1 from "../images/c5.png"
import c2 from "../images/c6.png"
import c3 from "../images/c7.png"
import c4 from "../images/c8.png"

 



const Recomended = () => {
    const [data, setData] = useState([
        {
            id: 1,
            image: c1,
            about: "Bali",
            title: "Matterhorn Suites",
            des:'2D3N',
            price: "$958",
            
        },
        {
            id: 2,
            image: c2,
            about: "Swiss",
            title: "Discovery Shores",
            des:'3D4N',
            price: "$952",
             
        },
        {
            id: 3,
            image: c3,
            about: "Boracay",
            title: "Arctic Hut ",
            des:'4D5N',
            price: "$355",
            
        },
        {
            id: 4,
            image: c4,
            about: "Palawan",
            title: "Lake Louise Inn",
            des:'5D6N',
            price: "$593",
            
        },
    ])


    return (
        <div className="containerPopular">
            <div className="head">

                <h1 className='headT'>Recommended Holidays</h1>
                <div className="view">
                    <p>View all holidays</p>
                    <img src={right} alt="" />
                </div>
            </div>
            <div className="cardContainer">
                <div className="cardContainer">
                    {data.map((item) => {
                        return (
                            <div className="cards" key={item.id}>
                                <img className='c1' src={item.image} alt="" />
                                <div className="about1">
                                    <div className="lft">
                                    <p className='abutp'>{item.about}</p>
                                    <p className='dns'>{item.des}</p>
                                    </div>
                                    <h2 className="arrow">{item.price}</h2>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

        </div>
    )
}
export default Recomended
