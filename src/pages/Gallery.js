import React from "react";
import {
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Paper,
  Box,
} from "@mui/material";

function Gallery() {
  const images = [
    { src: "/images/fence1.jpg", title: "Construction Site Fencing" },
    { src: "/images/fence2.jpg", title: "Event Barrier" },
    { src: "/images/fence3.jpg", title: "Temporary Roadside Fencing" },
    { src: "/images/fence4.jpg", title: "Crowd Control Panels" },
    { src: "/images/fence5.jpg", title: "Industrial Site Fencing" },
    { src: "/images/fence6.jpg", title: "Custom Mesh Panels" },
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, mb: 2, color: "#0f172a" }}
      >
        Our Gallery
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
      >
        Explore some of our completed projects and installations. Each fencing
        solution is designed to meet safety, durability, and client needs.
      </Typography>

      {/* Image Grid */}
      <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
        <ImageList variant="masonry" cols={3} gap={16}>
          {images.map((item, idx) => (
            <ImageListItem key={idx}>
              <Box
                component="img"
                src={item.src}
                alt={item.title}
                loading="lazy"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
                }}
              />
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 1, color: "text.secondary" }}
              >
                {item.title}
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>
      </Paper>
    </Container>
  );
}

export default Gallery;
