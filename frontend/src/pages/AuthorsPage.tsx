import React, { useEffect, useState } from "react";
import { fetchAuthors } from "../services/api";
import { Author } from "../types";
import AuthorCard from "../components/cards/AuthorCard";
import { Pageview } from "@mui/icons-material";
import Page from "../components/shared/Page";

const AuthorsPage = () => {
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
    <Page title="Authors">
      <div className="max-h-screen overflow-y-auto no-scrollbar">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </Page>
  );
};

export default AuthorsPage;
