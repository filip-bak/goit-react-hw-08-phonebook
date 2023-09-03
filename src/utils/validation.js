import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';

// Contact
export const isContactExist = (contacts, currentContactName) => {
  if (!contacts || !currentContactName) {
    throw new Error("Both 'contacts' and 'currentContactName' are required.");
  }

  return contacts.some(contact => contact.name === currentContactName);
};

export function showValidIcon({ validPattern, inputValue }) {
  const chooseIcon = validPattern ? (
    <CheckRoundedIcon color="primary" fontSize="small" />
  ) : (
    <PriorityHighRoundedIcon
      sx={[inputValue === '' && { color: 'transparent' }]}
      color="warning"
      fontSize="small"
    />
  );
  return chooseIcon;
}

// Contact register
export function checkErrorInput(errorMessage, inputError) {
  if (Object.values(inputError).includes(errorMessage)) {
    return true;
  } else {
    return false;
  }
}
