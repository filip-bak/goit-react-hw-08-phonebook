import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/actions';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Logo from 'components/Logo';
import PaperBox from 'components/PaperBox';

import registerStyles from 'Pages/RegisterPage/RegisterForm/styles';
import { checkErrorInput } from 'utils/validation';
import errors from './errors';

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const passwordPattern = /^.{8,}$/;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const fullNamePattern = /^[A-Za-z\s]+$/;

  const handleSubmit = e => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = e.target.elements;

    const isValidFullName = fullNamePattern.test(fullName.value);
    const isValidEmail = emailPattern.test(email.value);
    const isConfirmPasswordValid = password.value === confirmPassword.value;
    const isValidPassword =
      passwordPattern.test(password.value) && isConfirmPasswordValid;

    // Form Validation
    setErrorMessage('');

    if (!isValidFullName) {
      if (fullName.value === '') {
        setErrorMessage(errors.name.required);
        return;
      }
      setErrorMessage(errors.name.invalid);
      return;
    }
    if (!isValidEmail) {
      if (email.value === '') {
        setErrorMessage(errors.email.required);
        return;
      }
      setErrorMessage(errors.email.invalid);
      return;
    }
    if (!isValidPassword) {
      if (password.value === '') {
        setErrorMessage(errors.password.required);
        return;
      }
      if (!isConfirmPasswordValid) {
        setErrorMessage(errors.password.confirm);
        return;
      }
      setErrorMessage(errors.password.length);
      return;
    }

    // Form Backend
    const registerData = {
      name: fullName.value,
      email: email.value,
      password: password.value,
    };

    dispatch(register(registerData));

    e.target.reset();
    navigate('/');
  };

  return (
    <Box
      component={'form'}
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <PaperBox>
        <Logo />
        <TextField
          sx={registerStyles.input}
          name="fullName"
          type="name"
          label="Full name"
          variant="standard"
          error={checkErrorInput(errorMessage, errors.name)}
          FormHelperTextProps={{
            sx: registerStyles.helperText,
          }}
          helperText={
            checkErrorInput(errorMessage, errors.name) && errorMessage
          }
        />
        <TextField
          sx={registerStyles.input}
          name="email"
          type="email"
          label="Email"
          variant="standard"
          error={checkErrorInput(errorMessage, errors.email)}
          FormHelperTextProps={{
            sx: registerStyles.helperText,
          }}
          helperText={
            checkErrorInput(errorMessage, errors.email) && errorMessage
          }
        />
        <TextField
          sx={registerStyles.input}
          label="Password"
          name="password"
          variant="standard"
          type="password"
          error={checkErrorInput(errorMessage, errors.password)}
          FormHelperTextProps={{
            sx: registerStyles.helperPasswordText,
          }}
          helperText={
            checkErrorInput(errorMessage, errors.password) && errorMessage
          }
        />
        <TextField
          sx={registerStyles.input}
          label="Confirm password"
          name="confirmPassword"
          variant="standard"
          type="password"
          error={checkErrorInput(errorMessage, errors.password)}
          FormHelperTextProps={{
            sx: registerStyles.helperPasswordText,
          }}
          helperText={
            checkErrorInput(errorMessage, errors.password) && errorMessage
          }
        />
        <Button
          type="submit"
          sx={registerStyles.btn}
          size="large"
          variant="contained"
          disableElevation
        >
          Register
        </Button>
      </PaperBox>
    </Box>
  );
};

export default RegisterForm;
