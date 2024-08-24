import React, { memo, useEffect, useState } from 'react'
import { HomeFooterWrapper } from './style'
import { Tabs } from 'antd';
import homeFooterItems from '@/assets/local-data/home-footer.json'
import { useSelector } from 'react-redux';

const HomeFooter = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // get the home footer data from the redux store
  const homeFooterItems = useSelector(state => state.home.homeFooterData)
  
  // if the data is not loaded, show loading
  if (!homeFooterItems || homeFooterItems.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <HomeFooterWrapper className='home-footer'>
      <div className="home-footer-title">
        Inspiration for future getaways
      </div>
      <div className="footer-tabs">
        <div className="tabs">
          {
            homeFooterItems.map((item, index) => {
              return (
                <div className={`tab ${currentIndex === index ? "active" : ""}`} key={item.key} onClick={() => setCurrentIndex(index)}>
                  {item.label}
                </div>
              )
            })
          }
        </div>
        <div className="panel">
          {
            homeFooterItems[currentIndex].children.map((item, index) => {
              return (
                <div className="panel-item" key={item.id}>
                  <div className="panel-item-title">
                    {item.title}
                  </div>
                  <div className="panel-item-content">
                    {item.text}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </HomeFooterWrapper >
  )
})

export default HomeFooter







