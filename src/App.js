
import './App.css';
import {
  BrowserRouter as Router,Route, Routes
} from "react-router-dom";
import Usernavbar from "./components/usernavbar.js";

import Add from "../src/Pages/Add.js";
import Show from "../src/Pages/Show.js";

function App() {
  return (
    <div className="App">
      
      <Router>
    <Usernavbar/>
    <Routes>
    <Route exact path="/" element={<Add/>}/>  
    <Route exact path="/Show" element={<Show/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
