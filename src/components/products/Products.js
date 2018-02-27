import React, { Component } from 'react';
import './products.css'
import DisplayedProducts from './DisplayedProducts'
import Products2 from '../tools/ProductGenerator'
const product = `${<script type="text/javascript">
    amzn_assoc_tracking_id = "waterstore03-20";
amzn_assoc_ad_mode = "manual";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_design = "enhanced_links";
amzn_assoc_asins = "B01LEB3AEQ";
amzn_assoc_placement = "adunit";
amzn_assoc_linkid = "98d9f838308f121dbea81bbf2d042ce7";
</script>}`

class Products extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: null
        }
    }

    getTitle() {
        var path = window.location.pathname
        var pathSplit = path.split("/")
        var title =  (pathSplit[2] && pathSplit[1]) ? pathSplit[1].toUpperCase() + " " + pathSplit[2].toUpperCase() : pathSplit[1].toUpperCase()
        return title
    }
    render() {
        return (
            <div>                
                <div className="products-main-container">
                    <div className="products-top-div">
                        <span className="products-name-header">{this.getTitle()}</span>
                        <span className="products-name-description">A collection of premium products. </span>
                    </div>                                                                   
                    <Products2/>                 
                </div>
            </div>
        );
    }
}

export default Products;
