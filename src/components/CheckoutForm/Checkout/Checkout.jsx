import React from 'react';
import { Typography, Divider, Container, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

 const Checkout = () => {
   const classes = useStyles();

  return (
   <>
    <div>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">
          Your Order has been placed
        </Typography> 

        <Container>
      <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>
        Thank you for your purchase!
        </Typography>
        <Typography variant="subtitle2">
        Your Order has been placed
        </Typography>
      <div className={classes.buttons}>
        <Button component={Link}  type="button" size="small" className={classes.btn} color="secondary" to="/">
        Back to home</Button>
      </div>
       </Container>
      </div>
      </> 
  );
 };

export default Checkout;