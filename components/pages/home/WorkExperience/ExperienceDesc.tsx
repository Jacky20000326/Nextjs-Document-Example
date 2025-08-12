"use client";

import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { Collapse } from "@mui/material";
import { Chip } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";

interface Props {
  title: string;
  company: string;
  date: string;
  skills: string[];
  description: string[];
}

export const ExperienceDesc = ({
  title,
  company,
  date,
  skills,
  description,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const getChipColor = (index: number) => {
    switch (index % 3) {
      case 0:
        return "info";
      case 1:
        return "primary";
      case 2:
        return "success";
      default:
        return "info";
    }
  };
  return (
    <Stack gap={1}>
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ArrowRightOutlinedIcon
          sx={{
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
        <Stack
          direction="row"
          alignItems="baseline"
          gap={1}
          sx={{ cursor: "pointer" }}
        >
          <Typography variant="body1" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {company}
          </Typography>
          <Typography variant="body1" color="text.secondary" fontSize={16}>
            {date}
          </Typography>
        </Stack>
      </Stack>

      <Collapse in={isOpen} timeout="auto" sx={{ pl: 3 }}>
        <Stack
          direction="row"
          gap={1}
          mt={1}
          mb={2}
          maxWidth={600}
          flexWrap="wrap"
        >
          {skills.map((skill, index) => (
            <Chip
              key={skill}
              label={skill}
              color={getChipColor(index)}
              size="small"
            />
          ))}
        </Stack>

        <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
          {description.map((desc) => (
            <Typography
              component="li"
              variant="body2"
              color="text.secondary"
              sx={{ listStyleType: "disc" }}
              mb={1.25}
              key={desc}
            >
              {desc}
            </Typography>
          ))}
        </Box>
      </Collapse>
    </Stack>
  );
};
