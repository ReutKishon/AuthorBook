import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthorsPage from "./pages/AuthorsPage";
import BooksPage from "./pages/BooksPage";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bookcase from "./assets/images/bookcase.jpg";
import { AutoFixHigh } from "@mui/icons-material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeightBold: "bold",
  },
});
const App = () => {
  const appStyle = {
    backgroundImage: `url(${bookcase})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflow: "hidden",
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={appStyle}>
        <Router>
          <Routes>
            <Route path="/" element={<AuthorsPage />} />
            <Route path="/authors/:id/books" element={<BooksPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
