// src/pages/BooksPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List, ListItem, ListItemText, Paper } from "@mui/material";
import { fetchBooks } from "../services/api";
import Title from "../components/shared/page/Title";
import BookCard from "../components/cards/BookCard";
import { Book } from "../types";

const BooksPage = () => {
  const { id } = useParams<{ id: string }>();
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (id) {
      const getBooks = async () => {
        try {
          const booksData = await fetchBooks(Number(id));
          setBooks(booksData);
        } catch (err: any) {
          setError(
            "An error occurred while fetching authors. Please try again later."
          );
        }
      };

      getBooks();
    }
  }, [id]);

  return (
    <div className="relative h-screen">
      <div className="absolute top-12 inset-x-0 flex justify-center">
        <Title title="Books" />
      </div>
      <div className="flex flex-col items-center justify-start pt-32">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
