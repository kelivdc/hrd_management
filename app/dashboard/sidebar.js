import { Typography } from "@mui/material";
import React from "react";
import {
  Menu,
  MenuItem,
  ProSidebarProvider,
  Sidebar,
  SubMenu,
} from "react-pro-sidebar";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { blue } from "@mui/material/colors";
import Link from "next/link";

const color = blue[600];

function SideBar() {
  return (
    <>
      <ProSidebarProvider>
        <div style={{ display: "flex", height: "100vh" }}>
          <Sidebar
            backgroundColor="white"
            rootStyles={{
              color: "#555",
              fontSize: "13px",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: color,
                fontWeight: "bold",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <PeopleAltIcon sx={{ fontSize: 20 }} /> AIEAO
              <Typography color={blue[200]}>PT Harapan Jaya</Typography>
            </Typography>
            <Menu>
              <MenuItem>
                <Link href="/dashboard">Dashboard</Link>
              </MenuItem>
              <SubMenu label="Karyawan">
                <MenuItem>
                  <Link href="/dashboard/karyawan/list">List</Link>
                </MenuItem>
                <MenuItem> Departemen </MenuItem>
              </SubMenu>
              <MenuItem> Payroll </MenuItem>
              <MenuItem> Settings </MenuItem>
            </Menu>
          </Sidebar>
        </div>
      </ProSidebarProvider>
    </>
  );
}

export default SideBar;
