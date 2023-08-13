import styles from './ContactList.module.css';

import { selectFilteredContacts } from 'redux/filter/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/actions';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const handleRemoveContact = id => dispatch(removeContact(id));

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <li className={styles.item} key={id}>
            <span className={styles.name}>{name}:</span>&nbsp;
            <div>
              <span className={styles['phone-number']}>{phone}</span>
              <button
                className={styles.btn}
                onClick={() => handleRemoveContact(id)}
              ></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
