import React, { memo, useState } from 'react'
import { HomeFooterWrapper } from './style'
import { Tabs } from 'antd';
import homeFooterItems from '@/assets/local-data/home-footer.json'

const HomeFooter = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)

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
                <div className={`tab ${currentIndex === index ? "active" : ""}`} key={item.key} onClick={()=>setCurrentIndex(index)}>
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







