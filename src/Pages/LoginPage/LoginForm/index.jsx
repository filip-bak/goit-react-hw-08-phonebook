import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Logo from 'components/Logo';
import PaperBox from 'components/PaperBox';

import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/actions';

import { Typography } from '@mui/material';
import { useAuthUser } from 'hooks/useAuthUser';
import { useEffect } from 'react';
import { resetError } from 'redux/auth/slice';
import loginStyles from './styles';

const LoginForm = () => {
  const dispatch = useDispatch();

  const { isError } = useAuthUser();

  const isLoginError = isError === 'loginError';

  useEffect(() => {
    if (isLoginError) {
      return () => {
        dispatch(resetError());
      };
    }
  }, [isLoginError, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    const loginData = {
      email: email.value,
      password: password.value,
    };

    dispatch(login(loginData));

    e.target.reset();
  };

  return (
    <Box component={'form'} autoComplete="off" onSubmit={handleSubmit}>
      <PaperBox>
        <Logo />
        <TextField
          sx={loginStyles.input}
          name="email"
          type="email"
          label="Email"
          variant="standard"
          required
        />
        <TextField
          sx={loginStyles.input}
          label="Password"
          name="password"
          variant="standard"
          type="password"
          required
        />
        {isLoginError && (
          <Typography paragraph mb={0} align="center" color="error">
            Incorrect password or email.
          </Typography>
        )}
        <Button
          type="submit"
          sx={[!isLoginError && loginStyles.btn]}
          size="large"
          variant="contained"
          disableElevation
        >
          Login
        </Button>
      </PaperBox>
    </Box>
  );
};

export default LoginForm;
