import React from 'react'
// import { Row } from 'react-bootstrap'

export default function Cards(characterD, cardsRM, setCardsRM) {
    const {id, name, status, species, image} = characterD
    return (
        <>
          <section key={id}>
              <section>                   
                <img alt='imageCharacter'>{image}</img>
              </section>
              <section>
                <p>{name}</p>
                <p>{status}</p>
                <p>{species}</p>
              </section>
          </section>  
        </>
    )
}
