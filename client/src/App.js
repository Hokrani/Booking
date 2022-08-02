// Import those pages in App.js
// then based on the path show each components using react-router components 
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <TopNav />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
