import * as React from "react";
import { Author } from "../../types";
import { useNavigate } from "react-router-dom";
import CardItem from "../shared/CardItem";

const AuthorCard = ({ author }: { author: Author }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/authors/${author.id}/books`);
  };

  return (
    <CardItem
      title={author.name}
      info={[author.birth_year.toString()]}
      about={author.about}
      rating={author.rating}
      onClick={onClick}
    />
  );
};

export default AuthorCard;

{
}
