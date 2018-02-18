import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';


import './Filter.css'
import FilterTool from './FilterTool'


class Filter extends Component {
    constructor() {
        super()

        this.state = {
            collapsed: false
        }
        this.toggleFilter = this.toggleFilter.bind(this)
    }

    toggleFilter(){
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render() {
        return (
            <div className={this.state.collapsed ? "filter-main-div-open" : "filter-main-div-closed"}>
                <FilterTool collapseFunc={this.toggleFilter} collapsed={this.state.collapsed}/>         
            </div>
        );
    }
}

export default Filter;
