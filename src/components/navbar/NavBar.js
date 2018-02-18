import React, { Component } from 'react';
import './navbar.css'
import MenuTab from './menu/MenuTab'
import { Icon } from 'antd'
import CartTab from './cartTab/CartTab'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  constructor() {
    super()

    this.state = {
      tabOpen: false
    }
  }





  render() {
    return (
      <div>
        <MenuTab tabOpen={this.state.tabOpen} />
        <div className="navbar-main-div">
          <div className="logo-search-div">
            <Link className='navbar-logo' to='/'>WATER</Link>
            <Icon style={{marginLeft: "15px", fontSize: "20px", fontWeight: 800}} type="search" />
          </div>
          <div>
            <CartTab />
          </div>

        </div>

      </div>
    );
  }
}

export default NavBar;
