import { Stack } from "@mui/material";

import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Stack bgcolor="#000" width="100%" height={40} justifyContent="center">
      <Typography
        variant="body2"
        color="primary.contrastText"
        textAlign="center"
      >
        Copyright © 2025. All rights reserved.
      </Typography>
    </Stack>
  );
};
