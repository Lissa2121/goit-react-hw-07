import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDeleteContact={() => dispatch(deleteContact(contact.id))} />
      ))}
    </ul>
  );
};

export default ContactList;
