"use client";

import { useActionState } from "react";
import { onFormSubmitAction } from "./utils/utils";

export const UseActionState = () => {
  const [state, formAction] = useActionState(onFormSubmitAction, null);
  return (
    <>
      <form action={formAction}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
      <div>{state?.message ?? ""}</div>
    </>
  );
};
