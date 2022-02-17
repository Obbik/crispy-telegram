import React from "react";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './styles.css';

const RegisterPage = () => {
    const [name, setName ] = useState('')
    const [surname, setSurname ] = useState('')
    const [email, setEmail ] = useState('')
    const [height, setHeight ] = useState('Midget')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const registerData = { name, surname, email, height }

        setIsPending(true)

        console.log(registerData)
    }

    return <div className="register-page">
        <Typography variant="h1">
            Yo, please register
        </Typography>
        <form
            onSubmit={handleSubmit}
            className="register-form">
            <div className="name-surname-wrapper">
                <TextField
                    label="Name"
                    variant="outlined"
                    sx={{
                        width: '50%',
                        marginRight: '5px'
                    }}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Surname"
                    variant="outlined"
                    sx={{
                        width: '50%',
                        marginLeft: '5px'
                    }}
                    onChange={(e) => setSurname(e.target.value)}
                />
            </div>
            <TextField
                label="email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl fullWidth>
                <InputLabel id="height-input-label">Height</InputLabel>
                <Select
                    labelId="height-input-label"
                    id="height-select"
                    onChange={(e) => setHeight(e.target.value)}
                    value={height}
                >
                    <MenuItem value={'Midget'}>Midget</MenuItem>
                    <MenuItem value={'Human'}>Human</MenuItem>
                    <MenuItem value={'Giant'}>Giant</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" type="submit">Register</Button>
        </form>
    </div>;
};

export default RegisterPage;
