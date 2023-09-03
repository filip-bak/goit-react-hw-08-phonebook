import { useState } from 'react';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Spinner } from 'components/Spinner';
import { useContactsState } from 'hooks/useContactsState';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/actions';
import {
  checkErrorInput,
  isContactExist,
  showValidIcon,
} from 'utils/validation';

import contactStyles from './contactStyles';
import { phoneNameFormat, phoneNumberFormat } from './formatInputs';

const errors = {
  phoneName: {
    required: 'req',
    invalid: 'Invalid Name',
  },
  phoneNumber: {
    required: 'reqq',
    invalid: 'Invalid Number',
  },
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const namePattern =
    /^[A-Z][a-z\u0100-\u017F]+(?:\s[A-Z][a-z\u0100-\u017F]+)*$/;

  const numberPattern = /^\d{3} \d{3} \d{3}$/;

  const isValidName = namePattern.test(name);
  const isValidNumber = numberPattern.test(number);

  const { contacts, isLoading, error } = useContactsState();

  const handleNumberChange = e => {
    const formattedNumber = phoneNumberFormat(e.target.value);
    setNumber(formattedNumber);
  };

  const handleNameChange = e => {
    const formattedName = phoneNameFormat(e.target.value);
    setName(formattedName);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrorMessage('');
    if (!isValidName) {
      if (name === '') {
        setErrorMessage(errors.phoneName.required);
        return;
      }
      setErrorMessage(errors.phoneName.invalid);
      return;
    }
    if (!isValidNumber) {
      if (number === '') {
        setErrorMessage(errors.phoneNumber.required);
        return;
      }
      setErrorMessage(errors.phoneNumber.invalid);
      return;
    }

    if (isContactExist(contacts, name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name: name, number: number }));

    setName('');
    setNumber('');
  };

  return (
    <Paper
      component={'form'}
      sx={{ p: 3, position: 'relative' }}
      variant="elevation"
      elevation={2}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      <Stack gap={3}>
        <TextField
          id="tel-name"
          size="small"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          InputProps={{
            endAdornment: showValidIcon({
              validPattern: isValidName,
              inputValue: name,
            }),
          }}
        />
        <TextField
          id="tel-number"
          size="small"
          label="Number"
          variant="outlined"
          type="text"
          name="number"
          value={number}
          onChange={handleNumberChange}
          error={checkErrorInput(errorMessage, errors.phoneNumber)}
          helperText={
            checkErrorInput(errorMessage, errors.phoneNumber) && errorMessage
          }
          FormHelperTextProps={{
            sx: contactStyles.helperText,
          }}
          InputProps={{
            endAdornment: showValidIcon({
              validPattern: isValidNumber,
              inputValue: number,
            }),
          }}
          inputProps={{
            maxLength: 11,
            inputMode: 'numeric',
          }}
        />
        <div className="relative">
          <Button variant="outlined" size="small" type="submit">
            Add contact
          </Button>
          {isLoading && !error && (
            <Spinner mqRight={'-8px'} right={'1%'} top={'55%'} />
          )}
          {error && (
            <Typography paragraph mt={2} mb={0} color={'error'}>
              Oops! Something went wrong
            </Typography>
          )}
        </div>
      </Stack>
    </Paper>
  );
};

export default ContactForm;
