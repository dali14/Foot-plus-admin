import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/login/Login";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
