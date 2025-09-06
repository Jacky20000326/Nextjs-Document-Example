import { DemoSidebar } from "@/components/common/DemoSidebar/DemoSidebar";
import { Box, Stack } from "@mui/material";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Stack direction="row" width="100%">
        <DemoSidebar />
        <Box pl={6} py={4}>
          {children}
        </Box>
      </Stack>
    </section>
  );
}
