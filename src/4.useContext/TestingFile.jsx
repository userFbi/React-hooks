import React, { useContext } from 'react'
import { ButtonContext } from './Process'

const TestingFile = () => {

    const { no } = useContext(ButtonContext)

    return (
        <div>
            <h1>Testing working or not: {no}</h1>
            <h1>No*No = {no * no}</h1>
        </div>
    )
}

export default TestingFile