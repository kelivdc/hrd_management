"use client";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { blue, blueGrey } from "@mui/material/colors";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

const judul = blue[800];
const darkGray = blueGrey[900];

function Login() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundColor: "#b8dcfb",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          width: "40%",
          padding: "20px",
          marginTop: "-150px",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: darkGray,
            textAlign: "center",
          }}
        >
          Masuk
        </Typography>
        <Stack spacing={2} mt={4}>
          <TextField label="Email" fullWidth />
          <TextField label="Password" fullWidth />
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
          <Link href="/lupa-password">Lupa Password ?</Link>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
