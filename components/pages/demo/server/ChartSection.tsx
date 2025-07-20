import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  alpha,
} from "@mui/material";
import { AttachMoneyOutlined } from "@mui/icons-material";
import { CHART_BARS, CHART_Y_AXIS_LABELS } from "../constants";

export default function ChartSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: 8,
      }}
    >
      {/* Left Side - Chart */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: "1.8rem",
              color: "white",
            }}
          >
            懶人致富
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 3,
              backgroundColor: "white",
              mx: "auto",
              borderRadius: 1.5,
            }}
          />
        </Box>

        {/* Chart Container */}
        <Card
          sx={{
            backgroundColor: "#334155",
            width: "100%",
            maxWidth: 480,
            height: 360,
            position: "relative",
            p: 3,
            borderRadius: 2,
          }}
        >
          <CardContent sx={{ height: "100%", position: "relative", p: 0 }}>
            {/* Y-axis label */}
            <Typography
              variant="caption"
              sx={{
                position: "absolute",
                left: 8,
                top: 16,
                color: "#94a3b8",
                fontSize: "0.75rem",
              }}
            >
              年化
            </Typography>

            {/* Y-axis labels */}
            <Box
              sx={{
                position: "absolute",
                left: 8,
                top: 40,
                bottom: 80,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {CHART_Y_AXIS_LABELS.map((num) => (
                <Typography
                  key={num}
                  variant="caption"
                  sx={{
                    color: "#94a3b8",
                    fontSize: "0.75rem",
                    fontWeight: "medium",
                  }}
                >
                  {num}
                </Typography>
              ))}
            </Box>

            {/* Chart Area */}
            <Box
              sx={{
                ml: 6,
                mr: 3,
                height: 280,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                position: "relative",
                pt: 4,
              }}
            >
              {/* Bars */}
              {CHART_BARS.map((bar, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    flex: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: bar.height,
                      backgroundColor: "#0ea5e9",
                      mb: 2,
                      borderRadius: "2px 2px 0 0",
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#94a3b8",
                      textAlign: "center",
                      fontSize: "0.7rem",
                      lineHeight: 1.2,
                      maxWidth: 60,
                    }}
                  >
                    {bar.label}
                  </Typography>

                  {/* Yellow percentage indicator for last bar */}
                  {bar.isHighlighted && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: -80,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        zIndex: 10,
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#f59e0b",
                          color: "black",
                          px: 2,
                          py: 1,
                          borderRadius: "50%",
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                          mb: 1,
                          minWidth: 40,
                          minHeight: 40,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "2px solid #fbbf24",
                        }}
                      >
                        8.5%
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#f59e0b",
                          color: "black",
                          borderRadius: "50%",
                          width: 32,
                          height: 32,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.2rem",
                        }}
                      >
                        $
                      </Box>
                    </Box>
                  )}
                </Box>
              ))}

              {/* Yellow trend line */}
              <Box
                component="svg"
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  zIndex: 5,
                }}
              >
                <path
                  d="M 40 220 Q 120 190 200 160 Q 280 130 360 100 Q 400 85 440 70"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Arrow head */}
                <path
                  d="M 430 75 L 440 70 L 435 65"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Right Side - Text Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
            <AttachMoneyOutlined
              sx={{ fontSize: "2.5rem", color: "#f59e0b" }}
            />
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontWeight: "bold",
                color: "#f59e0b",
                fontSize: "1.8rem",
              }}
            >
              首選 幣託債權
            </Typography>
          </Stack>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "medium",
              mb: 4,
              color: "white",
              fontSize: "1.3rem",
            }}
          >
            低風險穩定報酬商品
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#cbd5e1",
              lineHeight: 1.8,
              mb: 4,
              fontSize: "0.95rem",
            }}
          >
            BitoPro
            為提供用戶更多樣化的理財產品，推出這定型化、專業合法且低風險的債權認購平台。
            BitoPro
            將與機構合作之間的債權，透過平台讓用戶參與認購，把握取的利息與用戶共享，
            作為用戶資產配置與財富管理的一項利器。
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: alpha("#475569", 0.8),
            p: 3,
            borderRadius: 2,
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#94a3b8",
              fontSize: "0.75rem",
              lineHeight: 1.5,
            }}
          >
            ＊本商品受金管會信託業管理條例、會計人員法規邏輯及相關法例所規範
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
