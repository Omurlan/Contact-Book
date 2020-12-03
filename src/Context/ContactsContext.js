import React, { useReducer } from 'react';
import axios from 'axios';

export const ContactsContext = React.createContext()

const INIT_STATE = {
    contacts: [],
    contactEdit: null,
    contactDetails: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CONTACT":
            return { ...state, contacts: action.payload }
        case "EDIT_CONTACT":
            return { ...state, contactEdit: action.payload }
        case "DETAIL_CONTACT":
            return { ...state, contactDetails: action.payload }
        default: return state
    }
}

const ContactsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

   const   getContactsData = async () => {
        let { data } = await axios('http://localhost:8000/contacts')
        dispatch({
            type: "GET_CONTACT",
            payload: data
        })
    }

    const addContact = async (newContact) => {
        await axios.post('http://localhost:8000/contacts', newContact)

        getContactsData()
    }

    const changeStatus = async (id) => {
        let { data } = await axios(`http://localhost:8000/contacts/${id}`)
        await axios.patch(`http://localhost:8000/contacts/${id}`, { status: !data.status })
        getContactsData()
    }

    const delItem = async (id) => {
        let { data } = await axios(`http://localhost:8000/contacts/${id}`)
        await axios.delete(`http://localhost:8000/contacts/${id}`)
        getContactsData()
    }

    const editContact = async (id) => {
        let { data } = await axios(`http://localhost:8000/contacts/${id}`)
        console.log(id);
        dispatch({
            type: "EDIT_CONTACT",
            payload: data
        })
    }

    const saveContact = async (newContact, history) => {
        try {
            await axios.patch(`http://localhost:8000/contacts/${newContact.id}`, newContact);
            history.push('/')
        } catch (error) {
            history.push('/error')
        }
        getContactsData()
    }
    const getContactDetail = async (id) => {
        let { data } = await axios(`http://localhost:8000/contacts/${id}`)
        dispatch({
            type: "DETAIL_CONTACT",
            payload: data
        })
        
        getContactsData()
    }

    return (
        <ContactsContext.Provider value={{
            contacts: state.contacts,
            contactEdit: state.contactEdit,
            contactDetails: state.contactDetails,
            addContact,
            getContactsData,
            changeStatus,
            delItem,
            editContact,
            saveContact,
            getContactDetail
        }}>
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider