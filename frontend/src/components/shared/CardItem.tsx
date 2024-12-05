import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";

interface CardItemProps {
  title: string;
  info: string[];
  about: string;
  rating: number;
  onClick?: () => void;
}

const CardItem = ({ title, info, about, rating, onClick }: CardItemProps) => {
  return (
    <div className="max-w-2xl p-4 rounded-lg">
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
              <Typography
                sx={{ fontSize: "bold" }}
                component="div"
                variant="h5"
              >
                {title}
              </Typography>
              {info.map((field, index) => (
                <Typography
                  key={index}
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "text.secondary" }}
                >
                  {field}
                </Typography>
              ))}
            </CardContent>
          </Box>
          <Box sx={{ ml: "auto" }}>
            <Rating name="read-only" value={rating} readOnly />
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
              {about}
            </Typography>
          </CardContent>
        </Box>
        {onClick && (
          <CardActions>
            <Button color="secondary" onClick={onClick} size="medium">
              {title.split(" ")[0]}'s books
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default CardItem;
