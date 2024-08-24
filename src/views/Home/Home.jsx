import React, { memo, useEffect, useState } from 'react'
import { HomeWrapper } from './style'
import CarouselSection from './c-cpns/CarouselSection/CarouselSection';
import Tabs from '@/components/Tabs/Tabs';
import HomeFooter from './c-cpns/HomeFooter/HomeFooter';
import { useSelector } from 'react-redux';
import { fetchHomeDataAction } from '@/store/modules/home';
import axiosInstance from '@/service/index.js';
import localIconsData from '@/assets/local-data/icons.json';
import localPastExperienceData from '@/assets/local-data/past-experience.json';
import { useDispatch } from 'react-redux';
import { setCurrentTab } from '@/store/modules/home.js';
import { useLocation } from 'react-router';



const Home = memo(() => {
  // get all the data needed for the home page
  const { tabsData, iconsData, pastExperienceData, homeFooterData } = useSelector(state => state.home);

  // get the current data based on the current tab
  const [currentData, setCurrentData] = useState([]);

  // get the current tab from the redux store
  const currentTab = useSelector(state => state.home.currentTab);

  const location = useLocation();

  const dispatch = useDispatch();

  // initialize the data when the page loads
  useEffect(() => {
    // trigger data loading
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  // when the current tab changes, update the current data, if the current tab is 0, show the icons data, if the current tab is not 0, show the past experience data
  useEffect(() => {
    if (currentTab.id === 0 || !currentTab.id) {
      setCurrentData(iconsData);
    } else {
      setCurrentData(pastExperienceData);
    }
  }, [currentTab, iconsData, pastExperienceData]);


  useEffect(() => {
    // 每次返回主页时检查 currentTab 的值
    if (location.pathname === '/' || location.pathname === '/home') {
      setCurrentData(iconsData);
      // dispatch(setCurrentTab(currentTab));
    }
  }, [location, dispatch]);



  return (
    <HomeWrapper>
      <Tabs></Tabs>
      <CarouselSection data={currentData} />
      {
        currentTab.id === 0 || !currentTab.id ? (
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