import React from 'react'
import "./Subscribe.css"
const Subscribe = () => {
    return (
        <div className='subscribecontainerS'>
            <div className="subscribetextS">
                <p className='subpS'>subscribe to our newsletter</p>
                <h1 className='subHS'>Get weekly updates</h1>
            </div>
                <div className="subscribeinputS">
                    <p className='inputPS'>Fill in your details to join the party!</p>
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder='Email address' />
                    <button className='subbtnS'>SUBMIT</button>
                </div>
            
        </div>
    )
}

export default Subscribe
