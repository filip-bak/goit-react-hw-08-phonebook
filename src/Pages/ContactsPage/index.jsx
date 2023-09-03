import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Logo from 'components/Logo';
import PaperBox from 'components/PaperBox';
import Section from 'components/Section';
import { useAuthUser } from 'hooks/useAuthUser';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/actions';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const { isLogged } = useAuthUser();

  useEffect(() => {
    if (isLogged) dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PaperBox>
      <Logo />
      <ContactForm />

      <Section title="Contacts">
        <Filter />

        <ContactList />
      </Section>
    </PaperBox>
  );
};

export default ContactsPage;
