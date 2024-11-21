//necesita acceder a la info del objecto


function Country({countryData}) {
  return (
    <li>
        <p>{countryData.flag} </p>
        <h3>{countryData.name.common}</h3>
        <p>{countryData.capital[0]}</p>
        <p>{countryData.continents[0]}</p>
    </li>
  )
}

export default Country