"use client";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@fontsource/inter/400.css";
import "../app/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Paper } from "@mui/material";

export default function RootLayout({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Inter",
      button: {
        textTransform: "none",
      },
    },
    button: {
      textTransform: "none",
    },   
    components: {
      MuiTextField: {
        defaultProps: {
          size: "small"
        },        
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <head />
        <body theme={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
