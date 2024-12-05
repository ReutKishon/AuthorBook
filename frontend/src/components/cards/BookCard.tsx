import * as React from "react";
import { Author, Book } from "../../types";
import { useNavigate } from "react-router-dom";
import CardItem from "../shared/CardItem";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <CardItem
      title={book.title}
      info={[book.publication_year.toString(), book.genre]}
      about={book.about}
      rating={book.rating}
    />
  );
};

export default BookCard;

{
}
