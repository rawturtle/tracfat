import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField'
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import './Workout.css';
import Paper from '@material-ui/core/Paper';
//const axios = require('axios');

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  avatar: {
    margin: theme.spacing.unit,
    marginRight: 0,
    paddingRight: 0,
    backgroundColor: theme.palette.secondary.main,
  },
  formControl: {
    flexDirection: 'row',
    // border: '1px lightGrey solid',
    // borderRadius: 5,
    margin: theme.spacing.unit,
    alignItems: 'center',
  },
  titleWrapper: {
    width: 150,
    height: 40,
    backgroundColor: '#2F5E75',
    marginLeft: -20,
    borderRadius: 5,
  },
  formTitle: {
    paddingTop: 3,
    textAlign: 'center',
    color: 'white',
  },
  textField: {
    margin: theme.spacing.unit,
    width: 100,
    height: 40,
  },
  timePicker : {
    margin: theme.spacing.unit,
    height: 40,
    width: 100,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    [theme.breakpoints.down(700)]: {
      marginTop: 1,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
});

class Workout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pushUps: 0,
      plank: 0,
      wallSit: 0,
      burpies: 0,
      run: 0,
    };
  }

  handleTimerChange = (value, id) => {
    const str = 'mm:ss';
    this.setState({
      [id]: value.format(str)
    });
  }

  handleChange = event => {
    
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  saveWorkout = (e) => {
    console.log(this.state)
    e.preventDefault()
  //   axios.post('http://localhost:5000/api/exercise', {
  //     pushUps: this.state.pushUps,
  //     plank: this.state.plank,
  //     wallSit: this.state.wallSit,
  //     burpies: this.state.burpies,
  //     run: this.state.run,
  //   })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  }

  render() {
    let blankMoment = moment().utcOffset(0);
    blankMoment.set({hour:0,minute:0,second:0,millisecond:0})
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
       
        <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h5">
            Enter Workout
                        </Typography>
          <form className={classes.form}>

            <FormControl className={classes.formControl} margin="normal" required fullWidth>
              <Avatar className={classes.avatar}>
                <FitnessCenter />
              </Avatar>
              <div className={classes.titleWrapper}>
                <Typography className={classes.formTitle} component="h4" variant="h5" align='center' >
                  Push Ups
                </Typography>
              </div>

              <TextField
                className={classes.textField}
                onChange={this.handleChange}
                id="pushUps"
                name="pushUps"
                type="number"
                variant="outlined"
                placeholder={'0'}
              />
            </FormControl>

            <FormControl className={classes.formControl} margin="normal" required fullWidth>
              <Avatar className={classes.avatar}>
                <FitnessCenter />
              </Avatar>
              <div className={classes.titleWrapper}>
                <Typography className={classes.formTitle} component="h4" variant="h5" align='center'>
                  Plank
                </Typography>
              </div>
              <TimePicker
                defaultOpenValue={blankMoment}
                placeholder={'00:00'}
                name='plank'
                id='plank'
                className={classes.timePicker}
                showHour={false}
                style={{width: 100, fontSize: 16}}
                inputReadOnly={true}
                onChange={(e) => this.handleTimerChange(e, 'plank')}
              />
            </FormControl>

            <FormControl className={classes.formControl} margin="normal" required fullWidth>
              <Avatar className={classes.avatar}>
                <FitnessCenter />
              </Avatar>
              <div className={classes.titleWrapper}>
                <Typography className={classes.formTitle} component="h4" variant="h5" align='center'>
                  Wall Sit
                </Typography>
              </div>
              <TimePicker
                defaultOpenValue={blankMoment}
                placeholder={'00:00'}
                name='wallSit'
                id='wallSit'
                className={classes.timePicker}
                showHour={false}
                inputReadOnly={true}
                style={{width: 100, fontSize: 16}}
                onChange={(e) => this.handleTimerChange(e, 'wallSit')}
              />
            </FormControl>

            <FormControl className={classes.formControl} margin="normal" required fullWidth>
              <Avatar className={classes.avatar}>
                <FitnessCenter />
              </Avatar>
              <div className={classes.titleWrapper}>
                <Typography className={classes.formTitle} component="h4" variant="h5" align='center' >
                  Burpies
                </Typography>
              </div>
              <TextField
                className={classes.textField}
                onChange={this.handleChange}
                id="burpies"
                name="burpies"
                type="number"
                placeholder={'0'}
                variant="outlined"
              />
            </FormControl>

            <FormControl className={classes.formControl} margin="normal" required fullWidth>
              <Avatar className={classes.avatar}>
                <FitnessCenter />
              </Avatar>
              <div className={classes.titleWrapper}>
                <Typography className={classes.formTitle} component="h4" variant="h5" align='center'>
                  3km Run
                </Typography>
              </div>
              <TimePicker
                defaultOpenValue={blankMoment}
                placeholder={'00:00'}
                name='run'
                id='run'
                className={classes.timePicker}
                showHour={false}
                inputReadOnly={true}
                style={{width: 100, fontSize: 16}}
                onChange={(e) => this.handleTimerChange(e, 'run')}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.saveWorkout}
            >
              Save Workout
              </Button>
          </form>
          </Paper>
        </main>
        
      </React.Fragment>
    );
  }
}

Workout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Workout);