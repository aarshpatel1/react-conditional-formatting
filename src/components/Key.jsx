import React from 'react'

function Key() {
    const users = ["Aarsh", "Aarav", "Aayush"]
    return (
        <>
            <ul>
                {users.map((user, index) => {
                    return <li key={index}>{user}</li>
                })}
            </ul>
        </>
    )
}

export default Key
