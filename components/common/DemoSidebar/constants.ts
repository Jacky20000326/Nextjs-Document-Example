import { DrawerListType } from "./types";

export const DRAWER_LIST: DrawerListType[] = [
  {
    title: "Project Structure",
    subItems: [],
  },
  {
    title: "Hooks",
    subItems: [
      {
        title: "useState",
        href: "/fetch",
      },
      {
        title: "useEffect",
        href: "/fetch",
      },
    ],
  },
  {
    title: "Cache",
    subItems: [
      {
        title: "fetch",
        href: "/fetch",
      },
      {
        title: "unstable_cache",
        href: "/fetch",
      },
      {
        title: "revalidateTag",
        href: "/fetch",
      },
    ],
  },
];
