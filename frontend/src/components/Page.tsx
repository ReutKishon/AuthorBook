import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

const Page = ({
  title,
  children,
  showBackButton,
}: {
  title: string;
  children: React.ReactNode;
  showBackButton: boolean;
}) => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(`/`);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-start p-4 gap-4 w-full md:w-2/3 m-auto">
      <div className="flex gap-8">
        {showBackButton && (
          <IconButton onClick={handleBackButton} size="large" color="primary">
            <ArrowBackIcon />
          </IconButton>
        )}

        <h2 className="text-4xl font-bold text-white text-center w-full">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
};

export default Page;
