// import React  from "react";
import "./Loginpage.css"
import {Avatar, Button, Checkbox, FormControlLabel, Grid,Link,Paper, TextField, Typography} from '@mui/material'
// import {LockOutlinedIcon} from '@material-ui/icons/LockOutlinedIcon';
// import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage =()=>{ 
    const paperStyle ={padding:40,height:'100vh',width:300,margin:'auto',backgroundColor:"skyblue"}
    const btnstyle={margin:'8px 0'}
    const [username,SetUsername]=useState('');
    const [password,Setpassword]=useState('');
    const navigate =useNavigate();
    
          
    const handleUsernameChange = (event)=>{
        SetUsername(event.target.value);

    };

    const handlePasswordChange = (event)=>{
       Setpassword(event.target.value);
    }
   
     
let Haii =()=>{
    // alert("Welcome" + " " +  username)
    navigate(`/Home/${username}`)
}

const Hello =()=>{
    navigate(`/SignUp`)
}
return(
    <Grid className="style">
        <Paper className="style1" elevation ={13} style={paperStyle}>
            <Grid align="center">
                <Avatar style ={{backgroundColor:"red"}}>
                {/* <LockOutlinedIcon/> */}
                {/* <LockOpenRoundedIcon/> */}
               M </Avatar> 
    <h2>Sing In</h2>
    </Grid>
        <TextField label="Username" placeholder="Enter username" value={username} onChange={handleUsernameChange} fullWidth required style={{margin:10}} variant='standard'/>
        <TextField label="password" placeholder="Enter password" type="password" value={password} onChange={handlePasswordChange}fullWidth required style={{margin:10}} variant='standard' />
         <FormControlLabel
        control ={
            <Checkbox
            name ="checkedB"
            color="primary"
            />
        }
        label ="Remember me"
        /> 
        <Button type='submit' color ='primary' variant = 'contained' style={btnstyle} onClick={Haii} fullWidth>Sign In</Button>
        <Typography>
            <Link href ="#">
                Forgot password?
            </Link>
        </Typography>
        <Typography>DO you have an account?
            <Link onClick={Hello}>
               sign up?
            </Link>
        </Typography>
        </Paper>
        
    </Grid>
)
}
        
export default LoginPage;