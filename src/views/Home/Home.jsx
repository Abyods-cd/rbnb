import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import { Carousel } from 'antd';
import { CarouselItem } from './style';
import iconsData from '@/assets/local-data/icons.json'



const Home = memo(() => {
  return (
    <HomeWrapper>
      {iconsData.map(item => (
        <div className="item" key={item.itemId}>
          <Carousel arrows infinite={false} className='ant-carousel'>
            {item.imgUrl.length >= 1 ? (
              item.imgUrl.map((img, index) => (
                <CarouselItem $imgurl={img} key={index} />
              ))
            ) : (
              <div>No image available now</div>
            )}
          </Carousel>
          <div className="text">
            <div className="title">{item.title}</div>
            <div className="host">{item.host}</div>
            <div className="info">{item.otherInfo}</div>
          </div>
        </div>
      ))}
    </HomeWrapper>
  );
});

export default Home