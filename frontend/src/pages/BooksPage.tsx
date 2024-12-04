// src/pages/BooksPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { List, ListItem, ListItemText, Paper } from "@mui/material";
import { fetchBooks } from "../services/api";

interface Book {
  id: number;
  title: string;
  publication_year: number;
  genre: string;
}

const BooksPage: React.FC = () => {
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
    <Paper sx={{ padding: 2 }}>
      <List>
        {books.map((book) => (
          <ListItem key={book.id}>
            <ListItemText
              primary={book.title}
              secondary={`${book.publication_year} - ${book.genre}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default BooksPage;
