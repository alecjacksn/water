import React, { Component } from 'react';
import './App.css';
import './reset.css'
import NavBar from './components/navbar/NavBar'
import Products from './components/products/Products'
import Filter from './components/filter/Filter'
import { BackTop } from 'antd'
import 'antd/dist/antd.css'
import router from './router'

class App extends Component {
  constructor() {
    super()

    this.state = {
      pagePos: true
    }
  }



  componentDidMount() {
    document.addEventListener('scroll', () => {
      var pagePos = window.scrollY < 10;    
      if (pagePos === true) {
          this.setState({ pagePos: pagePos })
      } else {
        this.setState({pagePos: pagePos})
      }
    });
  }


  render() {   
    return (
      <div className="home-page-container">
        <div className="home-page-filter">
          <BackTop>
            <div className="ant-back-top-inner">UP</div>
          </BackTop>

          {window.location.pathname !== "/" ? <Filter /> : null}
        </div>
        <div className={this.state.pagePos ? 'navbar-scrolled-false' : 'navbar-scrolled-true'}>
          <NavBar />
        </div>
        <div className="home-page-main-content">
          {router}
        </div>
      </div>
    );
  }
}

export default App;
