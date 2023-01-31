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
import { Box } from "@mui/system";

const color = blue[600];

function SideBar() {  
  const { collapseSidebar } = useProSidebar();  
  return (
    <>
        <Box sx={{ display: "flex", top: 0, bottom: 0, position: "fixed", overflowY: "hidden" }}>
          <Sidebar
            rootStyles={{
              color: "#607489",
              fontSize: "13px"
            }}
            backgroundColor="white"
            width="228px"
            overflowY="hidden"
          >
            <Typography
              variant="h6"
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
              <PeopleAltIcon sx={{ fontSize: 20 }}/> PRO STAFF
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
              {/* <MenuItem> Payroll </MenuItem>
              <MenuItem> Settings </MenuItem>               */}
            </Menu>
          </Sidebar>
        </Box>
    </>
  );
}

export default SideBar;
