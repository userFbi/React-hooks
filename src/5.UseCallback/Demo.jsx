import React, { useCallback, useState } from 'react'


const Button = React.memo(({ val }) => {
    return <button onClick={val}>Click</button>
})


const Demo = () => {

    const [no, setNo] = useState(0)

    const count = useCallback(() => {
        setNo(no + 1)
    })

    return (
        <div>
            <h1>{no}</h1>
            <Button val={count}></Button>
        </div>
    )
}

export default Demo