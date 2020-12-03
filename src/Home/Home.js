import React from 'react';
import AddContact from '../components/AddContact/AddContact';
import ContactsList from '../components/ContactsList/ContactsList';


const Home = () => {
    return (
        <div>
            <AddContact />
            <ContactsList/>
        </div>
    );
};

export default Home;