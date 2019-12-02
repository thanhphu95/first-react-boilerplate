import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const sideBar = props => (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}
    >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
                <Link to="/home">
                    <Icon type="user" />
                    <span className="nav-text">Home</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/about">
                    <Icon type="user" />
                    <span className="nav-text">About</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/contact">
                    <Icon type="user" />
                    <span className="nav-text">Contact</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to="/orthers">
                    <Icon type="user" />
                    <span className="nav-text">Ohters</span>
                </Link>
            </Menu.Item>
        </Menu>
    </Sider>
);

export default sideBar;
