import Home from "../pages/Home";
import styles from "../styles/Layout.module.scss";
import { Box } from "@mui/system";
import colors from "../styles/_export.scss";
import { useAppSelector } from "../store/client/hooks";

const Layout = () => {
  const darkMode = useAppSelector((state) => state.darkMode.value);

  return (
    <Box
      className={styles.layout}
      sx={{ backgroundColor: darkMode ? colors.base200 : colors.baseLight200 }}
    >
      <Home />
    </Box>
  );
};

export default Layout;
