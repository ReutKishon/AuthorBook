import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksPage from "./pages/Books/BooksPage";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bookcase from "./assets/images/bookcase.jpg";
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
            <Route path="/authors/:authorId/books" element={<BooksPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
