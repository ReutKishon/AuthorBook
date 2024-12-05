import { useNavigate, useParams } from "react-router-dom";
import BookCard from "./BookCard";
import Page from "../../components/Page";
import Loading from "../../components/Loading";
import Button from "@mui/material/Button";
import { useAuthorData, useBooksByAuthor } from "../../services/hooks";
import { useMemo } from "react";

const BooksPage = () => {
  const { authorId } = useParams<{ authorId: string }>();
  const {
    data: books,
    isLoading: isBooksLoading,
    error: booksError,
  } = useBooksByAuthor(authorId!);
  const {
    data: authorData,
    isLoading: isAuthorLoading,
    error: authorError,
  } = useAuthorData(authorId!);

  const isLoading = useMemo(() => {
    return isBooksLoading || isAuthorLoading;
  }, [isBooksLoading, isAuthorLoading]);


  return (
    <Page title={`Books By ${authorData?.name}`} showBackButton={true}>
      <div className="max-h-screen overflow-y-auto no-scrollbar w-full">
        {isLoading && <Loading />}
        {!isLoading &&
          books?.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </Page>
  );
};

export default BooksPage;
