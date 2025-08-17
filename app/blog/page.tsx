import { Box, Stack, Typography } from "@mui/material";

export default function Blog() {
  return (
    <Stack p={4} gap={2}>
      <Typography variant="h4">關於我</Typography>
      <Stack>
        <Typography variant="body1" color="sidebar.secondary">
          我是名台灣知名交易所任職前端工程師
        </Typography>
      </Stack>
      <Typography variant="h4">關於部落格</Typography>
      <Stack>
        <Typography variant="body1" color="sidebar.secondary">
          為我所知輸出整理的地方，我想透過部落格來解決資訊焦慮及學習無效的問題。
        </Typography>
        <Typography variant="body1" color="sidebar.secondary">
          文章的內容會根據我當前研究有興趣的主題來撰寫，大致可以將其分類成程式、咖啡、加密貨幣、投資、生活。
        </Typography>
        <Typography variant="body1" color="sidebar.secondary">
          有興趣的朋友可以透過我的部落格來了解我。
        </Typography>
      </Stack>
    </Stack>
  );
}
