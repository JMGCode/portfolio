interface INavbarItem {
  text: string;
  path: string;
}

export const navbarItems: INavbarItem[] = [
  // {
  //   text: "About me",
  //   path: "/about",
  // },
  // {
  //   text: "Contact",
  //   path: "/contact",
  // },
];

export const navbarItemsFooter: INavbarItem[] = [
  {
    text: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    text: "Terms & Conditions",
    path: "/terms&conditions",
  },
];
