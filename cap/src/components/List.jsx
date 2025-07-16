import React, { useState, useEffect } from 'react';
import './List.css';
import getAllBreweries from '../functions/search_all.js';

function List() {
    // const [breweriesLength, setBreweriesLength] = useState(0);
    const [allBreweries, setAllBreweries] = useState([]);

    useEffect(() => {
      getAllBreweries().then(breweries => {
        setAllBreweries(breweries);
        // setBreweriesLength(breweries.length);
        console.log(`Total breweries: ${breweries.length}`);
      });
    }, []);

    return (
        <div className='list-container'>
            <table className='brewery-list'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {allBreweries.slice(0,20).map((brewery) => (
                        <tr key={brewery.id}>
                            <td>{brewery.name}</td>
                            <td>{brewery.brewery_type}</td>
                            <td>{brewery.city}</td>
                            <td>{brewery.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;