import { useNavigate, useParams } from "react-router-dom";
import BookCard from "./BookCard";
import Page from "../../components/Page";
import { useAuthorData, useBooksByAuthor } from "../../services/hooks";
import { useMemo } from "react";
import { CircularProgress, Snackbar } from "@mui/material";

const BooksPage = () => {
  const { authorId } = useParams<{ authorId: string }>();
  const {
    data: books,
    isLoading: isBooksLoading,
    isError: isBooksError,
  } = useBooksByAuthor(authorId!);
  const {
    data: authorData,
    isLoading: isAuthorLoading,
    isError: isAuthorError,
  } = useAuthorData(authorId!);

  const isLoading = useMemo(() => {
    return isBooksLoading || isAuthorLoading;
  }, [isBooksLoading, isAuthorLoading]);

  return (
    <Page title={`Books By ${authorData?.name}`} showBackButton={true}>
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress size={50} color="primary" />
        </div>
      )}
      <div className="max-h-screen overflow-y-auto no-scrollbar w-full">
        {!isLoading &&
          books?.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
      <Snackbar
        open={isAuthorError || isBooksError}
        autoHideDuration={9000}
        message="We had a problem to load the requested data :("
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </Page>
  );
};

export default BooksPage;
