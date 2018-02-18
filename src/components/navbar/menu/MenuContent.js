import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom' 
import boy from '../../../images/man.png'
import girl from '../../../images/woman.png'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MenuContent extends Component {
    handleClick = (e) => {
        console.log('click ', e);
    }
    render() {        
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                mode="inline"
                style={{ backgroundColor: 'rgba(239,239,239, 1)' }}
            >
                <SubMenu style={{ backgroundColor: 'rgba(239,239,239, 1)' }} key="sub1" title={<span><img style={{width: '27px', height: '27px', marginLeft: '-20px', marginRight: '10px'}}src={boy} /><span>Shop Men</span></span>}>
                    <Menu.Item style={{ padding: '0', margin: '0', backgroundColor: 'rgba(239, 239, 239, 1' }} key="1"><Link to="/men/watches">Watches</Link></Menu.Item>
                    <Menu.Item style={{ padding: '0', margin: '0', backgroundColor: 'rgba(239, 239, 239, 1' }} key="2">Option 2</Menu.Item>
                    <Menu.Item style={{ padding: '0', margin: '0', backgroundColor: 'rgba(239, 239, 239, 1' }} key="3">Option 3</Menu.Item>
                    <Menu.Item style={{ padding: '0', margin: '0', backgroundColor: 'rgba(239, 239, 239, 1' }} key="4">Option 4</Menu.Item>

                </SubMenu>
                <SubMenu style={{ backgroundColor: 'rgba(239,239,239, 1)' }} key="sub2" title={<span><img style={{width: '25px', height: '25px', marginLeft: '-20px', marginRight: '10px'}}src={girl} /><span>Shop Women</span></span>}>
                    <Menu.Item style={{ padding: '0', margin: '0', backgroundColor: 'rgba(239, 239, 239, 1' }} key="5">Option 5</Menu.Item>
                    <Menu.Item style={{ padding: '0', margin: '0', backgroundColor: 'rgba(239, 239, 239, 1' }} key="6">Option 6</Menu.Item>

                </SubMenu>            
            </Menu>
        );
    }
}

export default MenuContent