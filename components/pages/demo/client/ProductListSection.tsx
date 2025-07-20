"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  LinearProgress,
  Chip,
  Pagination,
  Tab,
  Tabs,
  alpha,
} from "@mui/material";
import { PRODUCTS } from "../constants";
import type { Product } from "../types";

interface ProductListSectionProps {
  products?: Product[];
}

export default function ProductListSection({
  products = PRODUCTS,
}: ProductListSectionProps) {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    console.log("Page changed to:", value);
    // 這裡可以添加分頁邏輯
  };

  return (
    <Box sx={{ mt: "10px" }}>
      {/* Tabs */}
      <Box sx={{ mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            "& .MuiTab-root": {
              color: "#94a3b8",
              fontWeight: "medium",
              minHeight: 48,
            },
            "& .MuiTab-root.Mui-selected": {
              color: "white",
              backgroundColor: alpha("#334155", 0.8),
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#06b6d4",
            },
          }}
        >
          <Tab label="檔次一覽" />
          <Tab label="債權認購" />
          <Tab label="總覽" />
        </Tabs>
      </Box>

      {/* Product Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: 3,
          mb: 4,
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              backgroundColor: alpha("#1e293b", 0.95),
              borderRadius: 3,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              p: 3,
            }}
          >
            <CardContent sx={{ p: 0 }}>
              {/* Product Header */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ mb: 3 }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: product.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {product.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: "medium" }}
                >
                  {product.title}
                </Typography>
              </Stack>

              {/* Amount and Progress */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {product.amount}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {product.totalAmount}
                </Typography>
              </Stack>

              <Box sx={{ mb: 3 }}>
                <LinearProgress
                  variant="determinate"
                  value={product.progress}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#334155",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#06b6d4",
                      borderRadius: 4,
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#06b6d4",
                    fontWeight: "medium",
                    mt: 1,
                    display: "block",
                  }}
                >
                  {product.progress}%
                </Typography>
              </Box>

              {/* Product Details */}
              <Box sx={{ mb: 3 }}>
                {Object.entries(product.details).map(([key, value]) => (
                  <Stack
                    key={key}
                    direction="row"
                    justifyContent="space-between"
                    sx={{ mb: 1 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#94a3b8", minWidth: 80 }}
                    >
                      {key}：
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: "#cbd5e1", textAlign: "right", flex: 1 }}
                    >
                      {value}
                      {key === "手續費" && (
                        <Chip
                          label="免手續費"
                          size="small"
                          sx={{
                            ml: 1,
                            backgroundColor: "#06b6d4",
                            color: "white",
                            fontSize: "0.7rem",
                            height: 20,
                          }}
                        />
                      )}
                    </Typography>
                  </Stack>
                ))}
              </Box>

              {/* Action Button */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#6b7280",
                  color: "white",
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: "medium",
                  "&:hover": {
                    backgroundColor: "#4b5563",
                  },
                }}
              >
                計息中
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={521}
          page={1}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#94a3b8",
              borderColor: "#334155",
              "&:hover": {
                backgroundColor: alpha("#334155", 0.8),
              },
              "&.Mui-selected": {
                backgroundColor: "#06b6d4",
                color: "white",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
