import React, { Component } from 'react'
import { connect } from 'react-redux';
import './home.css'
import CoverPhoto from '../../images/waterGoldBraceletsedited.jpg'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import Products2 from '../tools/ProductGenerator'
import { updateMobileWidth } from '../../ducks/Reducer'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            mobile: null
        }
        this.updateMobileWidth = this.updateMobileWidth.bind(this)
    }


    updateMobileWidth(tf) {
        if (window.innerWidth > 400) {
            this.setState({ mobile: false })
        } else {
            this.setState({ mobile: true })
        }
    }

    componentDidMount() {
        this.updateMobileWidth()
        window.addEventListener("resize", this.updateMobileWidth)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateMobileWidth)
    }
    render() {

        // console.log("WINDOW WIDTH", window.innerWidth)

        return (
            <div className="home-main-container">
                <div>
                    <div className="home-main-picture-div">
                        <div className="cover-gradient">
                            {this.state.mobile ?
                                <div className="home-mobile-pictures-div">
                                    <img src={CoverPhoto} className="home-main-img" />
                                </div>
                                :
                                <div className="home-pictures-div">
                                    <img src={CoverPhoto} className="home-main-img-hidden" />
                                </div>
                            }
                        </div>
                        {/* <span className="home-picture-simple">Simple</span> */}
                        {/* <span className="home-picture-luxury">Luxury</span> */}
                    </div>
                    <div className="home-under-picture-div">
                        <span className="home-under-pic-header">DECOR</span>
                        <Products2 param={'decor'} homePage={true} />
                        <Link className="home-shop-mens-button-test" to="/decor">SHOP DECOR</Link>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="home-under-pic-header">MOTIVATION</span>
                        <Products2 param={'motivation'} homePage={true} />
                        <Link className="home-shop-mens-button-test" to="/motivation">SHOP MOTIVATION</Link>

                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { updateMobileWidth })(Home)