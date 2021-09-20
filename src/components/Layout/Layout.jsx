import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import './style.scss';
import Pet from '../Pets/Pet';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Pets</Menu.Item>
          {/* <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item> */}
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64, overflow: 'initial' }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Search</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Pet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Test App</Footer>
    </Layout>
  );
};

export default MainLayout;
