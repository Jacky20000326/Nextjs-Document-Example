import { connection } from "next/server";

export default async function Demo2Page() {
  await connection(); //這個 Component（或頁面）不要在 build/預渲染階段或靜態階段就被渲染，而是要「等一個來自使用者的 request」之後，才進行渲染。
  const time = new Date().getTime();
  return <div>現在時間：{time}</div>;
}
