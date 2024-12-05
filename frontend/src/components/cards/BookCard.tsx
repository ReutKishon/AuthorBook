import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import CustomCard from "../shared/CustomCard";
import { Author, Book } from "../../types";
import Rating from "@mui/material/Rating";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <CustomCard>
      <div className="flex flex-row">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography sx={{ fontSize: "bold" }} component="div" variant="h5">
              {book.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {book.publication_year}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ ml: "auto" }}>
          <Rating name="read-only" value={book.rating} readOnly />
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
            {book.about}
          </Typography>
        </CardContent>
      </Box>
    </CustomCard>
  );
};

export default BookCard;
