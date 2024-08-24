import React, { memo } from 'react'
import { IconsFooterWrapper } from './style'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

const IconsFooter = memo(() => {
  return (
    <IconsFooterWrapper>
      <div className="icon-img-box">
        <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Elvis/original/b8a75b4b-35cc-4b25-b67c-bf6f9f980944.png;" alt="icon-img" className='icon-img' />
        <div className="icons">
          <div className="title">
            icons
          </div>
          <div className="text">
            Extraordinary experiences hosted by the world’s greatest<br /> names in music, film, TV, art, sports and more.
          </div>
        </div>
      </div>
      <div className="icon-info">
        <div className="l-info">
          <EmailOutlinedIcon className='l-icon' />
          <div className="l-text-title">
            Request to book
          </div>
          <div className="l-text-content">
            Choose your dates, add your guests, then answer a question about why you want to go.
            
          </div>
        </div>

        <div className="m-info">
          <CheckCircleOutlineOutlinedIcon className='m-icon' />
          <div className="m-text-title">
            Selection process
          </div>
          <div className="m-text-content">
            First, we’ll randomly choose a set of potential guests. Next, we’ll review their answers for unique perspectives and connections to the icon. Then, we’ll invite selected guests to book.
          </div>
        </div>

        <div className="r-info">
          <ContactMailOutlinedIcon className='r-icon' />
          <div className="r-text-title">
            Requirements
          </div>
          <div className="r-text-content">
            You’ll need an active Rbnb account and the app to participate, and be a resident of an eligible country or region. It doesn’t cost anything to submit a request.
          </div>
        </div>
      </div>

    </IconsFooterWrapper>
  )
})

export default IconsFooter