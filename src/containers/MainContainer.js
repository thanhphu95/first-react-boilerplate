import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/common/Sidebar';
import Footer from '../components/common/Footer';
import Home from '../components/home/Home';


const mainContainer = props => (
    <Layout>
        <Sidebar/>
        <Layout>
            <Home/>
            <Footer/>
        </Layout>
    </Layout>
);

export default mainContainer;