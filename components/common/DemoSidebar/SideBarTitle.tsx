"use client";

import { Stack, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Dispatch, SetStateAction } from "react";

interface Props {
  title: string;
  isOpen: boolean;
  isSubItemListNotEmpty: boolean;
  onIsOpenSet: Dispatch<SetStateAction<boolean>>;
}

export const SideBarTitle = ({
  title,
  isOpen,
  isSubItemListNotEmpty,
  onIsOpenSet,
}: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      onClick={() => {
        if (isSubItemListNotEmpty) {
          onIsOpenSet(!isOpen);
        }
      }}
      color="sidebar.secondary"
      sx={{
        "&:hover": {
          width: "100%",
          backgroundColor: isSubItemListNotEmpty
            ? "transparent"
            : "sidebar.secondary",
          borderRadius: 1,
          color: isSubItemListNotEmpty
            ? "sidebar.secondary"
            : "sidebar.primary",
          cursor: isSubItemListNotEmpty ? "default" : "pointer",
        },
      }}
    >
      <Typography variant="subtitle1" p={1}>
        {title}
      </Typography>
      {isSubItemListNotEmpty && (
        <ArrowRightIcon
          sx={{
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
            color: "sidebar.secondary",
          }}
        />
      )}
    </Stack>
  );
};
