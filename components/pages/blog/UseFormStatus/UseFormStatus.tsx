import { ConstFormContent } from "./FormContent";

export default function UseFormStatus() {
  return (
    <form
      // action="/api/form"
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
        margin: "0 auto",
      }}
    >
      <ConstFormContent />
    </form>
  );
}
