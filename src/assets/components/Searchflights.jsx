import React from 'react'
import "./Searchflights.css"

const Searchflights = () => {
    return (
        <div className="main">
            <div className="parent-container">
                <div className='searchf'>
                    <div className="title">
                        <h2>SEARCH FLIGHTS</h2>
                    </div>
                    <div className="radios">
                        <input type="radio" name="trip" id="oneway" value="oneway" />
                        {/* <label htmlFor="oneway">Return</label> */}
                        <input type="radio" name="trip" id="roundtrip" value="roundtrip" />
                        {/* <label htmlFor="roundtrip">One-way</label> */}
                    </div>
                </div>
            </div>
            <div className="fields">
               <div className="fd1">
               <label className='lb1' htmlFor="">Departure</label><br />
               <input type="text" placeholder='Singapore(SIN)' />
               </div>
               <div className="fd2">
                <label className='lb2' htmlFor="">Arival</label><br />
                <input type="text" placeholder='Washington' />
               </div>
               <div className="fd3">
                <label className='lb3' htmlFor="">Date</label><br />
                <input type="date" placeholder='Date' />
               </div>
               <div className="fd">
                <button className='btn'>SERACH FLIGHTS</button>
               </div>
            </div>
        </div>
    )
}
export default Searchflights
