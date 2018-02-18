import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import MenuContent from './MenuContent'
import { Link } from 'react-router-dom'
import './MenuTab.css'
class MenuTab extends Component {
    render() {        
        return (
            <Menu left isOpen={this.props.tabOpen}>
                <Link id="home" to="/" className="menu-item-link">Home</Link>
                <a id="about" className="menu-item-link">About</a>
                <MenuContent tabOpen={this.props.tabOpen}/>
                <a id="contact" className="menu-item-link menu-contact-link">Contact</a>
            </Menu>
        );
    }
}

export default MenuTab