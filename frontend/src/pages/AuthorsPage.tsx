// src/pages/AuthorsPage.tsx
import React, { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { fetchAuthors } from "../services/api";
import { Author } from "../types";
import AuthorCard from "../components/cards/AuthorCard";

const AuthorsPage: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getAuthors = async () => {
      try {
        const authorsData = await fetchAuthors();
        setAuthors(authorsData);
      } catch (err: any) {
        setError(
          "An error occurred while fetching authors. Please try again later."
        );
      }
    };

    getAuthors();
  }, []);

  return (
    <Paper sx={{ padding: 8 }}>
      <div>
        <h2>Authors</h2>
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </Paper>
  );
};

export default AuthorsPage;
