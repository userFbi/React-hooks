import React, { createContext, useState } from 'react'
import UseContext from './UseContext'
import TestingFile from './TestingFile'

export const ButtonContext = createContext()

const Process = () => {

    const [no, setNo] = useState(0)

    const incre = () => {
        setNo(no + 1)
    }

    const decre = () => {
        setNo(no - 1)
    }

    return (
        <div>
            <ButtonContext.Provider value={{ no, incre, decre }}>
                <UseContext></UseContext>
                <TestingFile></TestingFile>
            </ButtonContext.Provider>
        </div>
    )
}

export default Process