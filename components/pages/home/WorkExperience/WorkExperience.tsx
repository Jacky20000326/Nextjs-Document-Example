import { Box, Stack, Typography } from "@mui/material";

import { ExperienceDesc } from "./ExperienceDesc";
import { EXPERIENCES } from "./constants";
export const WorkExperience = () => {
  return (
    <Box mt={10}>
      <Typography variant="h4" mb={4}>
        Work Experience
      </Typography>
      <Stack gap={2}>
        {EXPERIENCES.map((experience) => (
          <ExperienceDesc key={experience.company} {...experience} />
        ))}
      </Stack>
    </Box>
  );
};
