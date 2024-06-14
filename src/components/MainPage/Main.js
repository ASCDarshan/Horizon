import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Hero from '../HeroBanner/Hero';
import Highlights from './MainPageContent/Highlights';
import Features from './MainPageContent/Features';
import Testimonials from './MainPageContent/Testimonials';
import FAQ from '../Faq/FAQ';
import getLPTheme from '../../theme/getLPTheme';
import Cards from "../BannerCard/Card"
import AboutUs from '../AboutUs/AboutUs';
import Founder from "../AboutUs/Founder"
import { useLocation } from 'react-router-dom';


export default function Main() {

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  const [mode, setMode] = React.useState('light');

  const LPtheme = createTheme(getLPTheme(mode));
  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Box id="home" >
        <Hero />
      </Box>
      <Cards
        title="Horizon Edu Consulting LLC"
      />
      <Divider />
      <Box id="our-initiatives" sx={{ bgcolor: 'background.default' }}>
        {/* <Box id="aboutUs" >
          <AboutUs />
        </Box> */}

        <Box id="services" >
          <Features />
        </Box>
        <Divider />

        <Box id="Highlights" >
          <Highlights />
        </Box>
        <Divider />
        <Box id="founder" >
          <Founder />
        </Box>
        <Testimonials />
        <Divider />

        <FAQ />
        <Divider />
      </Box>
    </ThemeProvider>
  );
}
