import React, { memo } from 'react'
import { FooterWrapper } from './style'
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className="top">
        {/* 1. Support List */}
        <dl className='left-list'>
          <dt>Support</dt>
          <dd><a href="#">Help Centre</a></dd>
          <dd><a href="#">AirCover</a></dd>
          <dd><a href="#">Anti-discrimination</a></dd>
          <dd><a href="#">Disability support</a></dd>
          <dd><a href="#">Cancellation options</a></dd>
          <dd><a href="#">Report neighbourhood concern</a></dd>
        </dl>

        {/* 2. Hosting List */}
        <dl className="center-list">
          <dt>Hosting</dt>
          <dd><a href="#">Rbnb your home</a></dd>
          <dd><a href="#">RCover for Hosts</a></dd>
          <dd><a href="#">Hosting resources</a></dd>
          <dd><a href="#">Community forum</a></dd>
          <dd><a href="#">Hosting responsibly</a></dd>
          <dd><a href="#">Join a free Hosting class</a></dd>
        </dl>

        {/* 3. Rbnb List */}
        <dl className='right-list'>
          <dt>Rbnb</dt>
          <dd><a href="#">Newsroom</a></dd>
          <dd><a href="#">New featuress</a></dd>
          <dd><a href="#">Careers</a></dd>
          <dd><a href="#">Investors</a></dd>
          <dd><a href="#">Rbnb.org emergency stay</a></dd>
        </dl>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="left-text">
            © 2024 Rbnb, Inc.
          </div>
          <div className="left-link">
            <a href="#">· Privacy </a>
            <a href="#">· Terms </a>
            <a href="#">· Sitemap</a>
          </div>
        </div>
        <div className="right">
          <LanguageIcon className="languageIcon" />
          English(SG)
          <div className="currency">
            $ SGD
          </div>
          <FacebookIcon className="facebookIcon" />
          <TwitterIcon className="twitterIcon" />
          <InstagramIcon className="instagramIcon" />
        </div>

      </div>

    </FooterWrapper>
  )
})

export default Footer