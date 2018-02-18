import React, { Component } from 'react';
import './products.css'

class DisplayedProducts extends Component {
 

  smallerPictures(pics) {
    var returnedPics = []
    var pictureDiv;
    pics.map((e, i) => {
      pictureDiv = (
        <div key={i} className="displayedProducts-smaller-pictures">
          {i + 1}
        </div>
      )
      return returnedPics.push(pictureDiv)
    })
    return returnedPics
  }



  render() {
    return (
      <div className="displayedProducts-main-container">
        <div className="displayedProducts-main-div">
          <div className="displayedProducts-picture">
            pictures
          </div>
          <div className="displayedProducts-smaller-pictures-div">
            {this.smallerPictures([1, 2, 3])}
          </div>
          <span style={{ fontSize: ".7em", fontWeight: "200" }}><span style={{ fontWeight: "400" }}>3</span> styles</span>
          <div className="displayedProducts-product-title-price-div">
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayedProducts;
