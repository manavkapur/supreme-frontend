import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Divider,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PublicIcon from "@mui/icons-material/Public";

function About() {
  return (
    <Container sx={{ py: 8, maxWidth: "lg" }}>
      {/* Intro */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, color: "#0f172a" }}
      >
        About SupremeSolutions
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        sx={{ maxWidth: 800, mx: "auto", mb: 6 }}
      >
        SupremeSolutions is your trusted partner in temporary fencing solutions,
        delivering secure, reliable, and professional services tailored to your needs.
      </Typography>

      {/* Mission & Vision */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: "#fffbea",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 700, color: "#facc15" }}
            >
              Our Mission
            </Typography>
            <Typography color="text.secondary">
              To provide high-quality, affordable, and safe temporary fencing
              solutions that protect people, property, and events while exceeding
              client expectations.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: "#f0f9ff",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 700, color: "#2563eb" }}
            >
              Our Vision
            </Typography>
            <Typography color="text.secondary">
              To be India’s leading partner in temporary fencing, recognized for
              innovation, safety, and sustainable solutions that help clients
              focus on what matters most.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 8 }} />

      {/* Why Choose Us */}
      <Box sx={{ py: 6 }}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 6 }}
        >
          Why Choose SupremeSolutions?
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {[
            {
              title: "Safety First",
              desc: "We prioritize safety with top-grade materials and secure installations.",
              icon: <SecurityIcon sx={{ fontSize: 40, color: "#facc15", mb: 1 }} />,
            },
            {
              title: "Affordable Solutions",
              desc: "Competitive pricing without compromising on quality or reliability.",
              icon: <AttachMoneyIcon sx={{ fontSize: 40, color: "#facc15", mb: 1 }} />,
            },
            {
              title: "Expert Team",
              desc: "Experienced professionals ensure smooth installation and support.",
              icon: <PeopleAltIcon sx={{ fontSize: 40, color: "#facc15", mb: 1 }} />,
            },
            {
              title: "Nationwide Service",
              desc: "Providing services across India with quick turnaround times.",
              icon: <PublicIcon sx={{ fontSize: 40, color: "#facc15", mb: 1 }} />,
            },
          ].map((item, idx) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={idx}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
                }}
              >
                {item.icon}
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#0f172a" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ flexGrow: 1 }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
