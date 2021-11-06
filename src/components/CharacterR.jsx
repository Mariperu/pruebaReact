import React, { useEffect, useState} from 'react'
import ContainerCharactersR from './ContainerCharactersR';
import PaginationCharactersR from './PaginationCharactersR';
import InputSearch from './InputSearch';

const CharacterR = () => {
    
    const [characters, setCharacters] = useState([])

    const [cards, setCards] = useState([])

    const [info, setInfo] = useState({})

    const [search, setSearch] = useState('')

    const initialUrl = 'https://rickandmortyapi.com/api/character';

    const fetchCharacters = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
               setCharacters(data.results);
               setCards(data.results);
               setInfo(data.info);
            } )
            .catch((error) => console.log(error)) 
    }

    const onPrevious = () => {
        fetchCharacters(info.prev)
    }

    const onNext = () => {
        fetchCharacters(info.next)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
        console.info(search)
        filterCharacters(e.target.value)
    }

    const filterCharacters = (word) => {
        const result = cards.filter((item) => {
            const characterFiltered = item.name.toString().toLowerCase().includes((word).toLowerCase())
                return characterFiltered;
        })
        setCharacters(result)
    }

    useEffect(() => {
        fetchCharacters(initialUrl);
    }, [])

    return (
        <div className='container'>
            <p>Roxana</p>
            <InputSearch handleChange={handleChange}/>
            <PaginationCharactersR prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
            <ContainerCharactersR characters={characters} />
        </div>
    )
}

export {CharacterR};