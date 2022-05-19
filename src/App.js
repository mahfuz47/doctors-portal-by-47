import { Route, Routes } from "react-router-dom";
import About from "./About";
import Appointment from "./Pages/Appointment/Appointment";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/Shared/RequireAuth";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
