import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import { Author } from "../../types";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

const AuthorCard = ({ author }: { author: Author }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/authors/${author.id}/books`);
  };

  return (
    <div className="max-w-2xl p-4 bg-white rounded-lg">
      <Card
        sx={{
          margin: 3,
          color: "black",
          padding: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          borderRadius: 6,
        }}
      >
        <div className="flex flex-row">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
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
          <Box sx={{ ml: "auto" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              {Array.from({ length: author.rating }).map((_, index) => (
                <StarIcon color="primary" key={`filled-${index}`} />
              ))}

              {Array.from({ length: 5 - author.rating }).map((_, index) => (
                <StarBorderIcon key={`unfilled-${index}`} />
              ))}
            </CardContent>
          </Box>
        </div>
        <Box component="div" sx={{ maxWidth: "100%" }}>
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
          <Button onClick={onClick} size="large">
            books
          </Button>
        </CardActions>
      </Card>
    </div>

    // <div className="w-3/4 max-w-2xl p-4 bg-white rounded-lg">
    //   <Card
    //     sx={{
    //       margin: 3,
    //       color: "black",
    //       padding: 2,
    //       boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    //       borderRadius: 6,
    //     }}
    //   >
    //     <CardContent>
    //       <Typography variant="h5" component="div" className="font-sora">
    //         {author.name}
    //       </Typography>
    //       <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
    //         {author.birth_year}
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button onClick={onClick} size="large">
    //         books
    //       </Button>
    //     </CardActions>
    //   </Card>
    // </div>
  );
};

export default AuthorCard;
