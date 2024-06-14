import * as React from "react";
import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "@mui/system/styled";

const images = [
  'https://media.istockphoto.com/id/1047549194/photo/indian-investment-expert.jpg?s=2048x2048&w=is&k=20&c=SODmmZ7yPjULavAuwvqUuvlXtKlzt4mIe63HXPZ6EU4=',
  'https://images.unsplash.com/photo-1551836022-b06985bceb24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/flagged/photo-1553028826-ccdfc006d078?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const StyledBox = styled("div")(({ theme, height = 700 }) => ({
  alignSelf: "center",
  width: "calc(100% - 40px)",
  height: 400,
  borderRadius: theme.shape.borderRadius,
  boxShadow:
    theme.palette.mode === "light"
      ? "0 0 12px 8px hsla(220, 25%, 80%, 0.2)"
      : "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
  outline: "1px solid",
  backgroundSize: "cover",
  backgroundPosition: "center",
  margin: "0 20px",
  outlineColor:
    theme.palette.mode === "light"
      ? "hsla(220, 25%, 80%, 0.5)"
      : "hsla(210, 100%, 80%, 0.1)",
  [theme.breakpoints.up("sm")]: {
    height: height,
  },
}));


export default function Hero({ size, imageHeight }) {
  return (
    <div className={`hero-banner ${size}`}>
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)"
              : "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
          backgroundRepeat: "no-repeat",
        })}
      >
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          {images.map((image, index) => (
            <StyledBox
              height={imageHeight}
              key={index}
              sx={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </Carousel>
      </Box>
    </div>
  );
}
