import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Form from './components/Form';
import Header from './components/Header';
import Cities from './components/Cities';
import Welcome from './components/Welcome';
import Home from './components/Home';
import User from './components/User';

/**
 To create routes: 
 - terminal cd into project -> npm install react-router-dom
 - set up index.js
 - set up <Routes> </Routes>
 */
function App() {
  return (
    <div className="App">

      <h2>Routes Demo Select Your Route</h2>
     
      <Header /> 
      {/* <Header/> will always render if not in Routes scope */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/cities/:city" element={<Cities />} />
        <Route path="/user/:id/:color" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
