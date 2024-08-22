import React, { memo } from 'react'
import { HomeFooterWrapper } from './style'
import { Tabs } from 'antd';

const HomeFooter = memo(() => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '0',
      label: 'Popular',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '1',
      label: 'Arts & culture',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '2',
      label: 'Outdoors',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '3',
      label: 'Mountains',
      children: 'Content of Tab Pane 2',
    }, 
    {
      key: '4',
      label: 'Beach',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '5',
      label: 'Unique stays',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '6',
      label: 'Categories',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '7',
      label: 'Things to do',
      children: 'Content of Tab Pane 2'
    }
  ];

  return (
    <HomeFooterWrapper className='home-footer'>
      <div className="home-footer-title">
        Inspiration for future getaways
      </div>
      <Tabs defaultActiveKey="0" items={items} onChange={onChange} />;
    </HomeFooterWrapper>
  )
})

export default HomeFooter







