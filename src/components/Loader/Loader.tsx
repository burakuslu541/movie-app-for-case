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
        textAlign: "center",
      }}
    >
      <HashLoader color="primary" size={50} />
    </Box>
  );
}

export default Loader;
