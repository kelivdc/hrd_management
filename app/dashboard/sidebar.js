import { Button, Typography } from "@mui/material";
import React from "react";
import {
  Menu,
  MenuItem,
  ProSidebarProvider,
  Sidebar,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { blue } from "@mui/material/colors";
import Link from "next/link";

const color = blue[600];

function SideBar() {  
  const { collapseSidebar } = useProSidebar();  
  return (
    <>
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
              <MenuItem icon={<DashboardIcon />} component={<Link href="/dashboard" />}>
                Dashboard
              </MenuItem>
              <SubMenu label="Karyawan" icon={<PeopleIcon />}>
                <MenuItem component={<Link href="/dashboard/karyawan/list" />}>
                  List
                </MenuItem>
                <MenuItem> Departemen </MenuItem>
              </SubMenu>
              <MenuItem> Payroll </MenuItem>
              <MenuItem> Settings </MenuItem>
            </Menu>
          </Sidebar>
        </div>
    </>
  );
}

export default SideBar;
