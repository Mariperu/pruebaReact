import React from 'react'
import Modal from './Modal'

export default function Notes({notes, deleteNote}) {
    return (
        <>
        {
            notes.map((note) => (
                <div key={note.id} className="card w-100 mb-4">
                    <div  className="card-body">
                        <div className='d-flex justify-content-between'>
                            <h5 className="card-title">{note.title}</h5>
                            <p data-bs-toggle="modal" data-bs-target={`#id${note.id}`} style={{cursor: 'pointer'}} className='text-danger'>X</p>
                        </div>
                        <p className="card-text">{note.description}</p>
                        <div className='d-flex justify-content-end'>
                            <button type='button' className='btn btn-primary mt-4'>Edit</button>
                        </div>
                    </div>
                    <Modal deleteNote={() => deleteNote(note.id)} id={`id${note.id}`} title='Delete note' content={`Are you sure you want to delete the note ${note.title}?`} />
                </div>
            ))
        }
        
        </>
    )
}
