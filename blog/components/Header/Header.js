import React from 'react';
import { Row, Col, Menu } from 'antd';
import { HomeOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <span className="header-logo">Mars</span>
        <span className="header-text">天道酬勤</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key='home'>
            <HomeOutlined />首页
          </Menu.Item>
          <Menu.Item key='video'>
            <StarFilled />视屏
          </Menu.Item>
          <Menu.Item key='smile'>
            <StarTwoTone />生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header;

