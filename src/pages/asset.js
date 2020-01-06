import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button';
import Theme from '../utils/Theme';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';

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
import PropTypes from 'prop-types';
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
      id={props.name}
      
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
    backgroundImage: `url(${Images.Asset})`,
    backgroundRepeat: 'repeat',
    padding: 40
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
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

function Asset () {
  const classes = useStyles()

  const [value, setValue] = React.useState('receiving')
  const [custody, setCustody] = React.useState('internal')
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const handleChange = (event,v,c) => {
    if(v==1)setCustody(event.target.value);
    if(v != 1)setValue(event.target.value);
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

    
  }
  React.useEffect(() => {})
  return (
    <div className={classes.root}>
      <div className={classes.Sroot}>
      <form style={{width: '100%', height:"100%"}} onSubmit={formSubmit}>
        <Grid container xs={12}>
        <Grid xs={12}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    
        </Grid>
       
          <Grid item spacing={1} item lg={4} md={6} sm={12} xs={12}>
            <Paper elevation={3} className={classes.pap}>
              <Grid container alignItems='center' >
                <Grid item xs={12}>
                  <Typography variant='h6' className={classes.title}>
                    Asset Instruction
                  </Typography>
                  <FormControl
                    component='fieldset'
                    style={{display: 'flex', flexDirection: 'row'}}
                    className={classes.formControl}
                  >
                    <RadioGroup
                      aria-label='gender'
                      name='asset'
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value='receiving'
                        control={<Radio />}
                        label='Receiving'
                      />
                      <FormControlLabel
                        value='sendingOut'
                        control={<Radio />}
                        label='Sending Out'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
               

                
               <Grid xs={12}>
               <Typography variant="h6">
                  {value==="receiving"? `Origin details`:`Sender Details`}
                </Typography>
               </Grid>
                <Grid item xs={12} sm={6}>
                  <ComboBox name='CName' width='100%' title="Company" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ComboBox name='Pdepartment'  width='100%' title="Department" />
                </Grid>
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
          <Grid spacing={1} item lg={4} md={6} sm={12} xs={12}>
            <Paper elevation={3} className={classes.pap}>
              <Grid container xs={12}>
              <Grid  item xs={12}>
                  <Typography variant='h6' className={classes.title}>
                    Custody Instruction
                  </Typography>
                  <FormControl
                    component='fieldset'
                    style={{display: 'flex', flexDirection: 'row'}}
                    className={classes.formControl}
                  >
                    <RadioGroup
                      aria-label='gender'
                      name='custody'
                      value={custody}
                      onChange={(e)=>handleChange(e,1)}
                    >
                      <FormControlLabel
                        value='internal'
                        control={<Radio />}
                        label='Internal'
                      />
                      <FormControlLabel
                        value='external'
                        control={<Radio />}
                        label='External'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Typography variant='h6' className={classes.title}>
                    Custody details
                  </Typography>
                
                {custody === "internal"?
                <Grid container xs={12}>
                  <Grid item xs={12} sm={6}>
                  <ComboBox name='custodyCName' width='100%' title="Company" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ComboBox name='custodyPdepartment'  width='100%' title="Department" />
                </Grid>
                </Grid>:
                <Grid item xs={12} sm={12}>
                  <TextField
                    className={classes.field}
                    id='outlined-basic'
                    name="custodycompanyName"
                    label='Company name'
                    variant='outlined'
                  />
                </Grid>
                }
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
          <Grid spacing={1} item lg={4} md={6} sm={12} xs={12}>
            <Paper elevation={3} className={classes.pap}>
              <Grid container xs={12}>
                <Grid item xs={12} md={12}>
                <TextField
                    className={classes.field}
                    id='outlined-basic'
                    label='Way bill'
                    name="waybill"
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                <TextField
                    className={classes.field}
                    id='outlined-basic'
                    label='Description'
                    name="description"
                    variant='outlined'
                  />
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
                      width: 300,
                      height: 300,
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



// new




const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//   },
//   button: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

function getSteps() {
  return ['Fill asset details', 'Fill custody details', 'Complete'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default Asset
