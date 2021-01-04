import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Nav from './Nav';
import Main from './Main';

function App() {

  const date = new Date()
  const hours = date.getHours()

  const firstName = "Darshan"
  const lastName = "Shirke"

  const h3Style = {
    color : "blue",
    backgroundColor : "Yellow"
  }

  let timeOfDay

  if ( hours < 12){
    timeOfDay = "morning"
    h3Style.color = "green"
  }else if (hours >= 12 && hours < 16 ){
    timeOfDay = "afternoon"
    h3Style.color = "white"
  }else if (hours >= 16 && hours < 19 ){
    timeOfDay = "evening"
    h3Style.color = "blue"
  }else {
    timeOfDay = "night"
    h3Style.color = "red"
  }

  return (
    <div>
      <h1 className="navbar">Good { timeOfDay } { hours } !</h1>
      <h2 style={{color:'white',backgroundColor:"#FF2D00"}}> Hello { `${firstName} ${lastName}`}</h2>

      <h3 style={h3Style}> h3 style testing</h3>

    </div>
  );
}

export default App;
