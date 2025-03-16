import React from 'react';
import css from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      {contact.name}: {contact.number}
      <button onClick={() => onDeleteContact(contact.id)} className={css.deleteButton}>Delete</button>
    </li>
  );
};

export default Contact;