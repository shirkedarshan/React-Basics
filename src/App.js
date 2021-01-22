import React, {useState} from "react"

function App() {

    const value = useState("200")
    const data = {
        name:"abc",
        age:"11"
    }
    const {name,age} = data

    const [count , setCount] = useState(0)

    function increment(){
        setCount(Hot => Hot + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    console.log(data,count)

    return (
        <div>
            <h2>Part 1</h2>
            {value}
            <h2>Part 2</h2>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App