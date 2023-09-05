import axios from "axios"

const CONTACT_URL = 'http://localhost:3001/api/contacts'

export const getContacts = () => {
    return axios
      .get(CONTACT_URL)
      .then(({ data }) => data)
      .catch(err => err)
}

export const addContact = (contact) => {
    return axios
      .post(CONTACT_URL, contact)
      .then(({ data }) => data)
      .catch(err => err)
}