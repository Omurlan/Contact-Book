import React, { useContext, useEffect, useState } from 'react';
import { ContactsContext } from '../Context/ContactsContext';
import { Link } from 'react-router-dom'
const EditContact = (props) => {
    const { contactEdit, saveContact } = useContext(ContactsContext)
    const [newEditItem, setNewEditItem] = useState(contactEdit)

    useEffect(() => {
        setNewEditItem(contactEdit)
    }, [contactEdit])

    return (
        <div>
            {newEditItem ?
                <>
                    <input type="text" onChange={(e) => {
                        let newContact = { ...newEditItem }
                        newContact.name = e.target.value
                        setNewEditItem(newContact)
                    }}
                        value={newEditItem.name}
                    />
                    <input type="text" onChange={(e) => {
                        let newContact = { ...newEditItem }
                        newContact.surname = e.target.value
                        setNewEditItem(newContact)
                    }}
                        value={newEditItem.surname}
                    />
                    <input type="text" onChange={(e) => {
                        let newContact = { ...newEditItem }
                        newContact.number = e.target.value
                        setNewEditItem(newContact)
                    }}
                        value={newEditItem.number}
                    />

                    <Link to="/">
                        <button onClick={() => saveContact(newEditItem, props.history)}>Save</button>
                    </Link>
                </>
                :
                <h1>Loading ...</h1>
            }
        </div>
    );
};

export default EditContact;