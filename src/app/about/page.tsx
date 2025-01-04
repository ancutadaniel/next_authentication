import { Box, Typography, Paper } from "@mui/material";

export default function About() {
  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>

      <Typography variant="body1" paragraph>
        Welcome to our platform! We are a dedicated team passionate about
        creating innovative solutions and delivering exceptional experiences to
        our users.
      </Typography>

      <Typography variant="body1" paragraph>
        Our mission is to provide cutting-edge technology solutions while
        maintaining the highest standards of quality and user satisfaction.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
          <li>Innovation and creativity in everything we do</li>
          <li>User-centric approach to development</li>
          <li>Continuous learning and improvement</li>
          <li>Transparency and open communication</li>
        </Typography>
      </Box>
    </Paper>
  );
}
