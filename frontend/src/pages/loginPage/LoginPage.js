import React from "react";
import './LoginPage.css'
import { Button,
    ButtonGroup,
    TextField,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";


const LoginPage = () => {
   return <div className="login-wrapper">
       <Typography variant="h1" component="div" >Login</Typography>
       <form className="login-form">
            <TextField
                id="outlined-basic" 
                label="User Name" 
                variant="outlined" 
                margin="normal"

                />
            <TextField 
                id="outlined-basic" 
                label="Password" 
                variant="outlined"
                margin="normal"
                type="password" />

            <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px'
            }}>

            <ButtonGroup variant="text" aria-label="text button group">
                <Button type='submit'>Login</Button>
                <Button onClick={()=>{
                    window.location = '/register';
                }} >Register</Button>
            </ButtonGroup>
            </Box>
       </form>
   </div>
   
};

export default LoginPage;
