import { use } from "react";
import { getPost } from "../utils";
import { Box, Typography } from "@mui/material";

interface Props {
  search: string;
}

type SearchResultType = {
  id: number;
  title: string;
  body: string;
};

export const Article = ({ search }: Props) => {
  const postList = use(getPost(search));
  return (
    <div>
      {postList?.map((post: SearchResultType) => (
        <Box key={post.id}>
          <Typography>{post.title}</Typography>
          <Typography>{post.body}</Typography>
        </Box>
      ))}
    </div>
  );
};
