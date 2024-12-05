import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBooks, fetchAuthorById } from "../services/api";
import Title from "../components/shared/Title";
import BookCard from "../components/cards/BookCard";
import { Author, Book } from "../types";

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
    <div className="h-screen flex flex-col items-center justify-start gap-2 pt-12">
      <Title title={`Books By ${authorData?.name}`} />
      <div className="max-h-screen overflow-y-auto no-scrollbar">
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
