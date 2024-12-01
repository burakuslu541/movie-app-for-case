// Desc: Loader component
import { Box } from "@mui/system";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        width: "100%",
        marginTop: "20px",
        height: "100%",
      }}
    >
      <HashLoader />
    </Box>
  );
}

export default Loader;
