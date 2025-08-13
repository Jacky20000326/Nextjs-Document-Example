import { Box } from "@mui/material";
import { Introduce } from "./Introduce";
import { WorkExperience } from "./WorkExperience/WorkExperience";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects";

const Home = () => {
  return (
    <Box px="25vw">
      <Introduce />
      <WorkExperience />
      <Skills />
      <Projects />
    </Box>
  );
};

export default Home;
