import React from 'react'

export default function PageLocationM({prev,next, onPrevious, onNext}) {
    console.log(prev,next)
    const pagePrevious =() => {

        onPrevious();
    }

    const pageNext = () => {  
        onNext();
}
    return (
        <nav>
        <ul className='pagination justify-content-center '>
            {
                prev ?
                <li className='page-item'>
                    <button className='page-link' onClick={pagePrevious}>Previous</button>
                </li>
                :
                null
            }
            {
                next ?
                <li className='page-item'>
                    <button className='page-link ' onClick={pageNext}>Next</button>
                </li>
                :
                null
            }
            
        </ul>
    </nav>
   )   
}











