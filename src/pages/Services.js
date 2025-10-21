import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 6 }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, color: "#0f172a", mb: 5 }}
        >
          Our Services
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  boxShadow: 4,
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "#0f172a" }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {service.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, color: "#facc15" }}
                  >
                    {service.priceRange}
                  </Typography>
                </CardContent>

                {/* Actions */}
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    component={RouterLink}
                    to="/quote"
                    size="small"
                    variant="contained"
                    sx={{
                      bgcolor: "#facc15",
                      color: "#0f172a",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "#eab308" },
                    }}
                  >
                    Get a Quote
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
