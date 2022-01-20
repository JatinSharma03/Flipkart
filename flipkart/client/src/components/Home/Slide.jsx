import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../constants/data";
import { makeStyles, Box, Typography, Button,Divider } from "@material-ui/core";
import Countdown from 'react-countdown';


const useStyle = makeStyles({
  image: {
    height: 150,
    "&:hover": {
      height: 160,
    },
  },
  imgBox:{
      height:160
  },
  container: {
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent: "center",
    padding:"25px 15px 12px 0",
  },
  component:{
      marginTop:12,
    backgroundColor:"#ffffff"
  },
  text:{
      padding:"15px 20px",
      display:"flex",
      alignItems:"center"
  },
  dealtext:{
      fontSize:22,
      fontWeight:600,
      lineHeight:"32px",
      marginRight:25,

  },
  timer:{
      color:"#7f7f7f"
  },
  button:{
      marginLeft:"auto",
      backgroundColor:"#2874f0",
      borderRadius:2,
      fontSize:13
  },
  dataText:{
      fontSize:14,
      marginTop:5,
      whiteSpace:"nowrap",
      overflow:"hidden",
      textOverflow:"ellipsis"
  }
});

export default function Slide({timer, title, itemCount}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemCount?5:7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const classes = useStyle();
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const Completionist = ()=> <span>You are go</span>
  const renderer = ({hours, minutes, seconds, completed})=>{
      if(completed){
          return <Completionist/>
      }
      else{
          return <span className={classes.timer}> {hours} : {minutes} : {seconds} Left</span>
      }
  }
  return (
    <Box className={classes.component}>
        <Box className={classes.text}>
            <Typography className={classes.dealtext}>{title}</Typography>
            {
              timer && <><img src={timerURL} alt="" style={{width:"24px"}}/>&nbsp;&nbsp;&nbsp;
              <Countdown date={Date.now()+5.05e+7} renderer={renderer} />
              <Button variant="contained" color="primary" className={classes.button}>View All</Button></>
            }
        </Box>
        <Divider/>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        keyBoardControl={true}
        removeArrowOnDeviceType={["mobile", "tablet"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        
      >
        {products.map((data) => (
          <Box className={classes.container}>
              <Box className={classes.imgBox}>
            <img src={data.url} alt="" className={classes.image} />
            </Box>
            <Typography className={classes.dataText} style={{fontWeight:600, color:"#212121", }}>{data.title.shortTitle}</Typography>
            <Typography className={classes.dataText} style={{ color:" green", }}>{data.discount}</Typography>
            <Typography className={classes.dataText} style={{color:"#212121", opacity:.6}}>{data.tagline}</Typography>
          </Box>
        ))}
      </Carousel>
      ;
    </Box>
  );
}
