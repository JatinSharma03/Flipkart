import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/core';
import Slide from './Slide';
import MidSection from './MidSection';

const useStyle = makeStyles({
    container:{
        padding:"18px 10px 10px 10px",
        backgroundColor:"#f2f2f2"
    },
    rightBox:{
        backgroundColor:"#ffffff",
        padding:5,
        margin:"12px 0 0 10px",
        width:"18%",
    }
})
export default function Home() {

    const classes = useStyle()
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';


    return (
        <div>
            <Navbar/>
            <Box className={classes.container}>
                <Banner/>
                <Box style={{display:"flex",}}>
                    <Box style={{width:"80%"}}>
                        <Slide
                            timer={true}
                            title="Deal of the Day"
                            itemCount={true}
                        />
                    </Box>
                    <Box className={classes.rightBox}>
                        <img src={adURL} alt="" width="240px"/>
                    </Box>
                </Box>
                <Slide
                    timer={false}
                    title='Top Picks'
                    itemCount={false}
                />
                <Slide
                    timer={false}
                    title="Discounts For You"
                    itemCount={false}
                />

                <MidSection/>

                <Slide
                    timer={false}
                    title="Big Sale"
                    itemCount={false}
                />
                <Slide
                    timer={false}
                    title="Best Sellers"
                    itemCount={false}
                />
                <Slide
                    timer={false}
                    title="Suggested Items"
                    itemCount={false}
                />
                <Slide
                    timer={false}
                    title="Discounts For You"
                    itemCount={false}
                />
                <Slide
                    timer={false}
                    title="Suggested Items"
                    itemCount={false}
                />
            </Box>
        </div>
    )
}
