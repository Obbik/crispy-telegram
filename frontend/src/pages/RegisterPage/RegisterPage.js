import useRegister from './useRegisterLogic';
import { Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from "react-router-dom";
import './styles.css';

const RegisterPage = () => {
    const { handleSubmit, handleChange, state } = useRegister()

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
                    value={state.name}
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
                    value={state.email}
                    onChange={(e) => {handleChange(e.target.name, e.target.value)}}
                />
            </div>
            <TextField
                label="Password"
                type="password"
                name="password"
                variant="outlined"
                value={state.password}
                onChange={(e) => {handleChange(e.target.name, e.target.value)}}
            />
            <FormControl fullWidth>
                <InputLabel id="height-input-label">Height</InputLabel>
                <Select
                    name="height"
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
