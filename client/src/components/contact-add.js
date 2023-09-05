export const NewContact = ({saveContact, newContact, handleNewContact}) => {
    return (
      <section>
        <h1>Agregar contacto</h1>
          <form
            className='form'
            onSubmit={saveContact}
          >
            <label>
              Nombre: <br />
              <input
                name='name'
                value={newContact.name}
                onChange={handleNewContact}
              />
            </label>
            <label>
              Número: <br />
              <input
                name='number'
                value={newContact.number}
                onChange={handleNewContact}
              />
            </label>
            <button type='submit'>Guardar</button>
            <label className={newContact.color}>{newContact.message}</label>
          </form>
      </section>
    )
  }