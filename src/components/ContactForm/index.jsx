import { useState } from 'react';
import styles from './ContactForm.module.css';

import {
  selectContacts,
  selectError,
  selectisLoading,
} from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/actions';
import { Spinner } from 'components/Spinner';
import { isContactExist } from 'redux/utils/validation';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);

  const handleSubmit = e => {
    e.preventDefault();

    if (isContactExist(contacts, name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name: name, number: number }));

    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="[A-Z][a-z]+(([\`\s][A-Z][a-z]+)?){5}"
            title="Name may contain only letters, spaces. For example Adrian, Jacob Mercer, Charles De Batz De Castelmore"
            autoComplete="off"
            placeholder="Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <span className={styles.status}></span>
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
            title="Phone number must be digits and can contain spaces, dashes and can start with +"
            autoComplete="off"
            placeholder="Number"
            required
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <span className={styles.status}></span>
        </label>
        <div className="relative">
          <button className={styles.btn} type="submit">
            Add contact
          </button>
          {isLoading && !error && <Spinner color="rgb(33, 176, 243)" />}
          {error && <p className={styles.error}>Oops! Something went wrong</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
