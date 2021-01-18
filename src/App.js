import { render } from "@testing-library/react"
import React,{Component} from "react"
import Header from "./Header.js"
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
        <Header username="vschool"/>
        <Greeting/>
      </div>
    )
  }
}


class Greeting extends Component {
  render(){
    const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
    return(
      <div>
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
      </div>
    )
  }

}
export default App