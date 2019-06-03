import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.tokenChange = this.tokenChange.bind(this);
  }

  handleChange = value => { 
    if (value === 'Login' && this.props.token) {
      // unset access token
      localStorage.removeItem('accessToken')
      this.props.tokenChange(null)
      this.props.onChange('Logout')
    } else {
      this.props.onChange(value)
    }
  };
  
  render() {
    const { classes, token } = this.props;
    console.log(token)
    return (
      <div className={classes.root}>
          <AppBar position="static">
              <Toolbar title="TracFit">
                  <img src={require("../images/tracfit.png")} alt="TRACFIT" />
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                  {/* words in the middle of the screen */}
                  </Typography>
                  <Button 
                      color="inherit"
                      onClick={() =>this.handleChange('Workout')}
                  >
                      Workout
                  </Button>
                  <Button 
                      color="inherit"
                      onClick={() =>this.handleChange('Login')}
                  >
                      {token ? 'Logout': 'Login'}
                  </Button>                        

              </Toolbar>
          </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);