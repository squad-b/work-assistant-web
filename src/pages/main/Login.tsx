// import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {Box, createTheme} from "@material-ui/core";
import React, { FC, useState } from "react";
import {ThemeProvider, createStyles} from '@material-ui/styles';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import api from "../../api";
import makeStyles from "@material-ui/core/styles/makeStyles";
import miriAvatar from "../../assets/img/miri_avatar.png";
import store from "../../store";

const Login:FC<any>=(props:any)=>{

  const [state, setstate] = useState<any>({
    email: '',
    password: ''
  })
 
  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: 윤병, email, password 유효성 검사
    e.preventDefault();
    const response = await api.post('/login', {email:state.email, password: state.password});
    if (response.data.result !== 'SUCCESS') {
      alert('땡');
      return;
    }
    store.dispatch({
      type: 'AUTHENTICATION',
      memberId: response.data.loginMember.id,
      memberType: response.data.loginMember.type
    });
    props.history.push('/');
  }

  const useStyles=()=>{
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
        color: 'white'
      },
    }));
  }

  const classes = useStyles();

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box className={classes(props.theme).paper} mt={10}>
          <Avatar className={classes(props.theme).avatar} src={miriAvatar}/>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes(props.theme).form} noValidate>
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
              onChange={(e:any)=>{
                setstate({
                  ...state,
                  email: e.target.value
                })
              }}
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
              onChange={(e:any)=>{
                setstate({
                  ...state,
                  password: e.target.value
                })
              }}
            />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes(props.theme).submit}
                onClick={login}
              >
                Sign In
              </Button>
          </form>
        </Box>
      </Container>
    );
}

export default Login;