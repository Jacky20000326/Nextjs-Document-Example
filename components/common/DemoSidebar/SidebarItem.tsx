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

  const isSubItemListNotEmpty = subItemList.length > 0;

  return (
    <Box position="relative">
      <Stack>
        <SideBarTitle
          title={title}
          isOpen={isOpen}
          isSubItemListNotEmpty={isSubItemListNotEmpty}
          onIsOpenSet={setIsOpen}
        />
        <Divider color="#3d3f43" />
      </Stack>
      <Collapse in={isOpen} timeout="auto">
        <Box py={1.2}>
          {subItemList.map((subItem) => (
            <SideBarSubItem
              key={subItem.title}
              title={subItem.title}
              href={subItem?.href ?? ""}
            />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};
