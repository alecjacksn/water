import React, { Component } from 'react'
import './home.css'
import CoverPhoto from '../../images/waterGoldBraceletsedited.jpg'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="home-main-container">
                <div>
                    <div className="home-main-picture-div">
                        <img src={CoverPhoto} style={{ width: "100%" }} />
                        {/* <span className="home-picture-simple">Simple</span> */}
                        {/* <span className="home-picture-luxury">Luxury</span> */}
                    </div>
                    <div className="home-under-picture-div">
                        <span className="home-under-pic-header">SIMPLE, LUXURY.</span>                        
                        <Link  className="home-shop-mens-button-test" to="/mens/watches">SHOP MENS</Link>
                        <Link  className="home-shop-mens-button-test" to="/womens/watches">SHOP WOMENS</Link>
                    </div>
                    <br />
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <br />
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <br />
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <br />
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <br />
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <br />
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <br />
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <span>........</span>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default Home