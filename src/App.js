import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName : "",
            lastName : ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        // const {name, value} = event.target  <it is alternate way>
        this.setState({
            // [name] : value
            [event.target.name] : event.target.value
        })
    }
    
    render() {
        console.log(this.state.firstName)
        return (
            <div>
                <input type="text" 
                    value={this.state.firstName} 
                    name="firstName"
                    placeholder="First Name" 
                    onChange={this.handleChange} />
                <input type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name"
                    onChange={this.handleChange} />
                <h1>{this.state.firstName}{this.state.lastName}</h1>
            </div>
        )
    }
}

export default App
