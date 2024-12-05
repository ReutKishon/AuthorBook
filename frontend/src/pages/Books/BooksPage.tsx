import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBooks, fetchAuthorById } from "../../services/api";
import BookCard from "./BookCard";
import { Author, Book } from "../../types";
import Page from "../../components/Page";

const BooksPage = () => {
  const { id } = useParams<{ id: string }>();
  const [books, setBooks] = useState<Book[]>([]);
  const [authorData, setAuthorData] = useState<Author>();

  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const booksData = await fetchBooks(Number(id));
          const authorData = await fetchAuthorById(Number(id));
          setBooks(booksData);
          setAuthorData(authorData);
        } catch (err: any) {
          setError(
            "An error occurred while fetching authors. Please try again later."
          );
        }
      };

      fetchData();
    }
  }, [id]);

  return (
    <Page title={`Books By ${authorData?.name}`}>
      <div className="max-h-screen overflow-y-auto no-scrollbar">
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </Page>
  );
};

export default BooksPage;
