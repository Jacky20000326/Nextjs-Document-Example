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
      onClick={() => onIsOpenSet(!isOpen)}
      color="#858b94"
      sx={{
        "&:hover": {
          width: "100%",
          backgroundColor: isSubItemListNotEmpty ? "transparent" : "#858b94",
          borderRadius: 1,
          color: isSubItemListNotEmpty ? "#858b94" : "#fff",
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
            color: "#858b94",
          }}
        />
      )}
    </Stack>
  );
};
