import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } 
from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './style';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src=
                    "https://st2.depositphotos.com/2704315/11215/v/950/depositphotos_112153842-stock-illustration-store-icon-shop-icon-vector.jpg" 
                    alt="Commerce.js" height="25px" className={classes.image} 
                    />
                    Commerce.js
                </Typography>
                <div className={classes.grow} />

                {location.pathname === "/" && (
                <div className={classes.button}>
                    <Link to ="cart">go to cart</Link>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>         
                </div>) }
                
            </Toolbar>
        </AppBar>          
        </>
    )
}

export default Navbar;

