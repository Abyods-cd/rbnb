import React, { memo } from 'react'
import { DetailContentWrapper } from './style'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import parse from 'html-react-parser';


const DetailContent = memo(() => {
  const currentItem = useSelector(state => state.detail.displayedItem)
  const [stillOpen, setStillOpen] = useState(false)
  const [requestText, setRequestText] = useState('')

  // when the currentItem is changed, check if the item can still be requested
  useEffect(() => {
    if (currentItem.otherInfo[0] === '$') {
      setStillOpen(true)
      setRequestText(currentItem.otherInfo)
    }
  }, [currentItem])

  return (
    <DetailContentWrapper>
      <div className="l-content">
        <div className="host">
          <div className="host-avatar">
            <img src={currentItem.host.hostImgUrl} alt="avatar" className='host-img' />
          </div>
          <div className="host-info">
            <div className="title">
              Hosted by {currentItem.host.hostName}
            </div>
            <div className="profession">
              {currentItem.host.hostProfession}
            </div>
          </div>
        </div>
        <div className="detail-info">
          {parse(currentItem.detailHTML)}
        </div>
      </div>
      <div className="r-content">
        <div className="request-box">
          <div className="request-text">
            {requestText}
          </div>
          <div className="request-btn-box">
            <button className='request-btn'>Request</button>
          </div>
        </div>
      </div>
    </DetailContentWrapper>
  )
})

export default DetailContent