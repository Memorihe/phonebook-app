import './App.css'
import { NewContact } from './components/contact-add'
import { FilterContact } from './components/contact-filter'
import { ListContacts } from './components/contact-list'
import { useContact } from './hooks/contact'

function App() {
  const {
    filter,
    newContact,
    filteredContacts,
    handleFilter,
    handleNewContact,
    saveContact
  } = useContact()

  return (
    <div className='main'>
      <section className='align-left'>
        <FilterContact filter={filter} handleFilter={handleFilter} />
        
        <NewContact newContact={newContact} handleNewContact={handleNewContact} saveContact={saveContact}/>
      </section>
      <section className='align-rigth'>
        <ListContacts contacts={filteredContacts} />
      </section>
    </div>
  )
}

export default App
