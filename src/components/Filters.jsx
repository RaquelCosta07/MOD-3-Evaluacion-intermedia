

function Filters() {

const handleChange= (ev) => {
    console.log(ev.target.value)
}

  return (
    <form>
        <label htmlFor="Search">Search: </label>
        <input id="Search" type="text" onChange={handleChange} />
    </form>
  )
}

export default Filters