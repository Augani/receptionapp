import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button';
import Theme from '../utils/Theme';

import Radio from '@material-ui/core/Radio'
import Images from '../images';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Fade from '@material-ui/core/Fade'
import Autocomplete from '@material-ui/lab/Autocomplete'
import SignatureCanvas from 'react-signature-canvas'

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
          name={props.name}
          label={props.title}
          variant='outlined'
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
    backgroundImage: `url(${Images.Meeting})`,
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
  fieldfull: {
    width: '100%',
    marginTop: 20
  },
  fieldsig: {
    height: 400,
    width: '100%'
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
}))

function Meeting () {
  const classes = useStyles()

  const [value, setValue] = React.useState('official')
  const [official, setOfficial] = React.useState(true)

  const handleChange = event => {
    setValue(event.target.value)
    if (event.target.value === 'personal') {
      setOfficial(false)
    } else {
      setOfficial(true)
    }
  }
  const formSubmit = (event)=>{
    event.preventDefault();
    const form = event.target.elements;
    var formdata = {};
    formdata.Sreason = value;
    for(let d in form){
      formdata[form[d].name] = form[d].value;
    }
    Object.keys(formdata).forEach((key) => (formdata[key] == null) && delete formdata[key]);
    console.log(formdata);

    // for (let name of data.keys()) {
    //   const input = form.elements[name];
    //   const parserName = input.dataset.parse;

    //   if (parserName) {
    //     const parser = inputParsers[parserName];
    //     const parsedValue = parser(data.get(name));
    //     data.set(name, parsedValue);
    //   }
    // }
  }
  React.useEffect(() => {})
  return (
    <div className={classes.root}>
      <div className={classes.Sroot}>
      <form style={{width: '100%', height:"100%"}} onSubmit={formSubmit}>
        <Grid container xs={10}>
       
          <Grid item spacing={2} item lg={6} md={6} sm={12} xs={12}>
            <Paper elevation={3} className={classes.pap}>
              <Grid container alignItems='center' spacing={1}>
                <Grid item xs={12}>
                  <Typography variant='h6' className={classes.title}>
                    Your reason for visiting
                  </Typography>
                  <FormControl
                    component='fieldset'
                    className={classes.formControl}
                  >
                    <RadioGroup
                      aria-label='gender'
                      name='reason'
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value='official'
                        control={<Radio />}
                        label='Official'
                      />
                      <FormControlLabel
                        value='personal'
                        control={<Radio />}
                        label='Personal'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ComboBox name='Pdepartment' width='100%' title="Person's department" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ComboBox name='Pname'  width='100%' title="Person's name" />
                </Grid>

                {!official ? null : (
                  <Slide
                    direction='left'
                    in={official}
                    mountOnEnter
                    unmountOnExit
                  >
                    <Grid xs={12} sm={12} md={12} lg={12}>
                      <TextField
                        className={classes.fieldfull}
                        id='outlined-basic'
                        name='Companyname'
                        label='Company name'
                        variant='outlined'
                      />
                    </Grid>
                  </Slide>
                )}
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.field}
                    id='outlined-basic'
                    name="lastName"
                    label='Last name'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.field}
                    id='outlined-basic'
                    label='First name'
                    name="firstName"
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.field}
                    id='outlined-basic'
                    label='Phone Number'
                    name="phoneNumber"
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.field}
                    id='outlined-basic'
                    label='Email'
                    name="email"
                    variant='outlined'
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid spacing={2} item lg={6} md={6} sm={12} xs={12}>
            <Paper elevation={3} className={classes.pap}>
              <Grid container xs={12}>
                <Grid item xs={12} md={12}>
                  <ComboBox name="tagNumber" width='100%' title="Tag Number" />
                </Grid>
                <Grid
                 
                  item
                  xs={12}
                  md={12}
                >
                <Typography variant="h6">
                  Please sign below
                </Typography>
                  <SignatureCanvas
                    penColor='blue'
                    canvasProps={{
                      width: 500,
                      height: 350,
                      className: 'sigCanvas'
                    }}
                  />
                </Grid>
              </Grid>
              <Grid style={{display: 'flex', justifyContent: 'flex-end'}} container xs={12} >
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

export default Meeting
