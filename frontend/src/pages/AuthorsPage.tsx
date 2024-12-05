import React, { useEffect, useState } from "react";
import { fetchAuthors } from "../services/api";
import { Author } from "../types";
import AuthorCard from "../components/cards/AuthorCard";
import Title from "../components/shared/Title";

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
    <div className="relative h-screen">
      <div className="absolute top-12 inset-x-0 flex justify-center">
        <Title title="Authors" />
      </div>
      <div className="flex flex-col items-center justify-start pt-32">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default AuthorsPage;
