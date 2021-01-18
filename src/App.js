import React from "react"

// function App() {
//   return (
//     <div>
//       <p>Code goes here</p>
//     </div>
//   )
// }

class App extends React.Component {
  render(){
    return(
      <div>
        <p>Code goes here</p> 
        <h1>{this.props.whatever}</h1>
    </div>
    )
  }
}

export default App