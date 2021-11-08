import React from 'react'

export default function InputSearch({handleChange}) {
    return (
        <div className="input-group rounded">
            <input onChange={handleChange} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon"> <i className="fas fa-search"></i></span>
        </div>
    )
}
