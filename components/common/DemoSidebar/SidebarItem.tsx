"use client";

import { Box, Divider, Stack, Collapse } from "@mui/material";
import { DrawerItemType } from "./types";
import { SideBarTitle } from "./SideBarTitle";
import { useState } from "react";
import { SideBarSubItem } from "./SideBarSubItem";
interface Props {
  title: string;
  subItemList: DrawerItemType[];
}

export const SidebarItem = ({ title, subItemList }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box position="relative">
      <Stack px={1} gap={1}>
        <SideBarTitle title={title} isOpen={isOpen} onIsOpenSet={setIsOpen} />
        <Divider color="#3d3f43" />
      </Stack>
      <Collapse in={isOpen} timeout="auto">
        <Box py={1.2}>
          {subItemList.map((subItem) => (
            <SideBarSubItem key={subItem.title} title={subItem.title} />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};
