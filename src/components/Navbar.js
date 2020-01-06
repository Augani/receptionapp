import React, { useState } from 'react'
import Theme from '../utils/Theme'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, withRouter } from 'react-router-dom'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

function SimpleBreadcrumbs (props) {
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link style={{ color: 'white' }} to='/'>
        Home
      </Link>
      {!props.child ? null : (
        <Link style={{ color: 'white' }} to={`/${props.child}`}>
          {props.child}
        </Link>
      )}
    </Breadcrumbs>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: `linear-gradient(45deg, ${Theme.primaryColor}  30%, ${Theme.secondaryColor} 90%)`,

  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

function Navbar (props) {
  const classes = useStyles()
  var simple

  function changeHandle () {
    var c = window.location.pathname
    if (c.length > 2) {
      c = c.split('/')[1]
      simple = SimpleBreadcrumbs({ child: c })
    } else {
      simple = SimpleBreadcrumbs({})
    }
    return simple
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position='static'>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
          <Typography variant='h6' className={classes.title}>
            GCNET Reception App
          </Typography>
          {changeHandle()}
          {/* <Button color="inherit"><Link to="/meeting">Meeting</Link></Button>
            <Button color="inherit"><Link to="/delivery">Delivery</Link></Button>
            <Button color="inherit"><Link to="/enquiry">Enquiry</Link></Button>
            <Button color="inherit"><Link to="/asset">Asset</Link></Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(Navbar);
