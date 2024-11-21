import "../scss/App.scss";
import countriesData from "../services/data.json";
import ListCountries from "./ListCountries";
import Filters from "./Filters";
import { useState } from "react";

function App() {
    const [filterName, setFilterName] = useState("");
    const [filterContinent, setFilterContinent] = useState("All");

    const changeName = (valueInput) => {
        setFilterName(valueInput);//guardo el valor del input en la variable de estado
    }

    const changeContinent = (valueContinent) => {
        setFilterContinent(valueContinent);
    }



    const filteredCountries = countriesData.filter((country) => {
        return country.name.common.toLowerCase().includes(filterName.toLowerCase());
    })

    const filteredCountriesByContinent = filteredCountries.filter((country) => { return country.continents[0] === filterContinent;
    })

    return (
        <>
        <header>
            <h1>Country Info App</h1>   
        </header>
        <main>
            <Filters onChangeName={changeName} onChangeContinent={changeContinent}/>
            <ListCountries countriesList={filteredCountriesByContinent} />
        </main>
       
        </>
      
    )
}

export default App
