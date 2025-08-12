import { Box } from "@mui/material";
import { Introduce } from "./Introduce";
import { WorkExperience } from "./WorkExperience/WorkExperience";
import { Skills } from "./Skills/Skills";

const Home = () => {
  return (
    <Box px="25vw">
      <Introduce />
      <WorkExperience />
      <Skills />
    </Box>
  );
};

export default Home;
