import { DrawerListType } from "./types";

export const DRAWER_LIST: DrawerListType[] = [
  {
    title: "NextJs",
    subItems: [
      {
        title: "[hooks] useState",
        href: "/blog/useState",
      },
      {
        title: "[Feature] Cache Component",
        href: "/blog/CacheComponent",
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
      {
        title: "[hooks] useDeferredValue",
        href: "/blog/useDeferredValue",
      },
      {
        title: "[hooks] useTransition",
        href: "/blog/useTranstion",
      },
      {
        title: "[hooks] useInsertionEffect",
        href: "/blog/useInsertionEffect",
      },
      {
        title: "[hooks] useFormStatus",
        href: "/blog/useFormStatus",
      },
    ],
  },
];
