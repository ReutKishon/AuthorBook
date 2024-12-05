import { useQuery } from "react-query";
import { fetchAuthorById, fetchAuthors, fetchBooksByAuthor } from "./api";

export const useBooksByAuthor = (authorId: string) => {
  return useQuery(["books", authorId], () => fetchBooksByAuthor(authorId));
};

export const useAuthors = () => {
  return useQuery(["authors"], fetchAuthors);
};

export const useAuthorData = (authorId: string) => {
  return useQuery(["authors", authorId], () => fetchAuthorById(authorId));
};
