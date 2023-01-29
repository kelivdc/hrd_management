"use client";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { blue, blueGrey } from "@mui/material/colors";
import GoogleIcon from "@mui/icons-material/Google";

const judul = blue[800];
const sign_up = blueGrey[900];

function Signup() {
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
          Buat akun
        </Typography>
        <Typography
          sx={{
            marginTop: "15px",
          }}
        >
          Mulai dengan mendaftarkan akun dengan cara termudah dan hemat waktu
        </Typography>
        <Box
          mt={4}
          sx={{
            borderRadius: "15px",
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            sx={{
              fontWeight: "bold",
              color: sign_up,
            }}
          >
            <GoogleIcon
              sx={{
                marginRight: "10px",
              }}
            />
            Sign Up with Google
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: "15px",  
            borderRadius: "15px",
          }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontWeight: "bold",
            }}
          >           
            Sign Up with Email
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
