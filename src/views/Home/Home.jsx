import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import iconsData from '@/assets/local-data/icons.json'
import { useLocation } from 'react-router';
import axios from 'axios';
import pastExperienceData from '@/assets/local-data/past-experience.json'
import CarouselSection from './c-cpns/CarouselSection/CarouselSection';
import Tabs from '@/components/Tabs/Tabs';
import HomeFooter from './c-cpns/HomeFooter/HomeFooter';



const Home = memo(() => {
  // use location to get the current path
  const location = useLocation();

  // use axios to get data from the server
  useEffect(() => {
    if (location.pathname === '/home') {
      console.log('home')
    }
  }, [])

  return (
    <HomeWrapper>
      <Tabs></Tabs>
      <CarouselSection data={iconsData} />
      {
        location.pathname === '/home' ? (
          <div className='past-experience'>
            <div className="section-title">
              Past experiences
            </div>
            <CarouselSection data={pastExperienceData} />
          </div>
        ) : ""
      }
      <div className="footer">
        <HomeFooter></HomeFooter>
      </div>
    </HomeWrapper>
  );
});

export default Home