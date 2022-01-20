import {React, useState} from 'react'
import { makeStyles, Box, TextField, Typography, Button } from '@material-ui/core'

const useStyle = makeStyles({
    container:{
        width:"100vw",
        height:"100vh",
        backgroundColor:"rgba(0, 0, 0, 0.500)",
        position:"fixed",
        top:0,
        leftL:0,
        zIndex:300,
    },
    subContainer:{
        height: '80vh',
        width: '50vw',
        backgroundColor:"white",
        position:"fixed",
        Top:"8vh",
        left:"20vw",
        display:"flex",
        zIndex:400
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: '#2874f0',
        backgroundPosition: 'center 88%',
        backgroundRepeat: 'no-repeat',
        height: '67vh',
        width: '30%',
        overflow:"hidden",
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        width:"70%",
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        lineHeight: 0,
        marginTop: 10,
        fontWeight: 600
    }
})

export default function Login({open, setopen}) {

    const classes = useStyle();

    const [login, setlogin] = useState(true)

    const loginUser = ()=>{
        setopen();

    }
    const toggleSignup = ()=>{
        setlogin(false)
    }
    const onValueChange = ()=>{}
    const onInputChange = ()=>{}
    const signupUser = ()=>{
        setopen();
    }
    const error = false;

    return (
        <div style={{display:open?"block":"none"}}>
        <div className={classes.container}  onClick={()=>{setopen()}}></div>
            <div className={classes.subContainer}>
                <div className={classes.image}></div>
                <div>
                    {
                        login?
                <Box className={classes.login}>
                            <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' required/>
                            { error && <Typography className={classes.error}>Please enter valid Email ID/Mobile number</Typography> }
                            <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' required/>
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's <a href="/" style={{textDecoration:"none",color:"#2874f0"}}>erms of Use</a> and <a href="/" style={{textDecoration:"none",color:"#2874f0"}}>Privacy Policy</a>.</Typography>
                            <Button className={classes.loginbtn} onClick={() => loginUser()} >Login</Button>
                            <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                            <Button className={classes.requestbtn}>Request OTP</Button>
                            <Typography className={classes.createText} onClick={() => toggleSignup()}>New to Flipkart? Create an account</Typography>
                </Box>:
                <Box className={classes.login}>
        <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' required/>
        <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' required/>
        <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' required/>
        <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' required/>
        <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' required/>
        <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' required/>
        <Button className={classes.loginbtn} onClick={() => signupUser()} >Continue</Button>
    </Box>
}
                </div>
            </div>
        </div>
    )
}
