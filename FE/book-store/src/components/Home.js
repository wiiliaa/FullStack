import { Button, Tab } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Button LinkComponent={NavLink} to="/books">
      <h1 style={{ fontSize: 50 }}>View book</h1>
    </Button>
  );
};

export default Home;
