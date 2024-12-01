import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/client/hooks";
import colors from "../styles/_export.scss";
//i18n
import { withTranslation } from "react-i18next";
import i18n from "../store/localize/localize";

function ErrorPage() {
  const { t } = i18n;
  const navigate = useNavigate();
  const darkMode = useAppSelector((state) => state.darkMode.value);
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
        {t("COMMON.404_ERROR")}
      </Typography>
      <Typography
        variant="h3"
        sx={{ color: darkMode ? colors.neutral : colors.neutralLight }}
      >
        {t("COMMON.THIS_PAGE_DOES_NOT_EXIST")}
      </Typography>
      <Typography
        variant="h6"
        onClick={() => navigate("/")}
        sx={{
          cursor: "pointer",
          color: darkMode ? colors.warning : colors.warningLight,
          marginTop: "16px",
          textDecoration: "underline",
        }}
      >
        {t("COMMON.WOULD_YOU_LIKE_TO_RETURN_TO_THE_HOME_PAGE")}
      </Typography>
    </Box>
  );
}

export default withTranslation()(ErrorPage);
