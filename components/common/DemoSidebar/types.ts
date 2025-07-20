export type DrawerItemType = {
  title: string;
  href?: string;
};

export type DrawerListType = {
  title: string;
  subItems: DrawerItemType[];
};
