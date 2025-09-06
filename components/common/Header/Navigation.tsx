import { Stack, Box } from "@mui/material";
import { NAV_ITEMS } from "@/components/common/Header/constants";

import { StyledLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Stack
      direction="row"
      gap={2}
      divider={
        <Box
          sx={{
            color: "rgba(148, 163, 184, 0.6)", // 更新為淺灰藍色
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.2))",
            transition: "color 0.3s ease",
          }}
        ></Box>
      }
    >
      {NAV_ITEMS.map((item) => (
        <StyledLink key={item.name} href={item.href}>
          {item.name}
        </StyledLink>
      ))}
    </Stack>
  );
};
