import React, {useState} from 'react'

export default function AddProductD({addOrEdit}) {

    const [values, setValues]=useState([])
    
    const handleInput =(e)=>{
        const{name, value}= e.target;
        setValues({...values,[name]: value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values)
        addOrEdit(values)
    }


    return (
        <div>
            <form className='card card-body' onSubmit={handleSubmit}>
                <div className='form-group input-group'>
                    <div className='input-group-text bg-light'>
                        <i className='material-icons'>Create</i>
                    </div>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Name Product'
                        onChange={handleInput}>
                    </input>
                </div>
                <div className='form-group'>
                    <textarea
                    className='form-control' 
                    placeholder='Write a description'
                    name="description" 
                    id="description" 
                    rows="3"
                    onChange={handleInput}
                    >
                    </textarea>
                </div>
                <button className='btn btn-primary btn-block'>
                    Save
                </button>
            </form>
            
        </div>
    )
}
