
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { DetailImageWrapper } from './style'

const DetailImage = memo(() => {
  const currentItem = useSelector(state => state.detail.displayedItem)
  return (
    <DetailImageWrapper>
      <div className="title">
        {currentItem.title}
      </div>
      <div className="img-box">
        <img src={currentItem.imgUrl[0]} alt="primary-img" className='primary-img' />
        <div className="side-imgs">
          {
            currentItem.imgUrl.map((img, index) => {
              if (index !== 0) {
                return (
                  <img src={img} alt="side-img" key={index} className='side-img' />
                )
              }
            })
          }
        </div>
      </div>
    </DetailImageWrapper>
  )
})

export default DetailImage