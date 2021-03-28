import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import miriAvatar from "../../assets/img/miri_avatar.png";
import {ThemeProvider} from '@material-ui/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {Box} from "@material-ui/core";
import api from "../../api";
import store from "../../store";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  login = async () => {
    // TODO: 윤병, email, password 유효성 검사
    const response = await api.post('/login', {email: this.state.email, password: this.state.password});
    if (response.data.result !== 'SUCCESS') alert('땡');
    store.dispatch({type: 'AUTHENTICATION', memberId: response.data.memberId});
    this.props.history.push('/');
  }

  useMuiTheme() {
    return createMuiTheme({
      palette: {
        primary: {
          main: '#22CC88'
        }
      }
    });
  };

  useStyles() {
    return makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        color: theme.palette.primary.main
      },
    }));
  }

  render() {

    const classes = this.useStyles();
    const buttonTheme = this.useMuiTheme();

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box className={classes.paper} mt={10}>
          <Avatar className={classes.avatar} src={miriAvatar}/>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={function (e) {
                this.setState({email: e.target.value})
              }.bind(this)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={function (e) {
                this.setState({password: e.target.value})
              }.bind(this)}
            />
            <ThemeProvider theme={buttonTheme}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.login.bind(this)}
              >
                Sign In
              </Button>
            </ThemeProvider>
          </form>
        </Box>
      </Container>
    );
  }
}

export default Login;