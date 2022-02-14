//import ProtectedRoute from "./ProtectedRoute";
import {
  Routes,
  Route
} from "react-router-dom";
import { Home } from "../components/Home";
import { Landing } from "../components/Landing";
import { Login } from "../components/Login";
import { Registro } from "../components/Registro";
import { Welcome } from "../components/Welcome";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/registro" element={<Registro />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/welcome" element={<Welcome />} />
    </Routes>
  );
};

export default AppRoutes;
