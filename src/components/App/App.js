import Header from '../Header/Header';

import '../../sass/main.scss'
import Hero from '../Hero/Hero';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
  <div className="App">
      <Header/>
      <Hero />
    </div>
    </Router>
  
  );
}

export default App;
