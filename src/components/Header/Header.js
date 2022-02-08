import * as React from "react";
import useStyles from "./styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Typography variant="h2" align="center">
        Albums
      </Typography>
    </AppBar>
  );
};
export default Header;
