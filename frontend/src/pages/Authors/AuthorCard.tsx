import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CustomCard from "../../components/CustomCard";
import { Author } from "../../types";
import { useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import oldWomanImage from "../../assets/images/oldWoman.jpg";

const AuthorCard = ({ author }: { author: Author }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/authors/${author.id}/books`);
  };

  return (
    <CustomCard>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          sx={{ width: "120px", height: "120px", borderRadius: "10px" }}
          image={oldWomanImage}
          alt="profile"
        />
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography sx={{ fontSize: "bold" }} component="div" variant="h5">
            {author.name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {author.birth_year}
          </Typography>
        </CardContent>
      </Box>
      <Box component="div" sx={{ marginTop: 2, maxWidth: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6" sx={{ fontSize: "16px" }}>
            About
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              color: "text.secondary",
              wordWrap: "break-word",
            }}
          >
            {author.about}
          </Typography>
        </CardContent>
      </Box>

      <CardActions>
        <Button color="secondary" onClick={onClick} size="medium">
          view books
        </Button>
      </CardActions>
    </CustomCard>
  );
};

export default AuthorCard;
