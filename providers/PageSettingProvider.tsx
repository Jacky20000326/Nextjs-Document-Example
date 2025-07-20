import { DemoSidebar } from "@/components/common/DemoSidebar/DemoSidebar";
import { Header } from "@/components/common/Header/Header";
import { Box, Stack } from "@mui/material";

export const PageSettingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header />
      <Stack direction="row" width="100%" position="relative">
        <DemoSidebar />
        <Box flex={1}>{children}</Box>
      </Stack>
    </>
  );
};
