import React, { memo } from 'react'
import { SharePanelWrapper } from './style.js'
import CloseIcon from '@mui/icons-material/Close';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TextsmsIcon from '@mui/icons-material/Textsms';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';


const SharePanel = memo(({ imgUrl, title, onClose }) => {
  console.log(imgUrl, title, 11);
  return (
    <SharePanelWrapper>
      <div className="innerBox">
        <CloseIcon className="close-icon" onClick={onClose} />
        <div className="panel-title">Share this experience</div>
        <div className="item-info">
          <img src={imgUrl} alt="item-img" className="item-img" />
          <div className="item-title">{title}</div>
        </div>
        <div className="icons">
          <div className="icon-item">
            <FileCopyIcon className="copy-icon" />
            <div className="icon-text">Copy Link</div>
          </div>
          <div className="icon-item">
            <MarkunreadIcon className="email-icon" />
            <div className="icon-text">Email</div>
          </div>
          <div className="icon-item">
            <MessageIcon className="msg-icon" />
            <div className="icon-text">Messages</div>
          </div>
          <div className="icon-item">
            <WhatsAppIcon className="wa-icon" />
            <div className="icon-text">WhatsApp</div>
          </div>
          <div className="icon-item">
            <TextsmsIcon className="messenger-icon" />
            <div className="icon-text">Messenger</div>
          </div>
          <div className="icon-item">
            <FacebookIcon className="fb-icon" />
            <div className="icon-text">Facebook</div>
          </div>
          <div className="icon-item">
            <XIcon className="twitter-icon" />
            <div className="icon-text">Twitter</div>
          </div>
        </div>

      </div>
    </SharePanelWrapper>
  )
})

export default SharePanel