import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import getAllBreweries from './functions/search_all.js'
import groupBy from './functions/groupBy.js'

function App() {

  const [breweriesLength, setBreweriesLength] = useState(0);
  const [allBreweries, setAllBreweries] = useState([]);

  useEffect(() => {
    getAllBreweries().then(breweries => {
      setAllBreweries(breweries);
      setBreweriesLength(breweries.length);
      console.log(`Total breweries: ${breweries.length}`);
    });
  }, []);

  const breweriesByName = groupBy(allBreweries, 'name');
  let mostCommonName = '';
  let maxCount = 0;
  for (const [name, breweries] of Object.entries(breweriesByName)) {
    if (breweries.length > maxCount) {
      mostCommonName = name;
      maxCount = breweries.length;
    }
  }


  return (
    <div className="background-wrapper">
      <Header/>
      <div className='card-grid'>
        <Card
          cardAttribute='Total Breweries in the U.S'
          data={breweriesLength}
        />
          <Card
            cardAttribute='Brewery with Most Locations'
            data={mostCommonName}
          />
        <Card
          cardAttribute='Average Breweries per State'
          data={Math.floor(breweriesLength / 50)}
        />
      </div>
    </div>
  )
}

export default App
