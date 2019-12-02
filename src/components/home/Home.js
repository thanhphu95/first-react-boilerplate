import React from 'react';
import { Layout } from 'antd';

const { Content, Header } = Layout;

const home = props => (
    <Layout>
        <Content> <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div></Content>
    </Layout>
);

export default home;