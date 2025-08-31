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
        href: "/blog/useState",
      },
      {
        title: "[hooks] useEffect",
        href: "/blog/useEffect",
      },
      {
        title: "[Cache] fetch",
        href: "/blog/fetchData",
      },
      {
        title: "[Cache] unstable_cache",
        href: "/blog/unstable_cache",
      },
    ],
  },
  {
    title: "React",
    subItems: [
      {
        title: "[hooks] useActionState",
        href: "/blog/useActionState",
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
        href: "/fetchData",
      },
    ],
  },
];
