import { useAppSelector } from "../store/client/hooks";
import { Box, Typography } from "@mui/material";
import { useGetMovieById } from "../store/server/features/movies/queries";
import CustomTooltip from "../components/tooltip/CustomTooltip";
import colors from "../styles/_export.scss";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import _ from "lodash";

function Movie() {
  const location = useLocation();
  const darkMode = useAppSelector((state) => state.darkMode.value);

  const id =
    location.pathname.split("/")[location.pathname.split("/").length - 1];
  const { data, isLoading, error } = useGetMovieById(id);

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
      {isLoading ? (
        <HashLoader />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: darkMode ? colors.base100 : colors.baseLight100,
              padding: "32px",
              height: "100%",
              width: "70%",
              borderRadius: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "16px",
                borderRadius: "8px",
                height: "300px",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: darkMode ? colors.warning : colors.warningLight,
                  fontSize: "25px",
                  borderBottom: "1px solid" + colors.warning,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {data?.data?.Title}
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    display: "flex",
                    gap: "8px",
                    fontSize: "25px",
                  }}
                >
                  ({data?.data?.imdbID})
                </Typography>
              </Typography>
              <Typography
                sx={{
                  color: darkMode ? colors.neutral : colors.neutralLight,
                  display: "flex",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: darkMode ? colors.warning : colors.warningLight,
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Director:
                </Typography>
                {data?.data?.Director}
              </Typography>
              <Typography
                sx={{
                  color: darkMode ? colors.neutral : colors.neutralLight,
                  fontSize: "13px",
                  display: "flex",
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: darkMode ? colors.warning : colors.warningLight,
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Year:
                </Typography>
                {data?.data?.Year}
              </Typography>
              <Typography
                sx={{
                  color: darkMode ? colors.neutral : colors.neutralLight,
                  fontSize: "13px",
                  display: "flex",
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: darkMode ? colors.warning : colors.warningLight,
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Genre:
                </Typography>
                {data?.data?.Genre}
              </Typography>
              <Typography
                sx={{
                  color: darkMode ? colors.neutral : colors.neutralLight,
                  fontSize: "13px",
                  display: "flex",
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: darkMode ? colors.warning : colors.warningLight,
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Rated:
                </Typography>
                {data?.data?.Rated}
              </Typography>
              <Typography
                sx={{
                  color: darkMode ? colors.neutral : colors.neutralLight,
                  fontSize: "13px",
                  display: "flex",
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: darkMode ? colors.warning : colors.warningLight,
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Released:
                </Typography>
                {data?.data?.Released}
              </Typography>
              <Typography
                sx={{
                  color: darkMode ? colors.neutral : colors.neutralLight,
                  fontSize: "13px",
                  display: "flex",
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: darkMode ? colors.warning : colors.warningLight,
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Runtime:
                </Typography>
                {data?.data?.Runtime}
              </Typography>
              <Typography
                sx={{
                  color: darkMode ? colors.neutral : colors.neutralLight,
                  fontSize: "13px",
                  display: "flex",
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: darkMode ? colors.warning : colors.warningLight,
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Writer:
                </Typography>
                {data?.data?.Writer}
              </Typography>
            </Box>
            <Box>
              <img
                src={
                  data?.data?.Poster !== "N/A"
                    ? data?.data?.Poster
                    : "https://placehold.co/332x332/orange/white?text=No+Image"
                }
                alt="poster"
                style={{
                  width: "332px",
                  height: "332px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              backgroundColor: darkMode ? colors.base300 : colors.baseLight300,
              padding: "32px",
              height: "100%",
              width: "70%",
              borderRadius: "16px",
            }}
          >
            <Typography
              sx={{
                color: darkMode ? colors.warning : colors.warningLight,
                fontSize: "25px",
                marginBottom: "16px",
                borderBottom: "1px solid" + colors.warning,
              }}
            >
              Details
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    Actors:
                  </Typography>
                  {data?.data?.Actors}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    Awards:
                  </Typography>
                  {data?.data?.Awards}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    Country:
                  </Typography>
                  {data?.data?.Country}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    DVD:
                  </Typography>
                  {data?.data?.DVD}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    BoxOffice:
                  </Typography>
                  {data?.data?.BoxOffice}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    Website:
                  </Typography>
                  {data?.data?.Website}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    Production:
                  </Typography>
                  {data?.data?.Production}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    Ratings:
                  </Typography>
                  {_.map(data?.data?.Ratings, (rating) => (
                    <Typography
                      sx={{
                        color: darkMode ? colors.neutral : colors.neutralLight,
                        fontSize: "13px",
                        display: "flex",
                        gap: "8px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {rating.Source}:
                      </Typography>
                      {rating.Value}
                    </Typography>
                  ))}
                </Typography>

                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    Metascore:
                  </Typography>
                  {data?.data?.Metascore}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    imdbRating:
                  </Typography>
                  {data?.data?.imdbRating}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    imdbVotes:
                  </Typography>
                  {data?.data?.imdbVotes}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    Type:
                  </Typography>
                  {data?.data?.Type}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    Plot:
                  </Typography>
                  <CustomTooltip
                    title={data?.data?.Plot}
                    placement="top"
                    arrow
                    noSpan
                  >
                    {data?.data?.Plot.length > 80
                      ? data?.data?.Plot.slice(0, 80) + "..."
                      : data?.data?.Plot}
                  </CustomTooltip>
                </Typography>

                <Typography
                  sx={{
                    color: darkMode ? colors.neutral : colors.neutralLight,
                    fontSize: "13px",
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: darkMode ? colors.warning : colors.warningLight,
                      fontSize: "13px",
                    }}
                  >
                    Languages:
                  </Typography>
                  {data?.data?.Language}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Movie;
