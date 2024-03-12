
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (

    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />

      <Route element={<PrivateRoute />}>
                {
                    //<Route exact path='/Home' element={< Home />}></Route>
                }
                
            </Route>
            <Route exact path="/" element={< Home />}></Route>
      
      

      </Routes>  
  );
}

export default App;
