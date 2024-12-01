import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "28px",
      }}
    >
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default Home;
