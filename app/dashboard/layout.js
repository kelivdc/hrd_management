"use client";

import {
  AppBar,
  Box,
  Paper,
  Button,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { blue, grey } from "@mui/material/colors";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import React from "react";
import Link from "next/link";
import Sidebar from "./sidebar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  ProSidebarProvider, useProSidebar,
} from "react-pro-sidebar";

// https://berrydashboard.io/dashboard/default
const color = blue[600];

function Layout({ children }) {  
  const theme2 = createTheme({
    typography: {
      allVariants: {
        color: grey[700],
      },
      default: {
        fontSize: "0.9rem",
        color: "#333",
      },
      fontFamily: "Inter",
    },
    palette: {
      color: "#ccc",
      primary: {
        main: color,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme2}>
        <ProSidebarProvider>
        <Box
          component="main"
          sx={{
            minHeight: "100vh",
            margin: 0,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <Sidebar />
            </Grid>
            <Grid
              item
              xs={12}
              sm={10}
              sx={{
                backgroundColor: "#fff",
                minHeight: "100vh",
              }}
            >
              <Box
                sx={{
                  padding: "20px 30px",
                }}
              >
                
                {children}
              </Box>
            </Grid>
          </Grid>
        </Box>
        </ProSidebarProvider>

      </ThemeProvider>
    </>
  );
}

export default Layout;
