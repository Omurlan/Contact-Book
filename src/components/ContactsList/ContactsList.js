import React, { useContext, useEffect } from 'react';
import { ContactsContext } from '../../Context/ContactsContext';
import { Link } from 'react-router-dom'


const ContactsList = () => {
    const { contacts, getContactsData, delItem, changeStatus, editContact, getContactDetail } = useContext(ContactsContext);
    // const abc = []
    useEffect(() => {
        getContactsData()
    }, [])

    return (
        <ul>

            {contacts.map(item => (
                <li key={item.id} className={item.status ? "completed" : ''}>
                    <button onClick={() => delItem(item.id)}>Delete</button>
                    <Link to="/edit">
                        <button onClick={() => editContact(item.id)}>Edit</button>
                    </Link>
                    <Link to="/details">
                        <button onClick={() => getContactDetail(item.id)}>Details</button>
                    </Link>
                    <input
                        type="checkbox"
                        checked={item.status}
                        onChange={() => changeStatus(item.id)}
                    />
                    
                        {item.name} {item.surname} {item.number}
                </li>

            ))}
        </ul>
    );
};

export default ContactsList;