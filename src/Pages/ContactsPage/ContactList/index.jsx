import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/actions';
import { selectFilteredContacts } from 'redux/filter/selectors';

import BookmarkRemoveRoundedIcon from '@mui/icons-material/BookmarkRemoveRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  const handleRemoveContact = id => dispatch(removeContact(id));

  return (
    <List dense={true}>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          sx={{ gap: 2 }}
          divider={true}
          secondaryAction={
            <IconButton
              onClick={() => handleRemoveContact(id)}
              edge="end"
              aria-label="delete"
            >
              <BookmarkRemoveRoundedIcon color="error" />
            </IconButton>
          }
        >
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <LocalPhoneRoundedIcon color="info" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: ['1rem', '1.2rem'] }}
            primary={name}
            secondary={number}
            secondaryTypographyProps={{ fontSize: ['0.9rem', '1rem'] }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
