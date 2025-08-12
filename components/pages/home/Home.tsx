import { Box } from "@mui/material";
import { Introduce } from "./Introduce";
import { WorkExperience } from "./WorkExperience/WorkExperience";

const Home = () => {
  return (
    <Box px="25vw">
      <Introduce />
      <WorkExperience />
    </Box>
  );
};

export default Home;
