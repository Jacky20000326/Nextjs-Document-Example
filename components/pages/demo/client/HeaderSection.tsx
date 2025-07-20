"use client";

import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import {
  BookOutlined,
  DiamondOutlined,
  VideoLibraryOutlined,
} from "@mui/icons-material";

export default function HeaderSection() {
  const handleButtonClick = (buttonType: string) => {
    console.log(`${buttonType} button clicked`);
    // 這裡可以添加具體的按鈕點擊邏輯
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", pt: 8, pb: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            mb: 2,
          }}
        >
          BitoDebt 幣託債權認購平台
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#f59e0b",
            fontSize: { xs: "1.5rem", md: "2rem" },
            mb: 4,
          }}
        >
          被動收入輕鬆實現
        </Typography>

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 8 }}
        >
          <Button
            variant="contained"
            startIcon={<BookOutlined />}
            onClick={() => handleButtonClick("認購前須知")}
            sx={{
              backgroundColor: "#06b6d4",
              "&:hover": { backgroundColor: "#0891b2" },
              px: 3,
              py: 1.5,
              borderRadius: 2,
              fontWeight: "medium",
            }}
          >
            認購前須知
          </Button>
          <Button
            variant="contained"
            startIcon={<DiamondOutlined />}
            onClick={() => handleButtonClick("認購三步驟")}
            sx={{
              backgroundColor: "#06b6d4",
              "&:hover": { backgroundColor: "#0891b2" },
              px: 3,
              py: 1.5,
              borderRadius: 2,
              fontWeight: "medium",
            }}
          >
            認購三步驟
          </Button>
          <Button
            variant="contained"
            startIcon={<VideoLibraryOutlined />}
            onClick={() => handleButtonClick("教學影片")}
            sx={{
              backgroundColor: "#06b6d4",
              "&:hover": { backgroundColor: "#0891b2" },
              px: 3,
              py: 1.5,
              borderRadius: 2,
              fontWeight: "medium",
            }}
          >
            教學影片
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
