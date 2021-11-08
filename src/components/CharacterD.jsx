import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';
// import Cards from './Cards';
import './CharacterD.css'

const CharacterD = () => {
    const [charactersD, setCharacters] = useState([]);
     
    const getElements = async () => {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const characters = await data.json();
      // console.log(characters.results)
      setCharacters(characters.results)
    }
    
    useEffect(() => {
        getElements()
    }, [])
    

    return (
        <>
        <section className='containerSort'>
          <Form.Select className="sortList" >
            <option defaultValue>SORT</option>
            <option value="A-Z">Sort from A-Z</option>
            <option value="Z-A">Sort from Z-A</option>
          </Form.Select>
        </section>
        <section className='containerD'>
          { charactersD.map(characterD=>(
            <section className= 'cardsCharacterD' key={characterD.id}>
              <section>                   
                <img className='charactersImageD'src={characterD.image} alt='imageCharacter' />
              </section>
              <section>
                <p>{characterD.name}</p>
                <p>{characterD.status}</p>
                <p>{characterD.species}</p>
              </section>
            </section>  
            ))}
        </section>
        </>
    )
}

export {CharacterD};