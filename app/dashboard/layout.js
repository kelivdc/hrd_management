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
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import Link from "next/link";
import Sidebar from "./sidebar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ProSidebarProvider, useProSidebar } from "react-pro-sidebar";

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
            <Grid container spacing={0}>
              <Grid item xs={12} sm={2}>
                <Sidebar />
              </Grid>
              <Grid
                item
                xs={12}
                sm={10}
                sx={{
                  minHeight: "100vh",
                  padding: 0,
                }}
              >
                <Box
                  sx={{
                    borderBottom: "solid 1px #f0f0f0",
                    position: "fixed",
                    right: 0,
                    left: "228px",
                    backgroundColor: "white"
                  }}
                >
                  <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      News
                    </Typography>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Toolbar>
                </Box>
                <Box
                  sx={{
                    padding: "20px 15px",
                    backgroundColor: "#f5f6f8",
                    marginTop: "60px"
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
