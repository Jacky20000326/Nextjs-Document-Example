"use client";

import { useFormStatus } from "react-dom";

export const ConstFormContent = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </>
  );
};
