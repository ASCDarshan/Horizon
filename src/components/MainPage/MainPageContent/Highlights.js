import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';




const items = [
  {
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'Discover',
    description: "We begin by understanding your institution's unique goals and challenges, ensuring we grasp your vision thoroughly",
  },
  {
    image: "https://images.unsplash.com/photo-1564521456738-66cf0145269c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'Analyze',
    description: 'Through meticulous research, we gather insights into the target markets, identifying opportunities and potential obstacles.',
  },
  {
    image: "https://cdn.pixabay.com/photo/2022/11/19/14/26/nature-7602212_1280.jpg",
    title: 'Strategize',
    description: "We develop a detailed, bespoke plan that aligns with your institution's objectives and market dynamics. ",
  },
  {
    image: "https://media.istockphoto.com/id/1047549194/photo/indian-investment-expert.jpg?s=2048x2048&w=is&k=20&c=SODmmZ7yPjULavAuwvqUuvlXtKlzt4mIe63HXPZ6EU4=",
    title: 'Execute',
    description: 'Implementing the strategy efficiently with defined timelines and utmost precision, we manage all aspects of your international expansion seamlessly.',
  },
  {
    image: "https://media.istockphoto.com/id/519749080/photo/help-support-advice-guidance-signpost.jpg?s=2048x2048&w=is&k=20&c=bGeoJHFq0C_wD4H17q5A28npM4QPJrC0Y34pWy-himY=",
    title: 'Thrive',
    description: 'We continuously monitor and refine our efforts, ensuring sustained growth and success for your institution in new markets.',
  },

];

export default function Highlights() {
  return (
    <Box >
      <Box
        id="highlights"
        sx={{
          pt: { xs: 4, sm: 8 },
          pb: { xs: 8, sm: 8 },
          color: 'white',
          bgcolor: 'hsl(220, 30%, 2%)',
        }}
      >
        <Container
          sx={{
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
            <Typography component="h2" variant="h4">
              Our Approach
            </Typography>
            <Typography variant="body1" sx={{ color: 'grey.400' }}>
              We pride ourselves on our unique, tailored strategies for every institution. We go beyond just understanding your needs; we deliver comprehensive solutions!
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, p: { xs: 2, md: 4 } }}>
            <Box sx={{ width: { xs: '100%', md: '25%' }, mb: { xs: 2, md: 0 } }}>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Discover</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Analyze</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Strategize</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Execute</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                  </TimelineSeparator>
                  <TimelineContent>Discover</TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>

            <Box sx={{ width: { xs: '100%', md: '75%' } }}>
              <Grid container spacing={2.5}>
                {items.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                        border: '1px solid',
                        borderColor: 'hsla(220, 25%, 25%, .3)',
                        backgroundColor: 'background.paper',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <Stack
                        direction="column"
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ flexGrow: 1 }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: 200,
                            width: '100%',
                            objectFit: 'cover',
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                          }}
                          src={item.image}
                          alt={item.title}
                        />
                        <Box sx={{ textAlign: 'center', p: 2 }}>
                          <Typography fontWeight="medium" gutterBottom>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'grey.600' }}>
                            {item.description}
                          </Typography>
                        </Box>
                      </Stack>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>



        </Container>
      </Box >

    </Box >


  );
}
