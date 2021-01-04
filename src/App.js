import logo from './logo.svg';
import './App.css'; //css
import Footer from './Footer';
import Nav from './Nav';
import Main from './Main';

function App() {
  return (
    <div>
      <Nav/> // check nav.js
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
