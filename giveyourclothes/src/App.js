import './scss/main.scss';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./Home";


function App() {
  return (
    <Router>
            <div className="App">
                <Home/>
            </div>
    </Router>

  );
}

export default App;
