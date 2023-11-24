import React from "react";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
import cover from "../../assets/sw.jpeg";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Container
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          height: "100%",
          width: "100%",
        }}
      >
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
