import React, { useMemo, useState } from 'react'

const UseMemoEx = () => {
    const [no, setNo] = useState(0)

    const counter = useMemo(() => {
        return no * no
    })
    return (
        <div>
            <h1>{no}</h1>
            <h2>{counter}</h2>
            <button onClick={() => setNo(no + 1)}>+++++++</button>
        </div>
    )
}

export default UseMemoEx