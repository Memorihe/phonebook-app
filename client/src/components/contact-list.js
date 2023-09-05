export const ListContacts = ({contacts}) => {
    return (
      <section>
        <h1>Lista de contactos</h1>
          <ul className='contacts'>
            {contacts.map((contact) => {
              return (
                <li key={contact.id}>
                  {contact.name} <br /> {contact.number}
                </li>
              )
            })}
          </ul>
      </section>
    )
  }