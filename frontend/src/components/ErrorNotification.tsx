import { Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

import { useState } from "react";

const ErrorNotification = ({
  showNotification,
}: {
  showNotification: boolean;
}) => {
  const [open, setOpen] = useState(showNotification);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      
    </Box>
  );
};

export default ErrorNotification;
