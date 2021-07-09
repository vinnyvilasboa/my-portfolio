
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'

//The router was added as a way to redirect anything inside the navbar since thats going to be the main way for people to get around.
function App() {
  return (
    <Router>
     <Navbar />
     </Router>
  );
}

export default App;
