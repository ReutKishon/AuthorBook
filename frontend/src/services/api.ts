// src/services/api.ts
import axios from "axios";
import { Author, Book } from "../types";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchAuthors = async (): Promise<Author[]> => {
  try {
    const response = await api.get("/authors");
    return response.data;
  } catch (error) {
    console.error("Error fetching authors:", error);
    throw new Error("Failed to fetch authors"); // Rethrow or handle as needed
  }
};

export const fetchBooks = async (authorId: number): Promise<Book[]> => {
  try {
    const response = await api.get(`/books/${authorId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw new Error("Failed to fetch books"); // Rethrow or handle as needed
  }
};

export const fetchAuthorById = async (authorId: number): Promise<Author> => {
  try {
    const response = await api.get(`/authors/${authorId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching author data:", error);
    throw new Error("Failed to fetch author");
  }
};
