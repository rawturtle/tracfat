import React, { Component } from 'react';
import './App.css';
import LoginPage from './Components/LoginPage'
import NavBar from './Components/NavBar'
import Workout from './Components/Workout'
import Logout from './Components/Logout'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary:{
        main: '#2F5E75'
    },
    secondary: {
        main: '#C1D947'
    },
    type: 'light',
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Workout',
      token: '',
    };
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.handleNavChange = this.handleNavChange.bind(this);
    
  }

  componentDidMount() {
    const token =localStorage.getItem('accessToken')
    if (token) {
      this.handleTokenChange(token)
      console.log(token)
    }
  }

  handleNavChange = (value) => {
    this.setState({ route: value });
  }

  handleTokenChange = (value) => {
    this.setState({ token: value })
    this.setState({ route: 'Workout' });
  }
  
  render() {
    const {route} = this.state
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar 
            token={this.state.token} 
            tokenChange={this.handleTokenChange}
            onChange={this.handleNavChange}/>
          {route === 'Logout' && <Logout />}
          {route === 'Login' && <LoginPage  tokenChange={this.handleTokenChange}/>}
          {route === 'Workout' && <Workout token={this.state.token}/>}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
