export const isContactExist = (contacts, currentContactName) => {
  if (!contacts || !currentContactName) {
    throw new Error("Both 'contacts' and 'currentContactName' are required.");
  }

  return contacts.some(contact => contact.name === currentContactName);
};
