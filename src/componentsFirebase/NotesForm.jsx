import React from 'react'
import { useForm } from 'react-hook-form'
import '../index.css'

export default function NotesForm({addOrEditNote}) {

    const {register, formState: { errors } , handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
        addOrEditNote(data);
    }

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
             <label className='mb-2' htmlFor="title">Title</label>
                <input
                    placeholder="Write a title"
                    className="form-control mb-4"
                    name="title"
                    {...register('title', {
                        required: {
                            value: true, 
                            message: 'Title is required'
                            }, 
                        maxLength: {
                            value: 20, 
                            message: 'No  more than 25 characters!'
                            },
                        minLength: {
                            value: 2, 
                            message: 'Minimun 2 characters'
                            }
                    })}
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.title && errors.title.message}
                </span>
            <label className='mb-2' htmlFor="description">Description</label>
                <textarea
                    placeholder="Write a description"
                    className="form-control mb-2"
                    name="description"
                    {...register('description', {
                        required: {
                            value: true, 
                            message: 'Description is required'
                            }, 
                        minLength: {
                            value: 2, 
                            message: 'Minimun 2 characters'
                            }
                    })}
                ></textarea>
                <span className="text-danger text-small d-block mb-2">
                    {errors.description && errors.description.message}
                </span>
                <button type="submit" className="btn color mt-4">
                    Save
                </button>
            </form>
        </div>
    )
}
