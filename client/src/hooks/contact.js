import { useEffect, useState } from 'react'
import { addContact, getContacts } from '../controllers/contact.js'

export const useContact = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')
  const [newContact, setnewContact] = useState({
    name: '',
    number: '',
    message: '',
    color: ''
  })

  const filteredContacts =
    filter !== ''
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts

  useEffect(() => {
    getContacts().then((res) => setContacts(res))
  }, [])

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const handleNewContact = (e) => {
    setnewContact({ ...newContact, [e.target.name]: e.target.value })
  }

  const saveContact = (e) => {
    e.preventDefault()
    if (newContact.name.length < 4)
      return setnewContact({
        ...newContact,
        message: 'El nombre debe tener una longitud mínimo de 3',
        color: 'red'
      })
    if (newContact.number.length < 7)
      return setnewContact({
        ...newContact,
        message: 'El número télefonico debe tener una longitud mínimo de 7',
        color: 'red'
      })

    addContact(newContact)
      .then((res) => setContacts(contacts.concat(res)))
      .then(
        setnewContact({
          name: '',
          number: '',
          message: 'El contacto ha sido guardado con éxito',
          color: 'green'
        })
      )
  }

  return {
    filter,
    newContact,
    filteredContacts,
    handleFilter,
    handleNewContact,
    saveContact
  }
}
