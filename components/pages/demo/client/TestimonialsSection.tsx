"use client";

import React from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  IconButton,
  alpha,
} from "@mui/material";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { TESTIMONIALS } from "../constants";
import type { Testimonial } from "../types";

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({
  testimonials = TESTIMONIALS,
}: TestimonialsSectionProps) {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index);
  };

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
      {/* Testimonials Header */}
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
          用戶回饋
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

      {/* Testimonial Carousel */}
      <Box sx={{ position: "relative", mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 280,
          }}
        >
          {/* Previous Button */}
          <IconButton
            onClick={handlePrevTestimonial}
            sx={{
              color: "white",
              fontSize: "2rem",
              "&:hover": {
                backgroundColor: alpha("#334155", 0.8),
              },
            }}
          >
            <ChevronLeftOutlined fontSize="large" />
          </IconButton>

          {/* Testimonial Content */}
          <Box
            sx={{
              flex: 1,
              mx: 4,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                backgroundColor: "#6b7280",
                mb: 3,
                fontSize: "2rem",
              }}
            >
              👤
            </Avatar>

            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: "medium",
                mb: 1,
              }}
            >
              {testimonials[currentTestimonial].name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#94a3b8",
                mb: 4,
              }}
            >
              {testimonials[currentTestimonial].location}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#cbd5e1",
                lineHeight: 1.8,
                maxWidth: 600,
                fontSize: "1rem",
              }}
            >
              {testimonials[currentTestimonial].content}
            </Typography>
          </Box>

          {/* Next Button */}
          <IconButton
            onClick={handleNextTestimonial}
            sx={{
              color: "white",
              fontSize: "2rem",
              "&:hover": {
                backgroundColor: alpha("#334155", 0.8),
              },
            }}
          >
            <ChevronRightOutlined fontSize="large" />
          </IconButton>
        </Box>

        {/* Pagination Dots */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor:
                  index === currentTestimonial ? "white" : "#6b7280",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": {
                  backgroundColor:
                    index === currentTestimonial ? "white" : "#9ca3af",
                },
              }}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
