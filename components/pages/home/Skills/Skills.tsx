import { Box, Stack, Typography } from "@mui/material";
import { SKILLS } from "./constants";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
export const Skills = () => {
  return (
    <Box mt={10}>
      <Typography variant="h4">Skills</Typography>
      <Stack
        direction="row"
        gap={2}
        width="80%"
        flexWrap="wrap"
        justifyContent="space-between"
        pt={4}
      >
        {SKILLS.map((skill) => (
          <Stack
            key={skill}
            direction="row"
            gap={1}
            width="40%"
            alignItems="center"
          >
            <ArrowRightOutlinedIcon />
            <Typography variant="h5" color="text.tertiary">
              {skill}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
