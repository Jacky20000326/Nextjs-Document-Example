"use client";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { SidebarItem } from "./SidebarItem";
import { DRAWER_LIST } from "./constants";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const DemoSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box
      bgcolor="#1b1d24"
      width={isSidebarOpen ? 300 : 20}
      position="sticky"
      top={20}
      height="100vh"
    >
      <Box>
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: -10,
            zIndex: 1000,
            backgroundColor: "sidebar.divider",
            borderRadius: "50%",
            width: 25,
            height: 25,
          }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <ArrowBackIcon sx={{ color: "sidebar.primary", fontSize: 13 }} />
          ) : (
            <ArrowForwardIcon sx={{ color: "sidebar.primary", fontSize: 13 }} />
          )}
        </IconButton>
        {isSidebarOpen && (
          <Stack pt={3} px={2} gap={2}>
            <Stack direction="row" alignItems="center" gap={1}>
              <LightbulbIcon color="primary" />
              <Typography color="sidebar.title" variant="h6">
                Learning Bar
              </Typography>
            </Stack>
            <Stack>
              {DRAWER_LIST.map((item) => (
                <Box key={item.title}>
                  <SidebarItem title={item.title} subItemList={item.subItems} />
                </Box>
              ))}
            </Stack>
          </Stack>
        )}
      </Box>
    </Box>
  );
};
