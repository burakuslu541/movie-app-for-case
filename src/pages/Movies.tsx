import React from "react";
import { useAppSelector } from "../store/client/hooks";
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
import colors from "../styles/_export.scss";
import { useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
import { useAppDispatch } from "../store/client/hooks";
import { addSearch } from "../store/client/features/pastSearches/pastSearches";
import _ from "lodash";
import useMediaQuery from "@mui/material/useMediaQuery";

function Movies() {
  const query = useMediaQuery("(max-width: 600px)");
  const darkMode = useAppSelector((state) => state.darkMode.value);
  const pastSearches = useAppSelector((state) => state.pastSearches.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        paddingX: query ? "16px" : "150px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          flexDirection: query ? "column" : "row",
          alignItems: query ? "flex-start" : "center",
        }}
      >
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
        <Box sx={{ display: "flex", gap: "8px" }}>
          <CustomButton
            onClick={() => {
              toast.success(
                `Searching for ${title} ${type === "Type" ? "" : type} ${
                  year ? `in ${year}` : ""
                }`
              );
              setSearch({ title, type, year: year });
              // addSearch: (state, action: PayloadAction<string>) => {
              //     state.value.push(action.payload)
              //   },
              dispatch(addSearch(title));
            }}
          >
            <Typography
              variant="button"
              sx={{ color: darkMode ? colors.warning : colors.warningLight }}
            >
              Search
            </Typography>
          </CustomButton>

          <Box
            sx={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <IconButton onClick={handleClick}>
              <HistoryIcon color="primary" />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "25px",
                  minWidth: "150px",
                  minHeight: "150px",
                }}
              >
                {pastSearches.length === 0 ? (
                  <Typography>No past searches</Typography>
                ) : (
                  _.uniq(pastSearches).map((search, index) => (
                    <Typography
                      key={index}
                      onClick={() => {
                        setTitle(search);
                        setSearch({ title: search, type: "", year: "" });
                        handleClose();
                      }}
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: darkMode
                            ? colors.warning
                            : colors.warningLight,
                          textDecoration: "underline",
                          opacity: 0.8,
                        },
                        width: "100%",
                      }}
                    >
                      {search}
                    </Typography>
                  ))
                )}
              </Box>
            </Popover>
          </Box>
        </Box>
      </Box>
      <CustomTable
        columns={columns}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
        rows={_.uniqBy(data?.data?.Search, "imdbID").map(
          (movie: any, index: number) => ({
            ...movie,
            id: movie.imdbID,
          })
        )}
        hasNextPage={data?.data?.Search?.length === 10}
        isLoading={isLoading}
        rowCount={data?.data?.totalResults}
        onRowClick={(row) => {
          navigate(`/${row.id}`);
        }}
      />
    </Box>
  );
}

export default Movies;
