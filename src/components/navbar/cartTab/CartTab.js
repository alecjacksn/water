import React, { Component } from 'react'
import { Icon } from 'antd'


class CartTab extends Component {

    render() {
        return (
            <div className="nav-cart-icon">
                <Icon style={{ color: 'rgb(55,58,70)', fontSize: "20px", marginTop: '1px' }} type="shopping-cart" />
                <span style={{ color: 'rgb(55,58,70)', fontSize: "16px", marginRight: "-3px" }}>(0)</span>
            </div>
        );
    }
}

export default CartTab