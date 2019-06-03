import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
});

class Logout extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Logged Out Successfully
            </Typography>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

Logout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logout);