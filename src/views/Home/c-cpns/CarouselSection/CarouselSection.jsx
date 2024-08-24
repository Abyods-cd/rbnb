import React, { memo, useState, useEffect } from 'react'
import { CarouselSectionWrapper, CarouselItem } from './style'
import { Carousel } from 'antd';
import IosShareIcon from '@mui/icons-material/IosShare';
import SharePanel from '../SharePanel/SharePanel';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setSelectedItem } from '@/store/modules/home.js';
import { useNavigate } from 'react-router';
import { changeDisplayedItem } from '@/store/modules/detail.js';
import iconsData from '@/assets/local-data/icons.json'

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

  // useNavigate to navigate to /detail page
  const navigate = useNavigate();

  // function to handle the item click
  function itemClickHandler(imgUrl, title, item) {
    // dispatch actions to set state of home slice and detail slice
    dispatch(setSelectedItem({ imgUrl, title }))
    dispatch(changeDisplayedItem(item));

    // only mock the first 4 items' detail page
    if (item.past === "true" || Number(item.itemId) > 3) {
      // show random (id = 0-3) item's detail page because only mock the first 4 items' detail page
      const randomId = Math.floor(Math.random() * 4);
      console.log(randomId)
      dispatch(changeDisplayedItem(iconsData[randomId]))
    }
    navigate('/detail');
  }

  return (
    <CarouselSectionWrapper>
      {data.map(item => (
        <div className="item" key={item.itemId}>
          <IosShareIcon className="share-icon" onClick={() => handleShareIconClick(item.imgUrl[0], item.title)} />
          <Carousel arrows infinite={false} className={`ant-carousel, ${item.imgUrl.length === 1 ? "hide-dots" : ""}`}>
            {item.imgUrl.length >= 1 ? (
              item.imgUrl.map((img, index) => (
                <CarouselItem $imgurl={img} key={index} onClick={() => itemClickHandler(img, item.title, item)} />
              ))
            ) : (
              <div>No image available now</div>
            )}
          </Carousel>
          <div className="text" onClick={() => itemClickHandler(item.imgUrl[0], item.title, item)}>
            <div className="title">{item.title}</div>
            <div className="host">Hosted by {item.host.hostName}</div>
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