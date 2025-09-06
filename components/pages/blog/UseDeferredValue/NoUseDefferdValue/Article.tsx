import { use } from "react";
import { getPost } from "../utils";

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
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
