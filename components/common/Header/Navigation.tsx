import { Stack, Link, Box } from "@mui/material";
import { NAV_ITEMS } from "@/components/common/Header/constants";

export const Navigation = () => {
  return (
    <Stack
      direction="row"
      gap={3}
      divider={
        <Box
          sx={{
            color: "rgba(245, 222, 179, 0.4)",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.2))",
          }}
        >
          ☘
        </Box>
      }
    >
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          underline="none"
          sx={{
            color: "#F5DEB3",
            fontFamily: "'Crimson Text', 'Georgia', serif",
            fontWeight: 500,
            fontSize: "1rem",
            letterSpacing: "0.02em",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
            position: "relative",
            "&:hover": {
              color: "#FFFACD",
              transform: "translateY(-1px)",
              textShadow: "2px 2px 3px rgba(0,0,0,0.4)",
            },
            "&:after": {
              content: '""',
              position: "absolute",
              width: "0%",
              height: "2px",
              bottom: "-4px",
              left: "50%",
              backgroundColor: "#FFFACD",
              transition: "all 0.3s ease",
              transform: "translateX(-50%)",
            },
            "&:hover:after": {
              width: "100%",
            },
          }}
        >
          {item.name}
        </Link>
      ))}
    </Stack>
  );
};
