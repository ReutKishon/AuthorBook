import Page from "../../components/Page";
import AuthorCard from "./AuthorCard";
import { useAuthors } from "../../services/hooks";
import { CircularProgress, Snackbar } from "@mui/material";

const AuthorsPage = () => {
  const { data: authors, isLoading, isError } = useAuthors();

  return (
    <Page title="Authors" showBackButton={false}>
       {isLoading && <div className="w-full h-full flex justify-center items-center">
        <CircularProgress size={50} color="primary" />
        </div>}
      <div className="max-h-screen overflow-y-auto no-scrollbar w-full">
       
        {!isLoading &&
          authors?.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
      </div>
      <Snackbar
        open={isError}
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

export default AuthorsPage;
