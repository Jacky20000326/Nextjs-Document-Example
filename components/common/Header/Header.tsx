import { Divider, Stack, Typography } from "@mui/material";
import { Navigation } from "@/components/common/Header/Navigation";
import { headerContainerStyles } from "./Header.styles";
import { PATH } from "@/constants/common/path";
import { ThemeMode } from "./ThemeMode";
import Link from "next/link";

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
      <Link href={PATH.HOME} style={{ textDecoration: "none" }}>
        <Typography
          component="span"
          fontFamily="logo.fontFamily"
          variant="h4"
          color="text.secondary"
          sx={{ textDecoration: "none", color: "text.secondary" }}
        >
          J.K
        </Typography>
      </Link>
      <Stack direction="row" gap={2} alignItems="center">
        <Navigation />
        <Divider orientation="vertical" flexItem />
        <ThemeMode />
      </Stack>
    </Stack>
  );
};
