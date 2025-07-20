import React from "react";
import { Box, Container, Paper, alpha } from "@mui/material";

// Client Components
import HeaderSection from "@/components/pages/demo/client/HeaderSection";
import ProductListSection from "@/components/pages/demo/client/ProductListSection";
import FAQSection from "@/components/pages/demo/client/FAQSection";
import TestimonialsSection from "@/components/pages/demo/client/TestimonialsSection";

// Server Components
import ChartSection from "@/components/pages/demo/server/ChartSection";
import MediaReviewsSection from "@/components/pages/demo/server/MediaReviewsSection";

export default function DemoPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        color: "white",
        position: "relative",
      }}
    >
      {/* Header Section */}
      <HeaderSection />

      {/* Main Content Card */}
      <Container maxWidth="lg">
        <Paper
          elevation={24}
          sx={{
            backgroundColor: alpha("#1e293b", 0.95),
            borderRadius: 3,
            p: 4,
            mb: 4,
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <ChartSection />
        </Paper>

        {/* Product List Section */}
        <ProductListSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* User Testimonials Section */}
        <TestimonialsSection />

        {/* Media Reviews Section */}
        <MediaReviewsSection />
      </Container>
    </Box>
  );
}
