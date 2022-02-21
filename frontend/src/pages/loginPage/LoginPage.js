import { React ,useState } from "react";
import "./LoginPage.css";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();


    axios({
      url: 'http://localhost:3001/',
      method: 'post',
      data: {
          query: `mutation  {
            Login (name: "${userName}", password: "${userPassword}"){
              name,
              token,
            }
          }`
      }
  })
      .then(res => {
       if(res.data.data.Login.token){
         
       }
      })
      .catch(err => {
          console.log(err.message);
      });
  };

  return (
    <div className="login-wrapper">
      <Typography variant="h1" component="div">
        Login
      </Typography>

      <form onSubmit={handleSubmit} className="login-form">
        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          margin="normal"
          autoComplete="off"
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          onChange={(e) => setUserPassword(e.target.value)}
        />

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            style={{
              width: "45%",
            }}
          >
            Login
          </Button>
          <Button
            style={{
              width: "45%",
            }}
          >
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              register
            </Link>
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoginPage;
