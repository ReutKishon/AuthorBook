import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Author } from "../../types";
import { useNavigate } from "react-router-dom";

const AuthorCard = ({ author }: { author: Author }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/authors/${author.id}/books`);
  };

  return (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          {author.name}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {author.birth_year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClick} size="large">
          books
        </Button>
      </CardActions>
    </React.Fragment>
  );
};

export default AuthorCard;
