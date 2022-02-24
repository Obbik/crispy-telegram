import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const MainPage = ({ setToken }) => {
  return (
    <>
      <Box
        style={{
          position: "relative",
          width: "100%",
          left: "50%",
          transform: "translate(-50%, 50%)",
        }}
      >
        <Button variant="contained" >
          Create task
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            console.log("klick");
            localStorage.removeItem("userToken");
            setToken(null);
          }}
        >
          Logout
        </Button>
      </Box>
    </>
  );
};

export default MainPage;
