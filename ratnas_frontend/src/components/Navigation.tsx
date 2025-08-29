import { useLocation } from "react-router-dom";
import React from "react";
import CardNav from "./ui/card-nav";
import { useMainCategories, useBlogs } from "../hook/apiHooks";

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const { data: categories } = useMainCategories();
  const { data: blogs } = useBlogs();

  // hide on admin routes
  if (pathname.startsWith("/admin")) {
    return null;
  }

  const items = [
    {
      href: "/categories",
      label: "Categories",
      bgColor: "#4F200D",
      textColor: "#FF9A00",
      links:
        categories?.slice(0, 3).map((category) => ({
          href: `/categories`,
          label: category.Name,
          bgColor: "#fff",
          textColor: "#000",
          ariaLabel: `${category.Name} Category`,
          links: [],
        })) ?? [],
    },
    {
      href: "/blog",
      label: "Blog",
      bgColor: "#FF9A00",
      textColor: "#4F200D",
      links:
        blogs?.slice(0, 3).map((blog) => ({
          href: `/blog`,
          label:
            blog.title.length > 20
              ? blog.title.slice(0, 20) + "..."
              : blog.title,
          bgColor: "#fff",
          textColor: "#000",
          ariaLabel: blog.title,
          links: [],
        })) ?? [],
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
