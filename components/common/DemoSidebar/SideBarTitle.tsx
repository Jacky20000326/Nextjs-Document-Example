import { Stack, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Dispatch, SetStateAction } from "react";

interface Props {
  title: string;
  isOpen: boolean;
  onIsOpenSet: Dispatch<SetStateAction<boolean>>;
}

export const SideBarTitle = ({ title, isOpen, onIsOpenSet }: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      gap={1}
      onClick={() => onIsOpenSet(!isOpen)}
    >
      <Typography variant="subtitle1" color="#858b94">
        {title}
      </Typography>
      <ArrowRightIcon
        sx={{
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease-in-out",
          color: "#858b94",
        }}
      />
    </Stack>
  );
};
