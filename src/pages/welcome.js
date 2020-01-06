import React, { useState } from 'react'
import Images from '../images';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Slide from '@material-ui/core/Slide'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Fade from '@material-ui/core/Fade'
import Theme from '../utils/Theme';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${Images.Back})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflowY: 'hidden',
    zIndex: -10

  },
  holder: {
    width: '100%',
    height: '100vh',
    padding: 30,
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  paperM: {
    width: '100%',
    height: 400,
    zIndex: 100,
    backgroundImage: `url(${Images.Meeting})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'cover'
  },
  paperD: {
    width: '100%',
    height: 400,
    zIndex: 100,
    backgroundImage: `url(${Images.Delivery})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'cover'
  },
  paperE: {
    width: '100%',
    height: 400,
    zIndex: 100,
    backgroundImage: `url(${Images.Enquiry})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'cover'
  },
  paperA: {
    width: '100%',
    height: 400,
    zIndex: 100,
    backgroundImage: `url(${Images.Meeting})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'cover'
  },
  itemHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    height: '30%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  button:{
    background: `linear-gradient(45deg, ${Theme.primaryColor}  40%, ${Theme.secondaryColor} 50%)`,
    border: 0,
    borderRadius: 3,
    boxShadow: `0 3px 5px 2px ${Theme.secondaryColor}`,
    color: 'white',
    height: 48,
    padding: '0 30px',
    
  },
}))

function WelcomePage () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.holder}>
        <Grid className={classes.itemHolder} xs={12} sm={12} md={3} item>
          <Paper className={`${classes.paperM} pap`} elevation={3}>
            <Paper className={classes.main}>
            <Button className={`${classes.button} gotoButtons`}><Link to="/meeting">Go to meeting</Link></Button>;

            </Paper>
           
          </Paper>
        </Grid>
        <Grid className={classes.itemHolder} xs={12} sm={12} md={3} item>
          <Paper className={`${classes.paperD} pap`} elevation={3}>
          <Paper className={classes.main}>
          <Button className={`${classes.button} gotoButtons`}><Link to="/delivery">Go to delivery</Link></Button>;

          </Paper>
           
          </Paper>
        </Grid>
        <Grid className={classes.itemHolder} xs={12} sm={12} md={3} item>
          <Paper className={`${classes.paperE} pap`} elevation={3}>
          <Paper className={classes.main}>
          <Button className={`${classes.button} gotoButtons`}><Link to="/enquiry">Go to enquiry</Link></Button>;

          </Paper>
           
          </Paper>
        </Grid>
        <Grid className={classes.itemHolder} xs={12} sm={12} md={3} item>
          <Paper className={`${classes.paperA} pap`} elevation={3}>
          <Paper className={classes.main}>
          <Button className={`${classes.button} gotoButtons`}><Link to="/asset">Go to assets</Link></Button>;

          </Paper>
            
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default WelcomePage
