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
      {/* <Loader logo={logo} />
      <Hero imageHeight={550} />
      <Cards
        title="About Us"  
      /> */}

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
        <Box sx={{ backgroundColor: theme.palette.background.default }}>
          <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main} >
            Our Founder
          </Typography>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: theme.shadows[3], display: 'flex', alignItems: 'center' }}>
                <CardContent>
                  <b>Jagat Patel</b> With a career spanning more than two decades in the education industry, Jagat Patel has distinguished himself as a visionary edupreneur dedicated to transforming the landscape of overseas education. In 2003, he founded the 'Overseas Education Centre' (OEC) with a singular vision: to facilitate students in achieving their dreams of studying abroad. His leadership quickly established OEC as a beacon of expertise in international education and visa formalities.
                  Driven by a passion for learning and a profound understanding of the value of global education, Jagat Patel has played a pivotal role in making educational opportunities accessible to aspiring students worldwide. His deep insights into the complexities of overseas education have guided institutions and students alike, fostering connections with prestigious institutions globally. Under his guidance, students receive indispensable support, streamlining their journey to pursue higher education abroad.
                  Join us at Horizon Edu Consulting LLC, where we empower your institution’s global journey with tailored strategies, comprehensive services, and an unwavering commitment to excellence. Together, we can achieve extraordinary results.

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

    </ThemeProvider>
  );
}
