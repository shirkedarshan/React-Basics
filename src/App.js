import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        return (
            <div>
                <img src="https://www.fillmurray.com/200/100" onClick = { () => console.log("End")}/>
            </div>
        )
    }
}
// or we can use function as 
// 
// function handleClick() {
//     console.log("I was clicked")
// }

// // https://reactjs.org/docs/events.html#supported-events

// function App() {
//     return (
//         <div>
//             <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>
//             <br />
//             <br />
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     )
// }


export default App
