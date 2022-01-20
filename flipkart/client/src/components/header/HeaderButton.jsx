import {React} from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';


const useStyle = makeStyles({
  login: {
    backgroundColor: "#ffffff",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow:"none",
    height:30
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginLeft: "4.5vw",
      fontSize: 14,
      fontWeight: "bolder",
      textDecoration:"none",
      color:"#fff"
    },
  },
  container: {
    display: "flex",
  },
});


export default function HeaderButton({setopen}) {
  const classes = useStyle();

  
  return (
    <div>
      <Box className={classes.wrapper}>
        <Button variant="contained" onClick={()=>{setopen()}} className={classes.login} style={{color: "#2874f0",}}>
          Login
        </Button>
        <Typography>More</Typography>
        <Link to="/cart" className={classes.container}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <Typography style={{marginLeft:10}}>Cart</Typography>
        </Link>
      </Box>
    </div>
  );
}
