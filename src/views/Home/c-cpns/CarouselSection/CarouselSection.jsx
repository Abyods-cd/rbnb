import React, { memo, useState, useEffect } from 'react'
import { CarouselSectionWrapper, CarouselItem } from './style'
import { Carousel } from 'antd';
import IosShareIcon from '@mui/icons-material/IosShare';
import SharePanel from '../SharePanel/SharePanel';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setSelectedItem } from '@/store/modules/home.js';

const CarouselSection = memo(({ data }) => {
  // set showSharePanel to false
  const [showSharePanel, setShowSharePanel] = useState(false);

  // use dispatch to dispatch actions
  const dispatch = useDispatch();

  // use selector to get the state from the store
  const selectedItem = useSelector(state => state.home.selectedItem);

  // function to handle the share icon click
  function handleShareIconClick(imgUrl, title) {
    setShowSharePanel(true)
    // dispatch the action to set state of store
    dispatch(setSelectedItem({ imgUrl, title }));
  };

  // function to close the share panel
  function onClose() {
    setShowSharePanel(false);
  }


  return (
    <CarouselSectionWrapper>
      {data.map(item => (
        <div className="item" key={item.itemId}>
          <IosShareIcon className="share-icon" onClick={() => handleShareIconClick(item.imgUrl[0], item.title)} />
          <Carousel arrows infinite={false} className={`ant-carousel, ${item.imgUrl.length === 1 ? "hide-dots" : ""}`}>
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

      {/* Share Panel */}
      {
        showSharePanel && <SharePanel imgUrl={selectedItem.imgUrl} title={selectedItem.title} onClose={onClose} />
      }
    </CarouselSectionWrapper>
  )
})

export default CarouselSection