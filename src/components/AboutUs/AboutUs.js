import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import Hero from '../HeroBanner/Hero';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from '../../theme/getLPTheme';
import Cards from "../BannerCard/Card"
import Highlights from "../MainPage/MainPageContent/Highlights"

// const initiatives = [
//   {
//     title: 'Indraprasth Nu Rasodu',
//     description: 'A testament to our commitment to combat hunger, this initiative has provided free meals to over 200,000 people in just 18 months, ensuring that no one in our community goes to bed on an empty stomach.',
//   },
//   {
//     title: 'Blanket Donations',
//     description: 'Recognizing the harsh realities of winter, we distribute warm blankets to those in need, ensuring they are shielded from the biting cold.',
//   },
//   {
//     title: 'Educational Support',
//     description: 'Every child deserves the right to education, and with our notebook donation drives, we strive to equip them with the tools they need to carve out a brighter future.',
//   },
//   {
//     title: 'Footwear Donations',
//     description: 'Walking miles can become a bit easier with the right pair of shoes. We aim to protect the feet of the less fortunate, ensuring they tread their paths with a bit more comfort.',
//   },
//   {
//     title: 'Ganesh Utsav',
//     description: 'Undoubtedly, our community\'s favorite initiative, our eco-friendly Ganesh Visarjan event has been a beacon of sustainable celebration in Vadodara for the past eight years. We are proud to offer a platform that celebrates tradition while safeguarding the environment.',
//   },
// ];

export default function AboutUs() {
  const [mode, setMode] = React.useState('light');

  const theme = useTheme();
  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={LPtheme}>
      <Hero imageHeight={550} />
      <Cards
        title="About Us"
      />

      <Container
        id="testimonials"
        sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 8 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        {/* <Box sx={{ backgroundColor: theme.palette.background.default }}>
          <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main} >
            Empowering Your Institution’s Global Journey
          </Typography>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: theme.shadows[3], display: 'flex', alignItems: 'center' }}>
                <CardContent>
                  Welcome to Horizon Edu Consulting LLC, where we specialize in providing comprehensive consulting and launchpad services to higher education institutions eager to expand into emerging international markets. Our mission is to simplify the process of making your institution's presence global. Serving as your trusted local partner, we lay the groundwork for your international ventures and operate as an extension of your institution in local regions. Think of us as your on-the-ground office, dedicated to managing and optimizing your institution's operations in new markets.
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box> */}

        {/* <Box sx={{ backgroundColor: theme.palette.background.default }}>
          <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main} >
            About Us
          </Typography>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: theme.shadows[3], display: 'flex', alignItems: 'center' }}>
                <CardContent>
                  At Horizon, we believe every institution has unique value to offer. Our mission is to unlock this potential by combining specialized expertise with relentless execution. Teamwork, integrity, and ethical principles are the cornerstones of our approach, driving growth, delivering results, and achieving success for our partners.
                  We excel in expanding your presence exponentially in developing markets, drawing upon our extensive industry knowledge and experience. Together, we can create impactful change and enhance your brand's value in targeted regions. Our comprehensive services ensure our partner institutions thrive by addressing the cultural nuances of cross-border markets. Whether it's Research and Assessment, In-Country Representation, or Operational Management, we handle it all, helping you excel globally.

                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box> */}


        {/* Mission and Vision Statements */}
        <Box sx={{ py: 2, backgroundColor: theme.palette.background.default }}>
          {/* <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main}>
            Our Mission & Vision
          </Typography> */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper, height: '100%' }}>
                <CardContent style={{ height: '100%' }}>
                  <Typography variant="h5" gutterBottom color={theme.palette.primary.dark}>
                    Empowering Your Institution’s Global Journey
                  </Typography>
                  <Typography variant="body1" color={theme.palette.text.primary}>
                    Welcome to Horizon Edu Consulting LLC,where we specialize in providing comprehensive consulting and launchpad services to higher education institutions eager to expand into emerging international markets. Our mission is to simplify the process of making your institution's presence global. Serving as your trusted local partner, we lay the groundwork for your international ventures and operate as an extension of your institution in local regions. Think of us as your on-the-ground office, dedicated to managing and optimizing your institution's operations in new markets.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper, height: '100%' }}>
                <CardContent style={{ height: '100%' }}>
                  <Typography variant="h5" gutterBottom color={theme.palette.primary.dark}>
                    About Us
                  </Typography>
                  <Typography variant="body1" color={theme.palette.text.primary}>
                    At Horizon, we believe every institution has unique value to offer. Our mission is to unlock this potential by combining specialized expertise with relentless execution. Teamwork, integrity, and ethical principles are the cornerstones of our approach, driving growth, delivering results, and achieving success for our partners.
                    We excel in expanding your presence exponentially in developing markets, drawing upon our extensive industry knowledge and experience. Together, we can create impactful change and enhance your brand's value in targeted regions. Our comprehensive services ensure our partner institutions thrive by addressing the cultural nuances of cross-border markets. Whether it's Research and Assessment, In-Country Representation, or Operational Management, we handle it all, helping you excel globally.

                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Our Initiatives */}
        {/* <Box sx={{ backgroundColor: theme.palette.background.default }}>
          <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main}>
            Our Initiatives
          </Typography>
          <Grid container spacing={4}>
            {initiatives.map((initiative, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper }}>
                  <CardContent style={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom color={theme.palette.primary.dark}>
                      {initiative.title}
                    </Typography>
                    <Typography variant="body1" color={theme.palette.text.primary}>
                      {initiative.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </Container>

      <Box id="Highlights" >
        <Highlights />
      </Box>

    </ThemeProvider >
  );
}
