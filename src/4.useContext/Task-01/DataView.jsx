import React, { useContext } from 'react'
import { DataContext } from './Data'

const DataView = () => {

    const users = useContext(DataContext)

    return (
        <div className='card'>
            {users.map((user, index) => (
                <div key={index}>
                    <h1>Name: {user.name}</h1>
                    <h2>Age: {user.age}</h2>
                    <h2>Skill: {user.skill}</h2>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default DataView