import { useQuery } from "react-query";
import axiosInstance from "../../../../api/axios_instance";

interface GetMoviesParams {
    s?: string; // search query movie title
    type?: string; // movie, series, episode
    y?: string; // year
    r?: string; // response format: json, xml
    page?: number; // page number 1-100
    callback?: string; // JSONP callback name
    v?: number; // API version (reserved for future use)
}

const getMovies = async (params: GetMoviesParams) => {
    return axiosInstance({
        url: "/",
        method: "GET",
        params: {
            apikey: process.env.REACT_APP_OMDB_API_KEY,
            ...params,
        },
    });
}

const getMovieById = async (id: string) => {
    return axiosInstance({
        url: "/",
        method: "GET",
        params: {
            apikey: process.env.REACT_APP_OMDB_API_KEY,
            i: id,
        },
    });
}

export const useGetMovies = (params: GetMoviesParams) => useQuery(["movies", params], () => getMovies(params));
export const useGetMovieById = (id: string) => useQuery(["movie", id], () => getMovieById(id));