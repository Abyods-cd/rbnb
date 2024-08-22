import React, { memo, useState } from 'react';
import tabs from '@/assets/local-data/tabs.json';
import { TabsWrapper } from './style';

const Tabs = memo(() => {
  const tabsData = tabs;

  // add active class to the current tab
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <TabsWrapper>
      {
        tabsData.map((item, index) => {
          return (
            <div className={`tabItem ${currentIndex === index ? "active" : ""}`} key={item.id} onClick={() => setCurrentIndex(index)}>
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