import React from 'react'
import "./Subscribe.css"
const Subscribe = () => {
    return (
        <div className='subscribecontainer'>
            <div className="subscribetext">
                <p className='subp'>subscribe to our newsletter</p>
                <h1 className='subH'>Get weekly updates</h1>
            </div>
                <div className="subscribeinput">
                    <p className='inputP'>Fill in your details to join the party!</p>
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder='Email address' />
                    <button className='subbtn'>SUBMIT</button>
                </div>
            
        </div>
    )
}

export default Subscribe
