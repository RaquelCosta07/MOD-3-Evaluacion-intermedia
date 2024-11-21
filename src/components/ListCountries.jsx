import Country from "./Country"
//implementar la logica para pintar todas las imagenes

function ListCountries({countriesList}) {
    // console.log(countriesList);

    const countryItems = countriesList.map((countryItem) => {
        // console.log(countryItem);
        return <Country countryData={countryItem} key={countryItem.name.common} />
        
    })
   

  return (
    <section>
        <ul>
            {countryItems}
        </ul>
    </section>
  )
}

export default ListCountries
