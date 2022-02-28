import { React, useState } from "react";
import "./LoginPage.css";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import { LOGIN_MUTATION } from "./loginMutationGql";

const LoginPage = ({setToken}) => {
  const {query} = useFetch();
  const [userLogin, setUserLogin] = useState({
    name: "",
    password: "",
    email: "",
  });


  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
    console.log(userLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    query(LOGIN_MUTATION(userLogin.name, userLogin.password, userLogin.email), res => {
      setToken(res.data.data.Login.token)
      localStorage.setItem('name', res.data.data.Login.name);
      localStorage.setItem('userToken', res.data.data.Login.token);
    }, 'post' )
  };

  return (
    <div className="login-wrapper">
      <Typography variant="h1" component="div">
        Login
      </Typography>

      <form onSubmit={handleSubmit} className="login-form">
        <TextField
          id="outlined-basic"
          name="name"
          label="User Name"
          variant="outlined"
          margin="normal"
          autoComplete="off"
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          name="password"
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          name="email"
          label="email"
          variant="outlined"
          margin="normal"
          type="email"
          onChange={handleChange}
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
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "45%"
            }}
            >
              <Button
                style={{
                    width: "100%"
                }}
              >
                register
              </Button>
            </Link>
        </Box>
      </form>
    </div>
  );
};

export default LoginPage;
