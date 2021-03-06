import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Slide from '@material-ui/core/Slide'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button';
import Theme from '../utils/Theme';

import TextField from '@material-ui/core/TextField'
import Fade from '@material-ui/core/Fade'
import Autocomplete from '@material-ui/lab/Autocomplete'
import SignatureCanvas from 'react-signature-canvas'
import Images from '../images'

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },

  { title: 'Interstellar', year: 2014 },

  { title: 'Monty Python and the Holy Grail', year: 1975 }
]

function ComboBox (props) {
  return (
    <Autocomplete
      id='combo-box-demo'
      options={top100Films}
      getOptionLabel={option => option.title}
      style={{ width: props.width ? props.width : 300 }}
      renderInput={params => (
        <TextField
          {...params}
          label={props.title}
          variant='outlined'
          name={props.name}
          fullWidth
        />
      )}
    />
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundImage: `url(${Images.Delivery})`,
    backgroundRepeat: 'repeat',
    padding: 40
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  Sroot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(85),
      height: theme.spacing(85)
    }
  },
  button:{
    background: `linear-gradient(45deg, ${Theme.primaryColor}  30%, ${Theme.secondaryColor} 90%)`,
    border: 0,
    float: 'left',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    
  },
  pap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30,
    margin: 20
  },
  field: {
    width: '100%',
    marginTop: 20
  },
  fieldt: {
    width: '100%'
  },
  fieldfull: {
    width: '100%',
    marginTop: 20
  },
  fieldsig: {
    height: 400,
    width: '100%'
  }
}))

function Delivery () {
  const classes = useStyles()

  const [value, setValue] = React.useState('reception')
  const [delivery, setDelivery] = React.useState('reception')

  const handleChange = event => {
    setDelivery(event.target.value)
  }

  const formSubmit = event => {
    event.preventDefault()
    const form = event.target.elements
    var formdata = {}
    formdata.Sdelivery = delivery
    for (let d in form) {
      formdata[form[d].name] = form[d].value
    }
    Object.keys(formdata).forEach(
      key => formdata[key] == null && delete formdata[key]
    )
    console.log(formdata)
  }

  const renderForm = () => {
    if (delivery === 'reception') {
      return (
        <Grid container>
          <Grid item xs={12} sm={12}>
            <TextField
              className={classes.field}
              name='ReceptionName'
              id='outlined-basic'
              label="Receptionist's name"
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant='h6'>Receptionist's signature</Typography>
            <SignatureCanvas
              penColor='blue'
              canvasProps={{
                width: 300,
                height: 300,
                className: 'sigCanvas'
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant='h6'>Courier's signature</Typography>
            <SignatureCanvas
              penColor='blue'
              canvasProps={{
                width: 300,
                height: 300,
                className: 'sigCanvas'
              }}
            />
          </Grid>
        </Grid>
      )
    } else if (delivery === 'addressee') {
      return (
        <Grid container>
          <Grid item xs={12} sm={6}>
            <ComboBox
              width='100%'
              name='PDepartment'
              title="Person's department"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.fieldt}
              id='outlined-basic'
              label="Person's name"
              name='Pname'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant='h6'>Addressee's signature</Typography>
            <SignatureCanvas
              penColor='blue'
              canvasProps={{
                width: 300,
                height: 300,
                className: 'sigCanvas'
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} justify='center'>
            <Typography variant='h6'>Courier's signature</Typography>
            <SignatureCanvas
              penColor='blue'
              canvasProps={{
                width: 300,
                height: 300,
                className: 'sigCanvas'
              }}
            />
          </Grid>
        </Grid>
      )
    } else if (delivery === 'behalf') {
      return (
        <Grid container>
          <Grid item xs={12} sm={6}>
            <ComboBox
              width='100%'
              name='Pdepartment'
              title="Person's department"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.fieldt}
              id='outlined-basic'
              label="Person's name"
              name='Pname'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant='h6'>Receiver's signature</Typography>
            <SignatureCanvas
              penColor='blue'
              canvasProps={{
                width: 300,
                height: 300,
                className: 'sigCanvas'
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} justify='center'>
            <Typography variant='h6'>Courier's signature</Typography>
            <SignatureCanvas
              penColor='blue'
              canvasProps={{
                width: 300,
                height: 300,
                className: 'sigCanvas'
              }}
            />
          </Grid>
        </Grid>
      )
    }
  }
  React.useEffect(() => {})
  return (
    <div className={classes.root}>
      <div className={classes.Sroot}>
      <form style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center'}} onSubmit={formSubmit}>
        <Grid container xs={10}>
          <Grid item spacing={2} item lg={6} md={6} sm={12} xs={12}>
            <Paper elevation={3} className={classes.pap}>
              <Grid container alignItems='center' spacing={1}>
                <Slide direction='left' in={true} mountOnEnter unmountOnExit>
                  <Grid xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      className={classes.fieldfull}
                      id='outlined-basic'
                      label='Company name'
                      name='Cname'
                      variant='outlined'
                    />
                  </Grid>
                </Slide>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.field}
                    id='outlined-basic'
                    label='Last name'
                    name='lastName'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.field}
                    id='outlined-basic'
                    label='First name'
                    name='firstName'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.field}
                    id='outlined-basic'
                    label='Phone Number'
                    name='phoneNumber'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.field}
                    id='outlined-basic'
                    label='Email'
                    name='email'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h6' className={classes.title}>
                    Delivery Instruction
                  </Typography>
                  <FormControl
                    component='fieldset'
                    className={classes.formControl}
                  >
                    <RadioGroup
                      aria-label='delivery'
                      name='delivery'
                      value={delivery}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value='reception'
                        control={<Radio />}
                        label='Leave at Reception'
                      />
                      <FormControlLabel
                        value='addressee'
                        control={<Radio />}
                        label='Addressee Only'
                      />
                      <FormControlLabel
                        value='behalf'
                        control={<Radio />}
                        label='On behalf'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid spacing={2} item lg={6} md={6} sm={12} xs={12}>
            <Paper elevation={3} className={classes.pap}>
              {renderForm()}
              <Grid item style={{display: 'flex', justifyContent: 'flex-end'}} container xs={12} >
                  <Button className={`${classes.button}`} type="submit" >Submit</Button>;

                  </Grid>
            </Paper>
          </Grid>
        </Grid>
        </form>
      </div>
    </div>
  )
}

export default Delivery
