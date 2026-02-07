import { cacheLife } from "next/dist/server/use-cache/cache-life";

export const CacheComponent = () => {
  "use cache"; // 👈 标记这个组件可缓存
  cacheLife("hours"); // 👈 设置缓存时间
  return <div>CacheComponent</div>;
};
