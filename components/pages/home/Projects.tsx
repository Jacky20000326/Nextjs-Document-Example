import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const WORK_PROJECTS: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce web application that powers online sales for corporate clients.",
    image: "/vercel.svg",
    link: "https://corporate-shop.example.com",
  },
  {
    title: "Internal CMS",
    description: "Content management system used company-wide to create and manage marketing pages.",
    image: "/next.svg",
    link: "https://cms.example.com",
  },
];

const SIDE_PROJECTS: Project[] = [
  {
    title: "Personal Blog",
    description: "My technical blog where I share articles about TypeScript and React best practices.",
    image: "/globe.svg",
    link: "https://mytechblog.dev",
  },
  {
    title: "Weather CLI",
    description: "An open-source command-line tool that displays the weather forecast in your terminal.",
    image: "/window.svg",
    link: "https://github.com/me/weather-cli",
  },
];

export const Projects = () => {
  return (
    <Box mt={10}>
      <Typography variant="h4" mb={4}>
        Projects
      </Typography>

      {/* Work projects */}
      <Typography variant="h5" mb={2}>
        Work Projects
      </Typography>
      <Stack direction="row" gap={2} flexWrap="wrap" pb={4}>
        {WORK_PROJECTS.map((project) => (
          <Card key={project.title} sx={{ width: 300 }}>
            <CardActionArea
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>

      {/* Side projects */}
      <Typography variant="h5" mb={2}>
        Side Projects
      </Typography>
      <Stack direction="row" gap={2} flexWrap="wrap">
        {SIDE_PROJECTS.map((project) => (
          <Card key={project.title} sx={{ width: 300 }}>
            <CardActionArea
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};