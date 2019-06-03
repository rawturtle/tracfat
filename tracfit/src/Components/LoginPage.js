import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Login from './Login'
import Register from './Register'
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2)]: {
        width: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
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

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  // this.tokenChange = this.tokenChange.bind(this);
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <AppBar position="static">
          <Tabs 
            value={value} 
            onChange={this.handleChange}
            indicatorColor="primary"
            centered
            >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </AppBar>
            {value === 0 && <Login tokenChange={this.props.tokenChange}/>}
            {value === 1 && <Register/>}
        </Paper>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);