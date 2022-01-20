import { AppBar, Toolbar, makeStyles, Typography, Box, withStyles } from '@material-ui/core'; 
import SearchBar from './SearchBar' 
import HeaderButton from './HeaderButton';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    header:{
        backgroundColor:"#2874f0",
        height:"56px",
        zIndex:20
    },
    logo:{
        width:"75px"
    },
    subURL:{
        width:10,
        marginLeft:4,
        height:10
    },
    container:{
        display:'flex'
    },
    component:{
        marginLeft:"12%",
        lineHeight:0,
        textDecoration:"none",
        color:"#fff"
    },
    subHeading:{
        fontSize:10,
        fontStyle:"italic",
        "&:hover":{
            textDecoration:"underline"
        }
    }
})


const ToolBar = withStyles({
    root:{
        minHeight:56
    }
})(Toolbar);

const Header = ({setopen})=>{

    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
<AppBar className={classes.header}>
    <ToolBar>
        <Link to="/" className={classes.component}>
            <img src={logoURL} alt="" className={classes.logo} />
            <Box className={classes.container}>
                <Typography className={classes.subHeading}>Explore <Box component="span" style={{color:"#FFE500"}}> Plus</Box></Typography>
                <img src={subURL} alt="" className={classes.subURL} />
            </Box>
        </Link>

        <SearchBar/>

        <HeaderButton setopen={setopen}/>

    </ToolBar>
</AppBar>
    )
}

export default Header