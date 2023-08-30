import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './RegisterForm.module.css';
import { register } from 'redux/auth/actions';

export function checkIfEmpty(...data) {
  return data.every(el => el === '');
}

const RegisterForm = props => {
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const submitBtn = useRef();

  const error = type => {
    const obj = {
      length: 'Password must be longer than 7 characters.',
      confirm: "Password didn't match",
    };
    return obj[type];
  };

  const handleSubmit = e => {
    const { fullName, email, password, confirmPassword } = e.target.elements;
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
      setMessage(error('confirm'));
      return;
    }
    if (password.value.length <= 7) {
      setMessage(error('length'));
      return;
    } else {
      setMessage('');
    }
    if (checkIfEmpty(fullName, email, password, confirmPassword)) {
      return;
    }
    const registerData = {
      name: fullName.value,
      email: email.value,
      password: password.value,
    };
    console.log(registerData);
    dispatch(register(registerData));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <label className={styles.label}>
        Imie i Nazwisko
        <input className={styles.input} name="fullName" type="text" />
      </label>
      <label className={styles.label}>
        Email
        <input className={styles.input} name="email" type="email" />
      </label>
      <label className={styles.label}>
        Password
        <input className={styles.input} name="password" type="password" />
        {message ? <p className={styles.error}>{message}</p> : null}
      </label>
      <label className={styles.label}>
        Confirm Password
        <input
          className={styles.input}
          name="confirmPassword"
          type="password"
        />
        {message ? <p className={styles.error}>{message}</p> : null}
      </label>

      <button ref={submitBtn} className={styles.btn} type="submit">
        Register
      </button>
    </form>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
