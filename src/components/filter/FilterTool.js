import React, { Component } from 'react';
import { Button } from 'antd'
import { Icon } from 'antd';
class FilterTool extends Component {
    render() {
        return (
            <div className="filter-tool-main-div">
                <div className="filter-content-div">
                    <span style={{color: 'white', fontSize:"25px"}}>test test</span>
                    <Button type="primary">Test</Button>
                </div>
                <div onClick={this.props.collapseFunc} className={this.props.collapsed ? "filter-tab-button-open" : "filter-tab-button-closed"}>
                    <div className="home-page-filter-span">
                        <span className="filter-button-span">FILTER</span>
                        {/* <Icon style={{color: 'white', marginBottom: '10px'}}type="filter" /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterTool;
