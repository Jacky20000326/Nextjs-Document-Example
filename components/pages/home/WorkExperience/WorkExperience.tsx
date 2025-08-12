import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Chip, Stack, Typography } from "@mui/material";

export const WorkExperience = () => {
  return (
    <Box mt={10} px="15vw">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="logo" color="text.secondary">
              2025.08 -
            </Typography>
            <Typography variant="body1" color="text.secondary">
              BITO Frontend Engineer
            </Typography>
            <Stack
              direction="row"
              gap={1}
              mt={1}
              mb={2}
              maxWidth={600}
              flexWrap="wrap"
            >
              <Chip label="Nextjs" color="primary" size="small" />
              <Chip label="Typescript" color="success" size="small" />
              <Chip label="React" color="info" size="small" />
              <Chip label="Jotai" color="primary" size="small" />
              <Chip label="React Query" color="success" size="small" />
              <Chip label="React Hook Form" color="info" size="small" />
              <Chip label="MUI" color="primary" size="small" />
            </Stack>

            <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
              <Typography
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ listStyleType: "disc" }}
                mb={1.25}
              >
                開發凱基銀行與 BitoPro 合作點數兌換系統，助力公司業務拓展。
              </Typography>
              <Typography
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ listStyleType: "disc" }}
                mb={1.25}
              >
                負責公司的提領流程專案前後端分離，以提升效能與維護性完整流程建置、2FA、Unit
                專案上線零事故獲高度讚賞。
              </Typography>
              <Typography
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ listStyleType: "disc" }}
                mb={1.25}
              >
                負責 BitoPro 一鍵買賣重構
                實現即時驗證與幣價動態計算提升使用體驗。
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="logo" color="text.secondary">
              2023.03 - 2024.05
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1.25}>
              光子 Frontend Engineer
            </Typography>
            <Stack
              direction="row"
              gap={1}
              mt={1}
              mb={2}
              maxWidth={600}
              flexWrap="wrap"
              justifyContent="flex-end"
            >
              <Chip label="Nextjs" color="primary" size="small" />
              <Chip label="Zustand" color="success" size="small" />
              <Chip label="React" color="info" size="small" />
              <Chip label="Typescript" color="primary" size="small" />
              <Chip label="Vue" color="success" size="small" />
              <Chip label="Egret" color="info" size="small" />
            </Stack>
            <Box component="ul" sx={{ m: 0, pl: 2.5, textAlign: "justify" }}>
              <Typography
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ listStyleType: "disc" }}
                mb={1.25}
              >
                採物件導向結合設計模式透過 Egret
                引擎開發及優化遊戲於在任職期間開發大眾麻將於公司帶來不少收益。
              </Typography>
              <Typography
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ listStyleType: "disc" }}
                mb={1.25}
              >
                開發遊戲詳情頁協助外部門做數據分析。
              </Typography>
              <Typography
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ listStyleType: "disc" }}
                mb={1.25}
              >
                自主開發排牌工具，大幅提升公司測試效率。
              </Typography>
              <Typography
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ listStyleType: "disc" }}
                mb={1.25}
              >
                使用 Protobuf 與 WebSocket
                串接遊戲後端，並撰寫整合文件供跨平台及後續維護使用。
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="logo" color="text.secondary">
              2022.06 - 2022.09
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1.25}>
              CCWork Backend Engineer
            </Typography>
            <Stack
              direction="row"
              gap={1}
              mt={1}
              mb={2}
              maxWidth={600}
              flexWrap="wrap"
            >
              <Chip label="Vue" color="primary" size="small" />
              <Chip label="Nuxt" color="success" size="small" />
              <Chip label="Gulp" color="info" size="small" />
              <Chip label="Sass" color="primary" size="small" />
              <Chip label="Element Plus" color="success" size="small" />
            </Stack>
            <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
              <Typography
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ listStyleType: "disc" }}
                mb={1.25}
              >
                主要負責前端版型開發，使用 Gulp 與 Sass 實作，並為新專案製作
                RWD，CSS 框架以 Element Plus 為主。
              </Typography>
              <Typography
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ listStyleType: "disc" }}
                mb={1.25}
              >
                新專案採 Nuxt 3 開發，部分舊專案使用 .NET (MVC)。
              </Typography>
              <Typography
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ listStyleType: "disc" }}
                mb={1.25}
              >
                因多為政府委託案，負責無障礙檢測與調整，使用 Freego
                掃描並修正以符合標準。
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
