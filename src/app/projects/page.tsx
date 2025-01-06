import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import Grid2 from "@mui/material/Grid";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with Next.js and Material UI.",
    image: "https://picsum.photos/400/300",
    tech: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Project Two",
    description: "Mobile-first responsive design with cutting-edge features.",
    image: "https://picsum.photos/400/300",
    tech: ["React Native", "Firebase", "Node.js"],
  },
  {
    title: "Project Three",
    description: "Cloud-based solution for enterprise customers.",
    image: "https://picsum.photos/400/300",
    tech: ["AWS", "Docker", "Kubernetes"],
  },
];

export default function Projects() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Our Projects
      </Typography>

      <Grid2 container spacing={4}>
        {projects.map((project, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.tech.map((tech, i) => (
                    <Typography
                      key={i}
                      variant="caption"
                      sx={{
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
