import React, {useEffect, useState} from "react";
import ContainerLocation from "./ContainerLocation";

const LocationC = () => {
    const [locations, setLocations] = useState([]);

    const initialurl = "https://rickandmortyapi.com/api/location";

    const fetchLocation = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(data => setLocations(data.results))
        .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchLocation(initialurl);
    }, [])

    return (
        <div>
            <p>Cathy</p>
            <ContainerLocation locations = {locations}/>
        </div>
        
    )
}

export {LocationC};