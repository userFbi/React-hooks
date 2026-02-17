import React, { useContext } from 'react'
import { ButtonContext } from './Process'

const UseContext = () => {

    const { no, incre, decre } = useContext(ButtonContext)

    return (
        <div>
            <h1>{no}</h1>
            <button onClick={incre}>++++++</button>
            <button onClick={decre}>------</button>
        </div>
    )
}

export default UseContext