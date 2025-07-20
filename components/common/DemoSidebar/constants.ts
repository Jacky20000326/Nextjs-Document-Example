import { DrawerListType } from "./types";

export const DRAWER_LIST: DrawerListType[] = [
  {
    title: "Storybook",
    subItems: [],
  },
  {
    title: "NextJs",
    subItems: [
      {
        title: "[hooks] useState",
        href: "/fetch",
      },
      {
        title: "[hooks] useEffect",
        href: "/fetch",
      },
      {
        title: "[Cache] fetch",
        href: "/fetch",
      },
      {
        title: "[Cache] unstable_cache",
        href: "/fetch",
      },
    ],
  },
  {
    title: "MUI",
    subItems: [
      {
        title: "[components] Button",
        href: "/fetch",
      },
      {
        title: "[components] Typography",
        href: "/fetch",
      },
      {
        title: "[components] Stack",
        href: "/fetch",
      },
      {
        title: "[components] Box",
        href: "/fetch",
      },
    ],
  },
];
