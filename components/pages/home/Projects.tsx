import { Box, Stack, Typography } from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    name: "BitoPro",
    url: "https://www.bitopro.com/",
  },
  {
    name: "原住民族文化事業基金會",
    url: "https://www.afc.org.tw/",
  },
  {
    name: "全方位數位輸出",
    url: "https://www.afc.org.tw/",
  },
  {
    name: "郵政博物館",
    url: "https://collection.post.gov.tw/",
  },
  {
    name: "YOXI",
    url: "",
  },
  {
    name: "Yoo 棋牌",
    url: "",
  },
];

export const Projects = () => {
  return (
    <Box mt={10}>
      <Typography variant="h4">Projects involved in</Typography>
      <Stack gap={1} mt={3}>
        {projects.map((project) => (
          <Stack key={project.name} direction="row" gap={1} alignItems="center">
            {project.url && <LaunchIcon sx={{ fontSize: 16 }} />}
            <Typography
              variant="body2"
              color="text.secondary"
              component={project.url ? "a" : "span"}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                pl: project.url ? 0 : 3,
                textDecoration: project.url ? "underline" : "none",
                textUnderlineOffset: 3,
                "&:hover": {
                  color: project.url ? "text.primary" : "text.secondary",
                },
              }}
            >
              {project.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
