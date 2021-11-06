import React from 'react'

export default function ContainerCharactersR({characters}) {
    return (
        <div className='row'>
            {characters.map((item, index) => (
                <div key={index} className='col'>
                    <div className='card mb-5' style={{maxWidth :'334px'}}>
                        <img src={item.image} alt="character" />
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <hr />
                            <p>Status: {item.status}</p>
                            <p>Specie: {item.species}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
