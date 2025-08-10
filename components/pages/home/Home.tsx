import { Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Stack bgcolor="background.default" pt={10} px="25vw">
        <Typography
          mb={1.75}
          variant="tag"
          color="text.tertiary"
          fontWeight={700}
          fontFamily="Inter"
        >
          @Jacky20000326
        </Typography>
        <Typography variant="h3" mb={3}>
          HI~我是 Jacky
        </Typography>
        <Typography mt={1} variant="body1" color="text.secondary">
          現職前端軟體工程師，專注於 React、Next.js 。
        </Typography>
        <Typography mt={1} variant="body1" color="text.secondary">
          專注於使用建構高效能且用戶友善的系統。
        </Typography>
        <Typography mt={1} variant="body1" color="text.secondary">
          對加密貨幣與投資領域有濃厚的熱情並關注於時事發展。
        </Typography>
      </Stack>
    </>
  );
};

export default Home;
