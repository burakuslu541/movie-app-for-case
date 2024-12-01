import { useAppSelector } from "../store/client/hooks";
import { Box, Typography } from "@mui/material";
import { useGetMovieById } from "../store/server/features/movies/queries";
import CustomTooltip from "../components/tooltip/CustomTooltip";
import colors from "../styles/_export.scss";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import _ from "lodash";
import useMediaQuery from "@mui/material/useMediaQuery";
//i18n
import { withTranslation } from "react-i18next";
import i18n from "../store/localize/localize";

function Movie() {
  const { t } = i18n;
  const location = useLocation();
  const query = useMediaQuery("(max-width: 600px)");
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
              flexDirection: query ? "column" : "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: darkMode ? colors.base100 : colors.baseLight100,
              padding: query ? "10px" : "32px",
              height: "100%",
              width: query ? "90%" : "80%",
              borderRadius: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: query ? "16px" : "20px",
                padding: query ? "8px" : "16px",
                borderRadius: "8px",
                height: "300px",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: darkMode ? colors.warning : colors.warningLight,
                  fontSize: query ? "16px" : "25px",
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
                    fontSize: query ? "13px" : "16px",
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
                }}
              >
                <Typography
                  sx={{
                    color: darkMode ? colors.warning : colors.warningLight,
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  {t("COMMON.DIRECTOR")}:
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
                  {t("COMMON.YEAR")}:
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
                  {t("COMMON.GENRE")}:
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
                  {t("COMMON.RATED")}:
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
                  {t("COMMON.RELEASED")}:
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
                  {t("COMMON.RUNTIME")}:
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
                  {t("COMMON.WRITER")}:
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
              padding: query ? "10px" : "32px",
              height: "100%",
              width: query ? "90%" : "80%",
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
              {t("COMMON.DETAILS")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: query ? "column" : "row",
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
                    {t("COMMON.ACTORS")}:
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
                    {t("COMMON.AWARDS")}:
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
                    {t("COMMON.COUNTRY")}:
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
                    {t("COMMON.DVD")}:
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
                    {t("COMMON.BOX_OFFICE")}:
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
                    {t("COMMON.WEBSITE")}:
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
                    {t("COMMON.PRODUCTION")}:
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
                    {t("COMMON.RATINGS")}:
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
                    {t("COMMON.META_SCORE")}:
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
                    {t("COMMON.IMDB_RATING")}:
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
                    {t("COMMON.IMDB_VOTES")}:
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
                    {t("COMMON.TYPE")}:
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
                    {t("COMMON.PLOT")}:
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
                    {t("COMMON.LANGUAGES")}:
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

export default withTranslation()(Movie);
