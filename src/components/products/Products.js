import React, { Component } from 'react';
import './products.css'
import DisplayedProducts from './DisplayedProducts'


class Products extends Component {
    constructor(){
        super()

        this.state ={
            pageTitle: null
        }
    }
   
    getTitle(){
       var path = window.location.pathname
       var pathSplit = path.split("/")
       var title = pathSplit[1].toUpperCase() + " " + pathSplit[2].toUpperCase()
       return title
    }
    render() {
        return (
            <div className="products-main-container">
                <div className="products-top-div">
                    <span className="products-name-header">{this.getTitle()}</span>
                    <span className="products-name-description">One stop shop. A collection of premium Men's watches designed for sport, style, smart and substance. </span>
                </div>
                <DisplayedProducts />
                <DisplayedProducts />
                <DisplayedProducts />
                <DisplayedProducts />
                <DisplayedProducts />                
            </div>
        );
    }
}

export default Products;
