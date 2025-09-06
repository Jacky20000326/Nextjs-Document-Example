"use client";

import { TextField } from "@mui/material";
import { Article } from "./Aritcle";
import { useDeferredValue, useState } from "react";
export const TransitionEffect = () => {
  const [search, setSearch] = useState("-1");

  const deferredSearch = useDeferredValue(search);

  const isPending = search !== deferredSearch;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Filter Value"
        variant="outlined"
        size="small"
        onChange={handleSearch}
      />

      <Article search={deferredSearch} isPending={isPending} />
    </>
  );
};
