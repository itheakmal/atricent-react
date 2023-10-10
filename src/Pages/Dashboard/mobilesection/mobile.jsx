import React from 'react'
import './mobile.css'
import { Container, Row, Col } from 'reactstrap';
import mobileImage from '../../../assets/images/iPhone-X-Isometric-View-Mockup 4.png'
import AppleImg from '../../../assets/images/Group 3875.png'
import PlaystoreImg from '../../../assets/images/Group 3876.png'
import qrcode from '../../../assets/images/qrcode.png'



const Mobile = () => {
  return (
    <Container className='modile-container'>
      <div className='mobile-images'>
        <img src={mobileImage} alt="" />
      </div>
      <div className='main-mobile-div'>
        <div className='mobile-text-div'>
          <h1>You can<br /> download the<br /> apps.</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Maecenas<br /> vivamus urna eu sed eget imperdiet. Quisque viverra<br /> leo quis gravida mattis donec malesuada.</p>
        </div>
        <div className='image-apps-div'>
          <a href="https://apps.apple.com/gb/app/atricent-ai-fashion-platform/id6448105847" target="_blank" rel="noopener noreferrer">
            <div className='apple-image-div'>
              <img src={AppleImg} alt="" />
            </div>
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.atricent&hl=en_US" target="_blank" rel="noopener noreferrer">
            <div className='playstore-image-div'>
              <img src={PlaystoreImg} alt="" />
            </div>
          </a>
        </div>
        <div className='qrcode'>
          <img src={qrcode} alt="" />
        </div>
      </div>

    </Container>
  )
}

export default Mobile