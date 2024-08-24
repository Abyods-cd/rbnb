
import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DetailImageWrapper } from './style'
import IosShareIcon from '@mui/icons-material/IosShare';
import SharePanel from '@/views/Home/c-cpns/SharePanel/SharePanel';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const DetailImage = memo(() => {
  const currentItem = useSelector(state => state.detail.displayedItem)
  const [onlyHaveOneImg, setOnlyHaveOneImg] = useState(false)
  // set showSharePanel to false
  const [showSharePanel, setShowSharePanel] = useState(false);
  const [favorite, setFavorite] = useState(false)

  // function to close the share panel
  function onClose() {
    setShowSharePanel(false);
  }

  // check if the item only have one img
  useEffect(() => {
    if (currentItem.imgUrl.length === 1) {
      setOnlyHaveOneImg(true)
    } else {
      setOnlyHaveOneImg(false)
    }
  }, [currentItem])

  return (
    <DetailImageWrapper>
      {showSharePanel && <SharePanel imgUrl={currentItem.imgUrl[0]} title={currentItem.title} onClose={onClose}></SharePanel>}
      <div className="detail-header">
        <div className="title">
          {currentItem.title}
        </div>
        <div className="icons">
          <div className="share" onClick={() => setShowSharePanel(true)} >
            <IosShareIcon className="share-icon" />
            <span className="share-text">Share</span>
          </div>
          <div className="favorite" onClick={() => setFavorite(!favorite)}>
            {favorite ? <FavoriteOutlinedIcon className="favorite-icon" /> : <FavoriteBorderOutlinedIcon className="favorite-icon" />}
            <span className="favorite-text">Save</span>
          </div>
        </div>
      </div>


      {/* if the item only have one img, show the img only */}
      {
        onlyHaveOneImg && (
          <div className="img-box">
            <div className="only-box">
              <img src={currentItem.imgUrl[0]} alt="primary-img" className='primary-img only' />
            </div>
          </div>
        )
      }

      {/* if the item have more than one img, show the img box */}
      {
        !onlyHaveOneImg && (
          <div className="img-box">
            <div className="primary">
              <img src={currentItem.imgUrl[0]} alt="primary-img" className='primary-img' />
            </div>
            <div className="side-imgs">
              {
                currentItem.imgUrl.map((img, index) => {
                  if (index !== 0) {
                    return (
                      <div className="side-img-box" key={index} >
                        <img src={img} alt="side-img" className='side-img' />
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        )
      }

    </DetailImageWrapper >
  )
})

export default DetailImage