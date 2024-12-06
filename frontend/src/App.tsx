import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksPage from "./pages/Books/BooksPage";
import "./index.css";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthorsPage from "./pages/Authors/AuthorsPage";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeightBold: "bold",
  },
  palette:  {
    primary: {
      main: "#ffff",
    },
   
  }
});
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<AuthorsPage />} />
            <Route path="/authors/:authorId/books" element={<BooksPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
