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

const CustomCard = ({ children }: { children: React.ReactNode }) => {
  return (
  
      <Card
        sx={{
          margin: 3,
          color: "black",
          padding: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          borderRadius: 6,
        }}
      >
        {children}
      </Card>
    
  );
};

export default CustomCard;
