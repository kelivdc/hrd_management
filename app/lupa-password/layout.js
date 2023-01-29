"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { blue } from "@mui/material/colors";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import React from "react";
import Link from "next/link";

const color = blue[600];

function Layout({ children }) {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav" position="fixed" color="inherit" elevation={3}>
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: color,
                fontWeight: "bold",
              }}
            >
              <PeopleAltIcon sx={{ fontSize: 20 }} /> AIEAO
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ m: "auto", paddingRight: "15px" }}>
                  Belum punya akun ?
                  <Link href="/sign-up" passHref>
                    <Button>Daftar</Button>
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box component="main" mt={2}>
        {children}
      </Box>
    </>
  );
}

export default Layout;
