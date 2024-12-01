import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.scss";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/client/hooks";
import { Switch } from "@mui/material";
import { Typography } from "@mui/material";
import { toggleDarkMode } from "../store/client/features/darkMode/darkMode";
import colors from "../styles/_export.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
//i18n
import { withTranslation } from "react-i18next";
import i18n from "../store/localize/localize";

const Navbar = () => {
  const { t } = i18n;
  const query = useMediaQuery("(max-width: 600px)");
  const darkMode = useAppSelector((state) => state.darkMode.value);
  const [theme, setTheme] = useState(darkMode);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleToggle = (e: any) => {
    const localTheme = e.target.checked;
    setTheme(localTheme);
    dispatch(toggleDarkMode(localTheme));
    localStorage.setItem("darkMode", localTheme);
  };
  console.log("i18n", i18n);
  return (
    <Box
      className={styles.navbar}
      sx={{
        backgroundColor: darkMode ? colors.base100 : colors.baseLight100,
        paddingX: query ? "16px" : "150px",
      }}
    >
      <Box
        sx={{
          color: darkMode ? colors.neutral : colors.neutralLight,
          fontSize: query ? "25px" : "35px",
        }}
        className={styles.btn}
        onClick={() => {
          navigate("/");
        }}
      >
        {t("COMMON.MOVIE")}
        <Typography
          sx={{
            color: darkMode ? colors.warning : colors.warningLight,
            fontSize: query ? "25px" : "35px",
          }}
        >
          {t("COMMON.APP")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          color: darkMode ? colors.neutral : colors.neutralLight,
          fontSize: "13px",
        }}
      >
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Typography
            sx={{
              color: darkMode ? colors.neutral : colors.neutralLight,
              fontSize: "13px",
            }}
          >
            {t("COMMON.DARK_MODE")}
          </Typography>
          <Switch color="warning" checked={theme} onChange={handleToggle} />
        </Box>
        <Typography
          sx={{
            cursor: "pointer",
            color: colors.warning,
            fontSize: "13px",
            border: "1px solid",
            padding: "4px",
            borderRadius: "5px",
          }}
          onClick={() => {
            i18n.changeLanguage(
              localStorage.getItem("language") === "tr" ? "en" : "tr"
            );
            localStorage.setItem(
              "language",
              localStorage.getItem("language") === "tr" ? "en" : "tr"
            );
          }}
        >
          {localStorage.getItem("language") === "tr" ? "TR" : "EN"}
        </Typography>
      </Box>
    </Box>
  );
};

export default withTranslation()(Navbar);
