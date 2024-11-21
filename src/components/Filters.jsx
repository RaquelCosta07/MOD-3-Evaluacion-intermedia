

function Filters({onChangeName, onChangeContinent}) {

const handleChange= (ev) => {
    const name = ev.target.value;
    onChangeName(name);
}

const handleChangeContinent = (event) => {
  onChangeContinent(event.target.value);

}

  return (
    <form>
        <label htmlFor="Search">Search: </label>
        <input id="Search" type="text" onChange={handleChange} />
        <label htmlFor="Bycontinent">By continent</label>
        <select name="" id="Bycontinent" onChange={handleChangeContinent}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
    </form>
  )
}

export default Filters