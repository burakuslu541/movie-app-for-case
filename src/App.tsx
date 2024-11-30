import React from "react";
// import { useAppDispatch, useAppSelector } from './store/client/hooks';
import OutlinedInput from "./components/form/OutlinedInput";
import { Box } from "@mui/material";
import CustomButton from "./components/form/CustomButton";
import IconButton from "@mui/material/IconButton";
import HistoryIcon from "@mui/icons-material/History";

function App() {
  // const count = useAppSelector((state) => state.counter.value)
  // const dispatch = useAppDispatch()

  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const fetchMovies = async () => {
    setLoading(true);

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=ac872dcd&s=${search}&type=movie&page=${1}`
    );
    const data = await response.json();
    setMovies(data.results);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "100%",
        }}
      >
        Movie App
      </Box>
      <Box sx={{ display: "flex", gap: "8px" }}>
        <OutlinedInput
          // value={grammarName}
          borderRadius="12px"
          // onChange={(ev) => {
          //     setGrammarName(ev.target.value)
          // }}
        />
        <CustomButton onClick={() => {}}>Search</CustomButton>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <IconButton
            onClick={() => {
              // dispatch(increment())
            }}
          >
            <HistoryIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

export default App;
