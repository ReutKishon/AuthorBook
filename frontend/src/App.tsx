import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthorsPage from "./pages/AuthorsPage";
import BooksPage from "./pages/BooksPage";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeightBold: "bold",
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<AuthorsPage />} />
          <Route path="/authors/:id/books" element={<BooksPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
