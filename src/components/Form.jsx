import React, { useRef } from 'react'

function Form() {

    const name = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name.current);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='d-flex'>
                <input type="text" name="firstName" className='form-control' ref={name} />
                <input type="submit" value="Submit" className='ms-2 btn btn-success' />
            </form>
        </>
    )
}

export default Form
