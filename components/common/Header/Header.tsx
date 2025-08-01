import { Divider, Link, Stack, Typography } from "@mui/material";
import { Navigation } from "@/components/common/Header/Navigation";
import { headerContainerStyles, brandNameStyles } from "./Header.styles";
import LightModeIcon from "@mui/icons-material/LightMode";
export const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={"10%"}
      py={2}
      sx={headerContainerStyles}
    >
      <Typography
        fontFamily="logo.fontFamily"
        variant="h4"
        component={Link}
        href="/"
        sx={brandNameStyles}
      >
        J.K
      </Typography>
      <Stack direction="row" gap={2} alignItems="center">
        <Navigation />
        <Divider orientation="vertical" flexItem />
        <LightModeIcon fontSize="small" />
      </Stack>
    </Stack>
  );
};
