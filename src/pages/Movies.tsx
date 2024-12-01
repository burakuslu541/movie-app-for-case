import React from "react";
import { useAppDispatch, useAppSelector } from "../store/client/hooks";
import OutlinedInput from "../components/form/OutlinedInput";
import { Box, Typography } from "@mui/material";
import CustomButton from "../components/form/CustomButton";
import IconButton from "@mui/material/IconButton";
import HistoryIcon from "@mui/icons-material/History";
import { useGetMovies } from "../store/server/features/movies/queries";
import CustomTable from "../components/table/CustomTable";
import CustomSelectBox from "../components/form/CustomSelectBox";
import CustomDatePicker from "../components/form/CustomYearPicker";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/tr";
import { toast } from "react-toastify";
import CustomTooltip from "../components/tooltip/CustomTooltip";
import colors from "../styles/_export.scss";

function Movies() {
  const darkMode = useAppSelector((state) => state.darkMode.value);

  const [search, setSearch] = React.useState({
    title: "Pokemon",
    type: "",
    year: "",
  });

  const [title, setTitle] = React.useState("Pokemon");
  const [type, setType] = React.useState("Type");
  const [year, setYear] = React.useState("");

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 10,
  });

  const columns = [
    { field: "imdbID", headerName: "imdbID", minWidth: 120 },
    { field: "Title", headerName: "Title", minWidth: 180, flex: 1 },
    { field: "Year", headerName: "Year", minWidth: 180, flex: 1 },
    { field: "Type", headerName: "Type", minWidth: 180, flex: 1 },
    {
      field: "Poster",
      headerName: "Poster",
      minWidth: 180,
      flex: 1,
      renderCell: (params: any) => (
        <img
          src={
            params.value !== "N/A"
              ? params.value
              : "https://placehold.co/200x200/orange/white?text=No+Image"
          }
          alt="poster"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
      ),
    },
  ];
  const { data, isLoading, error } = useGetMovies({
    s: title,
    page: paginationModel.page + 1,
    type: search.type === "Type" ? "" : search.type,
    y: search.year,
  });

  React.useEffect(() => {
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, [title, type, year]);

  const handleDateChange = (date: any) => {
    setYear(dayjs(date).format("YYYY"));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        width: "100%",
        marginTop: "50px",
      }}
    >
      <Box sx={{ display: "flex", gap: "8px" }}>
        <OutlinedInput
          value={title}
          borderRadius="12px"
          onChange={(ev: any) => {
            setTitle(ev.target.value);
          }}
          placeholder="Search"
        />
        <CustomDatePicker
          label="Year"
          value={year}
          onChange={handleDateChange}
          maxDate={dayjs().format("YYYY")}
        />
        <CustomSelectBox
          label="Type"
          options={[
            { value: "Type", label: "All" },
            { value: "movie", label: "Movie" },
            { value: "series", label: "Series" },
            { value: "episode", label: "Episode" },
          ]}
          style={{ width: "350px" }}
          value={type}
          onChange={(ev: any) => {
            setType(ev.target.value);
          }}
        />
        <CustomButton
          onClick={() => {
            toast.success(
              `Searching for ${title} ${type === "Type" ? "" : type} ${
                year ? `in ${year}` : ""
              }`
            );
            setSearch({ title, type, year: year });
          }}
        >
          <Typography
            variant="button"
            sx={{ color: darkMode ? colors.warning : colors.warningLight }}
          >
            Search
          </Typography>
        </CustomButton>
        <CustomTooltip
          title={"Your search history"}
          placement={"bottom"}
          spanStyle={{ display: "flex" }}
          tooltipStyle={{
            maxWidth: "340px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #C8DDE7",
            color: "#6D809F",
            font: "normal normal 500 11px/15px Axiforma",
            padding: "16px",
            boxShadow: "0px 4px 8px #31446929",
            borderRadius: "8px",
          }}
          arrowStyle={{
            color: "#FFFFFF",
          }}
        >
          <IconButton onClick={() => {}}>
            <HistoryIcon />
          </IconButton>
        </CustomTooltip>
      </Box>
      <CustomTable
        columns={columns}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
        rows={data?.data?.Search?.map((movie: any, index: number) => ({
          ...movie,
          id: movie.imdbID,
        }))}
        hasNextPage={data?.data?.Search?.length === 10}
        isLoading={isLoading}
        rowCount={data?.data?.totalResults}
      />
    </Box>
  );
}

export default Movies;
