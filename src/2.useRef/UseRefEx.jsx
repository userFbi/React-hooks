import React, { useRef } from 'react'

const UseRefEx = () => {

    const inpRef = useRef()
    const clickRef = useRef()

    const handleChange = () => {
        inpRef.current.style.color = 'red'
    }

    const handleClick = () => {
        clickRef.current.style.color = 'green'
    }

    return (
        <div>
            <br /><br />
            <input type="text" ref={inpRef} name="" id="" onChange={handleChange} />
            <br /><br />
            <input type="text" name="" ref={clickRef} id="" />
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default UseRefEx