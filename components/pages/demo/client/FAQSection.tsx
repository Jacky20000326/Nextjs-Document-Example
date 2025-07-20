"use client";

import React from "react";
import {
  Box,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  alpha,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { FAQ_DATA } from "../constants";
import type { FAQ } from "../types";

interface FAQSectionProps {
  faqData?: FAQ[];
}

export default function FAQSection({ faqData = FAQ_DATA }: FAQSectionProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleViewMoreClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    console.log("View more clicked");
    // 這裡可以添加查看更多的邏輯
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
      {/* FAQ Header */}
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
          FAQ
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

      {/* FAQ Items */}
      <Box sx={{ mb: 4 }}>
        {faqData.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded === `panel${faq.id}`}
            onChange={handleChange(`panel${faq.id}`)}
            sx={{
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
              "&.Mui-expanded": {
                margin: 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreOutlined sx={{ color: "white" }} />}
              sx={{
                py: 3,
                px: 0,
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
                "&.Mui-expanded": {
                  minHeight: "auto",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: "medium",
                  fontSize: "1.1rem",
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#cbd5e1",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* View More Link */}
      <Box sx={{ textAlign: "right" }}>
        <Link
          href="#"
          onClick={handleViewMoreClick}
          underline="none"
          sx={{
            color: "#06b6d4",
            fontSize: "1rem",
            fontWeight: "medium",
            cursor: "pointer",
            "&:hover": {
              color: "#0891b2",
            },
          }}
        >
          查看更多 &gt;
        </Link>
      </Box>
    </Paper>
  );
}
