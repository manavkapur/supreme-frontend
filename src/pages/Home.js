import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  Paper,
  Divider,
  Link,
} from "@mui/material";

import ConstructionIcon from "@mui/icons-material/Construction";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const FeatureCard = ({ icon, title, subtitle }) => (
  <Card elevation={2} sx={{ height: "100%" }}>
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ bgcolor: "primary.main" }}>{icon}</Avatar>
        <Box>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

function Home() {
  // hero image path - put a hero.jpg in public folder or change URL
  const heroUrl = process.env.PUBLIC_URL + "/hero.jpg";

  return (
    <div>
      {/* HERO */}
      {/* HERO */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0,20,50,0.7), rgba(0,20,50,0.7)), url(${heroUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          py: { xs: 8, md: 14 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 800, color: "#facc15" }} // accent yellow
              >
                SupremeSolutions
              </Typography>

              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, color: "#e2e8f0" }}
              >
                Secure • Reliable • Professional
              </Typography>

              <Typography
                variant="h6"
                color="inherit"
                sx={{ mb: 3, color: "#cbd5e1" }}
              >
                Trusted partner in temporary fencing and site protection.
                From construction to events — we build safety around you.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  component={RouterLink}
                  to="/quote"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#facc15",
                    color: "#0f172a",
                    "&:hover": { bgcolor: "#eab308" },
                  }}
                >
                  Get a Quote
                </Button>

                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "#fff",
                    borderColor: "#facc15",
                    "&:hover": { borderColor: "#eab308", color: "#facc15" },
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Paper
                elevation={6}
                sx={{ p: 3, bgcolor: "rgba(255,255,255,0.9)", borderRadius: 3 }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#0f172a" }}
                >
                  Quick Info
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Serving Delhi NCR • Same-day quotes • Professional installation & removal
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2"><b>Phone:</b> +91 98765 43210</Typography>
                  <Typography variant="body2"><b>Email:</b> info@supremesolutions.in</Typography>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>


      {/* FEATURES */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Our Core Services
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          We provide solutions tailored to site safety, crowd control and temporary perimeter protection.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={<ConstructionIcon />}
              title="Temporary Fencing"
              subtitle="Robust mesh panels for construction & demolition sites."
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={<PeopleIcon />}
              title="Crowd Control"
              subtitle="Metal crowd control barriers for events and public safety."
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={<SecurityIcon />}
              title="Site Protection"
              subtitle="Secure clamps, sturdy frames and professional installation."
            />
          </Grid>
        </Grid>
      </Container>

      {/* WHY CHOOSE US */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Why choose SupremeSolutions?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Years of experience in temporary fencing and rapid installations with a focus on safety
              and compliance. We manage permits, logistics, and on-site installation so you don't have to.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Box textAlign="center">
                <ThumbUpIcon sx={{ fontSize: 36, color: "primary.main" }} />
                <Typography variant="subtitle2">Trusted</Typography>
              </Box>
              <Box textAlign="center">
                <SecurityIcon sx={{ fontSize: 36, color: "primary.main" }} />
                <Typography variant="subtitle2">Compliant</Typography>
              </Box>
              <Box textAlign="center">
                <ConstructionIcon sx={{ fontSize: 36, color: "primary.main" }} />
                <Typography variant="subtitle2">Fast</Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Testimonial
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: "primary.main" }}>S</Avatar>
                <Box>
                  <Typography variant="body2"><b>Shweta R.</b></Typography>
                  <Typography variant="body2" color="text.secondary">
                    "SupremeSolutions installed fencing quickly and kept our site safe — highly recommend!"
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* CTA BAND */}
      <Box sx={{ bgcolor: "primary.main", color: "#fff", mt: 6, py: 4 }}>
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography variant="h6">Ready to secure your site?</Typography>
            <Typography variant="body2">Get a fast quote and professional setup.</Typography>
          </Box>
          <Box>
            <Button component={RouterLink} to="/quote" variant="contained" color="secondary">
              Request Quote
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Home;
