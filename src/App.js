
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      
      

      </Routes>  
  );
}

export default App;
