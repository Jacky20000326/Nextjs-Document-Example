import { Stack, Typography } from "@mui/material";
import Link from "next/link";
interface Props {
  title: string;
  href: string;
}

export const SideBarSubItem = ({ title, href }: Props) => {
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
      <Link href={href}>
        <Typography variant="subtitle1" color="sidebar.primary" px={1}>
          {title}
        </Typography>
      </Link>
    </Stack>
  );
};
