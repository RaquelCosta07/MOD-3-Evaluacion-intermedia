//necesita acceder a la info del objecto


function Country({countryData}) {
  return (
    <li>
        <img src={countryData.flag} alt={countryData.name.common + " flag"} />
        <h3>{countryData.name.common}</h3>
        <p>{countryData.capital}</p>
        <p>{countryData.continents}</p>
    </li>
  )
}

export default Country