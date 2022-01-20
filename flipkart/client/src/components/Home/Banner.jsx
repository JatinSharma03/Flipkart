import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    image:{
        width:"100%",
        height:280,
    }
})

export default function Banner() {

    const classes = useStyle();
    return (
    <div>
      <Carousel
      animation='slide'
      indicators={false}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
          style:{
              backgroundColor:"#ffffff",
              color:"#494949",
              borderRadius:5,
              height:100,
          }
      }}
      interval={3000}
      >
        {bannerData.map((item, i) => (
          <div key={i}>
            <img src={item} alt="" className={classes.image}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
