import "../scss/App.scss";
import countriesData from "../services/data.json";
import ListCountries from "./ListCountries";
import Filters from "./Filters";

function App() {

    return (
        <>
        <header>
            <h1>Country Info App</h1>   
        </header>
        <main>
            <Filters />
            <ListCountries countriesList={countriesData} />
        </main>
       
        </>
      
    )
}

export default App
