import React, { memo } from 'react'
import { DetailContentWrapper } from './style'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import parse from 'html-react-parser';


const DetailContent = memo(() => {
  const currentItem = useSelector(state => state.detail.displayedItem)
  const [stillOpen, setStillOpen] = useState(false)
  const [requestText, setRequestText] = useState('')
  const [requsetBtnText, setRequestBtnText] = useState('Request')

  // when the currentItem is changed, check if the item can still be requested
  useEffect(() => {
    if (currentItem.otherInfo[0] === '$') {
      setStillOpen(true)
      setRequestText(currentItem.otherInfo)
    } else {
      setStillOpen(false)
      setRequestText("Coming soon")
      setRequestBtnText("Notify me")
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
        <div className="meet-your-host-section">
          <div className="meet-title">
            Meet your Host
          </div>
          <div className="meet-card">
            <div className="meet-card-avatar">
              <img src={currentItem.host.hostImgUrl} alt="avatar" className='meet-img' />
            </div>
            <div className="meet-card-name">
              {currentItem.host.hostName}
            </div>
            <div className="meet-card-year">
              Started hosting in {currentItem.meetInfo.startHostYear}
            </div>
          </div>

        </div>
        <div className="host-desc">
          <div className="icons">
            {
              currentItem.meetInfo.iconSvg.map((icon, index) => {
                return (
                  <div className="icon" key={index}>
                    {parse(icon)}
                  </div>
                )
              })
            }
          </div>
          <div className="desc">
            {
              currentItem.meetInfo.hostDesc.map((desc, index) => {
                return (
                  <div className="desc-item" key={index}>
                    {desc}
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
      <div className="r-content">
        <div className="request-box">
          <div className="request-text">
            {requestText}
          </div>
          <div className="request-btn-box">
            <button className='request-btn'>
              {requsetBtnText}
            </button>
          </div>
        </div>
      </div>
    </DetailContentWrapper>
  )
})

export default DetailContent