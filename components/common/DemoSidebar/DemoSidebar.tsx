"use client";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { SidebarItem } from "./SidebarItem";
import { DRAWER_LIST } from "./constants";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export const DemoSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Box bgcolor="#1b1d24" position="relative" width={isSidebarOpen ? 300 : 20}>
      <IconButton
        sx={{
          position: "absolute",
          top: 10,
          right: -10,
          zIndex: 1000,
          backgroundColor: "#3d3f43",
          borderRadius: "50%",
          width: 25,
          height: 25,
        }}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <ArrowBackIcon sx={{ color: "#fff", fontSize: 13 }} />
        ) : (
          <ArrowForwardIcon sx={{ color: "#fff", fontSize: 13 }} />
        )}
      </IconButton>
      <Stack pt={3} px={2} gap={2}>
        <Stack direction="row" alignItems="center" gap={1}>
          <LightbulbIcon color="primary" />
          <Typography color="sidebar.title" variant="h6">
            Learning Bar
          </Typography>
        </Stack>
        <Stack>
          {DRAWER_LIST.map((item) => (
            <Box key={item.title} mb={3}>
              <SidebarItem title={item.title} subItemList={item.subItems} />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
