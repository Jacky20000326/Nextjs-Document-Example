import { use } from "react";
import { getPost } from "../utils";
import { Box, Typography } from "@mui/material";

interface Props {
  search: string;
  isPending: boolean;
}
type SearchResultType = {
  id: number;
  title: string;
  body: string;
};

export const Article = ({ search, isPending }: Props) => {
  const postList = use(getPost(search));
  return (
    <Box style={{ opacity: isPending ? 0.5 : 1, marginTop: "10px" }}>
      {postList?.map((post: SearchResultType, index: number) => (
        <Box key={post.id + index}>
          <Typography>
            {post.id}. {post.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
