import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Form from './components/Form';
import Header from './components/Header';
import Cities from './components/Cities';
import Welcome from './components/Welcome';

/**
 To create routes: 
 - terminal cd into project -> npm install react-router-dom
 - set up index.js
 - set up <Routes> </Routes>
 */
function App() {
  return (
    <div className="App">
      <h2>Routes Demo</h2>
      <Header /> 
      <Routes>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/cities/:city" element={<Cities />}/>
      </Routes>
    </div>
  );
}

export default App;
