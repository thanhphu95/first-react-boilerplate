import React from 'react';
import Sidebar from './components/common/Sidebar';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import mainContainer from './containers/MainContainer';
import AboutContainer from './containers/AboutContainer';

const { Content, Footer } = Layout;

const Routes = () => (
    <Router>
        <Layout>
            <Sidebar />
            <Layout>
                <Switch>
                    <Route exact path="/" component={mainContainer} />
                    <Route exact path="/home" component={mainContainer} />
                    <Route exact path="/about" component={AboutContainer} />
                </Switch>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        background: '#fff',
                        minHeight: 480,
                    }}
                >
                    ontent
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </Router>
);

export default Routes;
