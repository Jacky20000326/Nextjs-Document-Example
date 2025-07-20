import React from "react";
import { Box, Typography, Paper, alpha } from "@mui/material";
import { MEDIA_LOGOS } from "../constants";

export default function MediaReviewsSection() {
  return (
    <Paper
      elevation={24}
      sx={{
        backgroundColor: alpha("#1e293b", 0.95),
        borderRadius: 3,
        p: 4,
        mt: 4,
        mb: 4,
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Media Reviews Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: "2.5rem",
            color: "white",
          }}
        >
          各界好評
        </Typography>
        <Box
          sx={{
            width: 80,
            height: 3,
            backgroundColor: "white",
            mx: "auto",
            borderRadius: 1.5,
          }}
        />
      </Box>

      {/* Media Logos */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 4,
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {MEDIA_LOGOS.map((media) => (
          <Box
            key={media.id}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 120,
              p: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: "bold",
                mb: 1,
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              {media.logo}
            </Typography>
            {media.subtitle && (
              <Typography
                variant="caption"
                sx={{
                  color: "#94a3b8",
                  textAlign: "center",
                  fontSize: "0.7rem",
                  lineHeight: 1.2,
                }}
              >
                {media.subtitle}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
