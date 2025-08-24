import React from "react";
import CardNav from "./ui/card-nav";
// import logo from "./logo.svg";

export const Navigation: React.FC = () => {
 const items = [
 

  {
    href: "/categories",
    label: "Categories",
    bgColor: "#1030ffff",
    textColor: "#000",
    links: [
      { href: "/categories/ruby", label: "Ruby", bgColor: "#fff", textColor: "#000", ariaLabel: "Ruby Category", links: [] },
      { href: "/categories/emerald", label: "Emerald", bgColor: "#fff", textColor: "#000", ariaLabel: "Emerald Category", links: [] },
      { href: "/categories/sapphire", label: "Sapphire", bgColor: "#fff", textColor: "#000", ariaLabel: "Sapphire Category", links: [] }
    ]
  },

  {
    href: "/blog",
    label: "Blog",
    bgColor: "#fff",
    textColor: "#000",
    links: [
      { href: "/blog/post-1", label: "Post 1", bgColor: "#fff", textColor: "#000", ariaLabel: "Blog Post 1", links: [] },
      { href: "/blog/post-2", label: "Post 2", bgColor: "#fff", textColor: "#000", ariaLabel: "Blog Post 2", links: [] }
    ]
  },

  
];

  return (
    <CardNav
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};
