import React from 'react'
import "./Herosection.css"
import "./Searchflights"


const Herosection = () => {
  return (
    <div className='hmain'>
      <div className="bg1">
      </div>
      <div className="bg2">
        <div className="herodata">
          <h2 className='heroheading'>Let’s explore & travel the world</h2>
          <p className='herop'>Find the best destinations and the most popular stays!</p>
          <div className="main">
            <div className="parent-container">
                <div className="form-container">
                    <div className='searchf'>
                        <div className="title">
                            <h2>SEARCH FLIGHTS</h2>
                        </div>
                        <div className="radios">
                            <div className="radio-option">
                                <input type="radio" name="trip" id="oneway" value="oneway" />
                                <label htmlFor="oneway">One-way</label>
                            </div>
                            <div className="radio-option">
                                <input type="radio" name="trip" id="roundtrip" value="roundtrip" />
                                <label htmlFor="roundtrip">Return</label>
                            </div>
                        </div>
                    </div>

                    <div className="fields">
                        <div className="input-group">
                            <label htmlFor="departure">Departure</label>
                            <input type="text" id="departure" placeholder="Singapore(SIN)" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="arrival">Arrival</label>
                            <input type="text" id="arrival" placeholder="Destination" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" />
                        </div>
                        <div className="input-group">
                            <button className='btn'>SEARCH FLIGHTS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
      </div>

    </div>
  )
}

export default Herosection
