import React, { useContext, useEffect} from 'react';
import { ContactsContext } from '../../Context/ContactsContext';
import { Link } from 'react-router-dom'
const Details = () => {
    const { contactDetails, getContactDetail} = useContext(ContactsContext)

    useEffect(() => {
        getContactDetail()
        
    }, [contactDetails])

    return (
        <div>
                <ul>
                    <li>{contactDetails.name}</li>
                    <li>{contactDetails.surname}</li>
                    <li>{contactDetails.number}</li>
                    <Link to="/">
                    <button>Back</button>
                    </Link>
                </ul>
        </div>
    );
};

export default Details;