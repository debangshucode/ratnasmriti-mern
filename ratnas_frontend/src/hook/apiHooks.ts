// hooks/apiHooks.ts
import { Blog, MainCategory, Post, SubCategory } from "../types";
import { useFetch } from "./useFetch";

// Fetch all posts
export function usePosts() {
  return useFetch<Post[]>("/admin/posts");
}

// Fetch single post
export function usePost(id: string) {
  return useFetch<Post>(`/posts/${id}`);
}

// Fetch main categories
export function useMainCategories() {
  return useFetch<MainCategory[]>("/admin/categories/main");
}

// Fetch sub categories
export function useSubCategories() {
  return useFetch<SubCategory[]>("/admin/categories/sub");
}

// Fetch sub categories my main category

export function useSubCategoriesByMain(categoryId?: string) {
  return useFetch<{ main_category: any; sub_categories: SubCategory[] }>(
    categoryId ? `/admin/categories/main/${categoryId}` : ""
  );
}
// Fetch blogs
export function useBlogs() {
  return useFetch<Blog[]>("/admin/blogs");
}
