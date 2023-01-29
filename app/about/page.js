'use client'

import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
      <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/login">Login</Link>
      <Box>
      <Button variant="contained" color="primary">Tombol</Button>
      </Box>
    </>
  );
}

export default About;
