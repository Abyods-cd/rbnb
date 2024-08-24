import React, { memo, useEffect, useState } from 'react';
import localTabsData from '@/assets/local-data/tabs.json';
import { TabsWrapper } from './style';
import { setCurrentTab } from '@/store/modules/home.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Tabs = memo(() => {
  // get the tabs data
  const tabsData = useSelector(state => state.home.tabsData);

  // add active class to the current tab
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();

  // dispatch the current tab to the store
  function handleTabClick(index,item) {
    setCurrentIndex(index);
    dispatch(setCurrentTab(item));
  }


  return (
    <TabsWrapper>
      {
        tabsData.map((item, index) => {
          return (
            <div className={`tabItem ${currentIndex === index ? "active" : ""}`} key={item.id} onClick={() => handleTabClick(index,item)}>
              <img src={item.iconImgUrl} alt="tabImg" className="tabImg" />
              <div className="tabName">{item.name}</div>
            </div>
          )
        })
      }
    </TabsWrapper>
  )
})

export default Tabs