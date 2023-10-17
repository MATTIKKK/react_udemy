import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>add animal</button>
            <p>Number of animals: {count}</p>
        </div>
    )
}

export default App