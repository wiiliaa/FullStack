import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [state, setstate] = useState();
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#232f3d" }}>
      <Toolbar>
        <NavLink to="/" style={{ color: "white" }}>
          <Typography>
            <LibraryBooksOutlinedIcon />
          </Typography>
        </NavLink>
        <Tabs
          sx={{ ml: "auto" }}
          textColor="inherit"
          indicatorColor="secondary"
          value={state}
          onChange={(e, val) => setstate(val)}
        >
          <Tab LinkComponent={NavLink} to="/add" label="Add product" />
          <Tab LinkComponent={NavLink} to="/about-us" label="About us" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
