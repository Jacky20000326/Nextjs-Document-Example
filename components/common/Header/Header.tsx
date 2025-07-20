import { Link, Stack, Typography } from "@mui/material";
import { Navigation } from "@/components/common/Header/Navigation";
import { headerContainerStyles, brandNameStyles } from "./Header.styles";

export const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={4}
      py={2.5}
      sx={headerContainerStyles}
    >
      <Typography variant="h4" component={Link} href="/" sx={brandNameStyles}>
        Jacky&apos;s Blog
      </Typography>
      <Navigation />
    </Stack>
  );
};
