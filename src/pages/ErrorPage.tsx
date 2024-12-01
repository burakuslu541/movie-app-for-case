import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/client/hooks";
import colors from "../styles/_export.scss";
function ErrorPage() {
  const navigate = useNavigate();
  const darkMode = useAppSelector((state) => state.darkMode.value);
  console.log(darkMode);
  return (
    <Box
      sx={{
        backgroundColor: darkMode ? colors.base200 : colors.baseLight200,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{ color: darkMode ? colors.warning : colors.warningLight }}
      >
        404 error
      </Typography>
      <Typography
        variant="h3"
        sx={{ color: darkMode ? colors.neutral : colors.neutralLight }}
      >
        This page does not exist
      </Typography>
      <Typography
        variant="h6"
        onClick={() => navigate("/")}
        sx={{
          cursor: "pointer",
          color: darkMode ? colors.warning : colors.warningLight,
          marginTop: "16px",
        }}
      >
        Would you like to return to the home page?
      </Typography>
    </Box>
  );
}

export default ErrorPage;
