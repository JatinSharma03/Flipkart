import React from 'react'
import {ImageURL} from '../../constants/data'
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    wrapper:{
        display:"flex",
        justifyContent:"space-around",
        marginTop:20,
    }
})
export default function MidSection() {

    const classes = useStyle();

    return (
        <Box className={classes.wrapper}>
            {
                ImageURL.map(url=>(
                    <img src={url} alt="" width="32%"/>
                ))
            }

        </Box>
    )
}
