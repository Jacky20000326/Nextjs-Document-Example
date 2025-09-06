"use client";

import { TextField } from "@mui/material";
import { Article } from "./Article";

import { Suspense, useDeferredValue, useState } from "react";

export const NoUseDefferdValue = () => {
  const [search, setSearch] = useState("-1");

  const deferredSearch = useDeferredValue(search);

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
      <Suspense fallback={<div>Loading...</div>}>
        <Article search={deferredSearch} />
      </Suspense>
    </>
  );
};
