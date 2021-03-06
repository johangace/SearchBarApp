import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: "80px"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"
       style={{
        textDecoration: "none",
        backgroundColor: "black"}}>
        <Toolbar > 
          <Typography variant="h5" className={classes.title}>
          <NavLink exact to="/"
          style={{
            textDecoration: "none",
            color: "white"}}>
            <i className="fas fa-cocktail fa-2x"></i>
              SearchBar
          </NavLink>
          </Typography>
        <NavLink exact to="/AllDrinks"
         style={{
          textDecoration: "none",
          color: "white"}}>
          <Button 
            color="inherit"
            style={{
              marginRight: "80px",
              marginTop: "18px"
          }}
          >
            Drinks A-Z
          </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
