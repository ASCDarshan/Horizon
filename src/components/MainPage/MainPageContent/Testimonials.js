import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    name: '- Rajesh Kumar, CEO, Global Education Services',
    testimonial:
      "Working with Horizon Edu Consulting has revolutionized our approach to international student recruitment. Their team’s expertise in market analysis and strategic planning has helped us identify and penetrate new markets effectively. They truly understand the complexities of cross-border education and have been an invaluable partner in our growth."
    ,
  },
  {
    name: '- Laura Smith, Managing Director, EduLink International',
    testimonial:
      "Horizon Edu Consulting has been instrumental in enhancing our brand presence and student recruitment efforts in Asia. Their on-the-ground support and strategic insights have significantly boosted our conversion rates. The professionalism and dedication of their team are unmatched, making them a key asset to our operations."
    ,
  },
  {
    name: '- Ahmed Khan, Director of Operations, StudyAbroad Solutions',
    testimonial:
      "The team at Horizon Edu Consulting excels in providing comprehensive solutions tailored to our needs. From market research to operational management, they have consistently delivered outstanding results. Their ability to navigate local markets and regulatory environments has been crucial to our success in new regions."
    ,
  },
  {
    name: '- Priya Mehta, Head of Recruitment, EduGlobal Connect',
    testimonial:
      "Horizon Edu Consulting’s support in staff recruitment and training has been exceptional. Their expertise in finding the right candidates and setting up local offices has streamlined our operations. We now have a stronger local presence and a more effective recruitment strategy thanks to their efforts."
    ,
  },
  {
    name: '- John Lee, Marketing Director, WorldWide Education Network',
    testimonial:
      "Partnering with Horizon Edu Consulting has significantly improved our digital and social media outreach. Their innovative campaigns and strategic use of digital platforms have enhanced our visibility and engagement with prospective students. Their holistic approach to market visibility is truly impressive."
    ,
  },
  {
    name: '- Maria Gonzalez, CEO, International Education Bridge',
    testimonial:
      "Horizon Edu Consulting’s commitment to integrity and excellence has been evident from day one. Their strategic partnerships and thorough understanding of local markets have enabled us to expand our footprint globally. The continuous support and expert guidance they provide have been instrumental in our ongoing success."
    ,
  },

];

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 2, sm: 4 },
        pb: { xs: 8, sm: 8 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>

      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                border: '1px solid',
                borderColor: 'grey.300',
              }}
            >
              <CardContent>
                <Typography variant="body2" >
                  {testimonial.service}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  title={testimonial.name}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}