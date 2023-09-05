export const FilterContact = ({filter, handleFilter}) => {
  return (
    <section>
      <h1>Filtrar contactos</h1>
      <label>
        Nombre: <br />
        <input
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </section>
  )
}
