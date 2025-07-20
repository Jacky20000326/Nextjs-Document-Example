import { Stack, Typography } from "@mui/material";

interface Props {
  title: string;
}

export const SideBarSubItem = ({ title }: Props) => {
  return (
    <Stack
      sx={{
        py: 0.8,
        borderRadius: 1,
        "&:hover": {
          backgroundColor: "sidebar.secondary",
          cursor: "pointer",
        },
      }}
    >
      <Typography variant="subtitle1" color="sidebar.primary" px={1}>
        {title}
      </Typography>
    </Stack>
  );
};
