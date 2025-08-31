import { FormSubmitState } from "./types";

export const onFormSubmitAction: FormSubmitState = (currentState, formData) => {
  const name = formData.get("name");
  console.log(currentState);
  if (name === "jacky") {
    return {
      success: true,
      message: "Login successful",
    };
  }

  return {
    success: false,
    message: "Login failed",
  };
};
