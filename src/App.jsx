import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";

import './style.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  )
}


export default App;
