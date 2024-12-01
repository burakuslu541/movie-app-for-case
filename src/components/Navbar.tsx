import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.scss";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/client/hooks";
import { Switch } from "@mui/material";
import { Typography } from "@mui/material";
import { toggleDarkMode } from "../store/client/features/darkMode/darkMode";
import colors from "../styles/_export.scss";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
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
        Movie
        <Typography
          sx={{
            color: darkMode ? colors.warning : colors.warningLight,
            fontSize: query ? "25px" : "35px",
          }}
        >
          App
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Typography
          sx={{
            color: darkMode ? colors.neutral : colors.neutralLight,
            fontSize: "13px",
          }}
        >
          Dark Mode
        </Typography>
        <Switch color="warning" checked={theme} onChange={handleToggle} />
      </Box>
    </Box>
  );
};

export default Navbar;
