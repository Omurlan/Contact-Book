import React, { useContext, useState } from 'react';
import { ContactsContext } from '../../Context/ContactsContext';
import { Link } from 'react-router-dom'
const AddContact = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');

    const { addContact } = useContext(ContactsContext)

    function handleClick() {
        if (!name.trim() || !surname.trim() || !number.trim()) {
            alert('Заполните все пустые поля')
            return
        }

        let newObj = {
            name: name,
            surname: surname,
            number: number,
            status: false
        }
        addContact(newObj)
        setName('')
        setSurname('')
        setNumber('')
    }
    <Link to="/list">List</Link>
    return (
        <div>

            <h1>Add Contact</h1>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="name"
            />
            <input
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                placeholder="surname"
            />
            <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="text"
                placeholder="number"
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddContact;