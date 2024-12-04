// src/pages/AuthorsPage.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { fetchAuthors } from "../services/api";
import { Author } from "../types";

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
    <Paper sx={{ padding: 2 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Birth Year</TableCell>
              <TableCell>Books</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((author) => (
              <TableRow key={author.id}>
                <TableCell>{author.name}</TableCell>
                <TableCell>{author.birth_year}</TableCell>
                <TableCell>
                  <Link to={`/authors/${author.id}`}>View Books</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AuthorsPage;
