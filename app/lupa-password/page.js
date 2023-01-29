"use client";
import { Box, Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { blue, blueGrey } from "@mui/material/colors";
import GoogleIcon from "@mui/icons-material/Google";

const judul = blue[800];
const sign_up = blueGrey[900];

function Lupa() {
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
            color: judul,
          }}
        >
          Lupa Password
        </Typography>
        <Typography
          sx={{
            marginTop: "15px",
          }}
        >
          Masukkan email yang pernah Anda daftarkan. Kami akan segera
          mengirimkan password terbaru Anda.
        </Typography>
        <Stack spacing={2} mt={4}>
          <TextField label="Email" fullWidth  required/>
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontWeight: "bold",
            }}
          >
            Kirim Reset password
          </Button>
        </Stack>       
      </Box>
    </Box>
  );
}

export default Lupa;
