export type FormSubmitState = (
  currentState: {
    success: boolean;
    message: string;
  } | null,
  formData: FormData
) => {
  success: boolean;
  message: string;
};
