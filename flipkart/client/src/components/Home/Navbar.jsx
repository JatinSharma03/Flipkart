import React from 'react';
import {navData} from '../../constants/data';
import {Box, Typography, makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    component:{
        display:"flex",
        margin:"55px 10px 0 10px",
        justifyContent:"space-around",
        "& > * ":{
            textAlign:"center",
            padding:"12px 8px"
        }
    },
    container:{
        "&:hover":{
            color:"#2874f0"
        }
    },
    image:{
        width:60
    },
    text:{
        fontSize:14,
        
    }

});
export default function Navbar() {
    const classes = useStyle();
    return (
        <div>
            <Box className={classes.component}>
                {
                    navData.map((data , i) => (

                        <Box className={classes.container} key={i}>
                            <img src={data.url} alt=""  className={classes.image}/>
                            <Typography className={classes.text}>{data.text}</Typography>
                        </Box>

                    ))
                }
            </Box>
        </div>
    )
}
