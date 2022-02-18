import React from "react";
import { useState } from "react";
import { Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from "react-router-dom";
import './styles.css';
import axios from "axios";

const RegisterPage = () => {
    const [ state, setState ] = useState({
        name: '',
        email: '',
        password: '',
        height: 'Midget'
    })
    const [isPending, setIsPending] = useState(false)

    let handleChange = (name, value) => {
        setState({
            ...state,
            [name]: value
        })
        console.log(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, height } = state;

        setIsPending(true)

        axios({
            url: 'http://localhost:3001/',
            method: 'post',
            data: {
                query: `mutation  {
                  createUser (name: "${name}",email: "${email}", password: "${password}", height: "${height}"){
                    name,
                    email,
                    password,
                    height
                  }
                }`
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            });

        console.log(name, email, password, height)
    }

    return <div className="register-page">
        <Typography variant="h1">
            Please register
        </Typography>
        <form
            onSubmit={handleSubmit}
            className="register-form">
            <div className="name-surname-wrapper">
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    sx={{
                        width: '50%',
                        marginRight: '5px'
                    }}
                    onChange={(e) => {handleChange(e.target.name, e.target.value)}}
                />
                <TextField
                    label="E-mail"
                    name="email"
                    variant="outlined"
                    sx={{
                        width: '50%',
                        marginLeft: '5px'
                    }}
                    onChange={(e) => {handleChange(e.target.name, e.target.value)}}
                />
            </div>
            <TextField
                label="Password"
                name="password"
                variant="outlined"
                onChange={(e) => {handleChange(e.target.name, e.target.value)}}
            />
            <FormControl fullWidth>
                <InputLabel id="height-input-label">Height</InputLabel>
                <Select
                    labelId="height-input-label"
                    id="height-select"
                    onChange={(e) => {handleChange(e.target.name, e.target.value)}}
                    value={state.height}
                >
                    <MenuItem value={'Midget'}>Midget</MenuItem>
                    <MenuItem value={'Human'}>Human</MenuItem>
                    <MenuItem value={'Giant'}>Giant</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" type="submit">Register</Button>
        </form>
        <div className="log-in-wrapper">
            <p>or</p>
            <Button>
                <Link to="/">Log in</Link>
            </Button>
            <p>if you already have an account</p>
        </div>
    </div>;
};

export default RegisterPage;
