import './scss/main.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Home/>
        </div>
    </BrowserRouter>

  );
}

export default App;
