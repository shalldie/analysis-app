import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Home extends Component {
    state = {
        collapsed: false
    }

    handleToggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <Layout id="app" style={{ minHeight: '100vh' }}>
                <Sider className="app-slider" trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="user" /><span>User</span></span>}>
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="team" /><span>Team</span></span>}>
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon className="slider-trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.handleToggleCollapsed} />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}