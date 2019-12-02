import React from 'react';
import { Layout } from 'antd';

const { Content, Header } = Layout;

const home = props => (
    <Layout>
        <Header title="Home component" />
        <Content> <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div></Content>
    </Layout>
);

export default home;