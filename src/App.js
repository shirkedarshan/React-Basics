import { render } from "@testing-library/react"
import React,{Component} from "react"
import Header from "./Header.js"

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      answer : "Yes"
    }
  }

  render(){
    return(
      <div>
        <p> My Answer is {answer} </p>
        <ChildComponent answer={this.state.answer}/>
      </div>
    )
  }
}

export default App