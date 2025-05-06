import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Callapi = () => {
    const [data, setData] = useState([])
    const getAllProducts = () => {
        axios.get('https://fakestoreapi.com/products/').then(
            (res) => {
                console.log(res,'res')
                setData(res.data)
            }
        ).catch((err) => {
            console.log(err, 'err')
        })
    }
    useEffect(() => {
        getAllProducts()
    }, [])
        return (
            <div>
                {data.map((item, index) => (
                    <div key={index}>
                       <div style={{width:"40%"}}>
                       <img style={{width:"20%",height:"15%"}} src={item.image} alt="" />
                       <h3 >{item.title}</h3>
                       <h4>{item.category}</h4>
                       <p>{item.description}</p>
                       </div>
                    </div>
                ))}
            </div>
        ); 
    } 
export default Callapi
