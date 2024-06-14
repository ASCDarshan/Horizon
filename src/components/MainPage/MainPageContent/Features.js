import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MuiChip from '@mui/material/Chip';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

const initiatives = [
  {
    title: 'Staff Recruitment Recommendation',
    description:
      'We recommend potential candidates with experience in recruiting students to UK universities for this position. We will guide the university in selecting the most suitable candidate if no staff member has already been appointed',
    images: [
      'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    ],
  },
  {
    title: 'Research and Assessment',
    description:
      "Our comprehensive services aim to enhance your institution's visibility and reach.By strategically utilizing our expertise, we identify the optimal markets, recruit proficient staff, and ensure compliance with relevant financial and tax laws, ultimately securing your institution's recognition and success",
    images: [
      'url("https://images.unsplash.com/photo-1581093196277-9f608bb3d4b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    ],
  },
  {
    title: 'In-Country Representation',
    description:
      "Our comprehensive services aim to enhance your institution's visibility and reach.By strategically utilizing our expertise, we identify the optimal markets, recruit proficient staff, and ensure compliance with relevant financial and tax laws, ultimately securing your institution's recognition and success",
    images: [
      'url("https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    ],
  },

];

const Chip = styled(MuiChip)(({ theme, selected }) => ({
  ...(selected && {
    borderColor:
      theme.palette.mode === 'light'
        ? theme.palette.primary.light
        : theme.palette.primary.dark,
    background:
      'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
    color: 'hsl(0, 0%, 100%)',
    '& .MuiChip-label': {
      color: 'hsl(0, 0%, 100%)',
    },
  }),
}));

export default function OurInitiatives() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedInitiative = initiatives[selectedItemIndex];

  return (
    <Container id="our-initiatives" sx={{ py: { xs: 8, sm: 10 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Our Services
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Discover our key initiatives aimed at supporting the community and
              fostering a better future for all.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column' }}>
            {initiatives.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                selected={selectedItemIndex === index}
              />
            ))}
          </Grid>
          <Card
            variant="outlined"
            sx={{
              display: { xs: 'block', sm: 'none' },
              mt: 4,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {selectedInitiative.images.map((image, idx) => (
                <Box
                  key={idx}
                  sx={{
                    backgroundImage: image,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 100,
                    width: '100%',
                  }}
                />
              ))}
            </Box>
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" fontWeight="medium" gutterBottom>
                {selectedInitiative.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ mb: 1.5 }}>
                {selectedInitiative.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Card>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {initiatives.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={(theme) => ({
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  ...(selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                    borderColor:
                      theme.palette.mode === 'light'
                        ? 'primary.light'
                        : 'primary.dark',
                  }),
                  '&:hover': {
                    background:
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)'
                        : 'linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)',
                    borderColor:
                      theme.palette.mode === 'light'
                        ? 'primary.light'
                        : 'primary.dark',
                    boxShadow:
                      theme.palette.mode === 'light'
                        ? '0px 2px 8px hsla(0, 0%, 0%, 0.1)'
                        : '0px 1px 8px hsla(210, 100%, 25%, 0.5) ',
                  },
                })}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={(theme) => ({
                      color:
                        theme.palette.mode === 'light' ? 'grey.400' : 'grey.600',
                      ...(selectedItemIndex === index && {
                        color: 'primary.main',
                      }),
                    })}
                  >
                    {icon}
                  </Box>
                  <div>
                    <Typography
                      color="text.primary"
                      fontWeight="medium"
                      gutterBottom
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ mb: 1.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </div>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'block' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'block' },
              pointerEvents: 'none',
            }}
          >
            <Stack sx={{ width: '100%', height: '100%', gap: 2 }}>
              {selectedInitiative.images.map((image, idx) => (
                <Box
                  key={idx}
                  sx={{
                    backgroundImage: image,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    flexGrow: 1,
                  }}
                />
              ))}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
