//import ProtectedRoute from "./ProtectedRoute";
import {
  Routes,
  Route
} from "react-router-dom";
import { Home } from "../components/Home";
import { Landing } from "../components/Landing";
import { Login } from "../components/Login";
import { PerfilUsuario } from "../components/PerfilUsuario";
import { Step1 } from "../components/recopilacionDatos/step1";
import { Step2 } from "../components/recopilacionDatos/step2";
import { Step3 } from "../components/recopilacionDatos/step3";
import { Registro } from "../components/Registro";
import { Welcome } from "../components/Welcome";
import ProtectedRoute from "./ProtectedRoute";


const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/registro" element={<Registro />} />
      <Route exact path="/home" element={<ProtectedRoute redirectTo={"/login"}><Home /></ProtectedRoute>} />
      <Route exact path="/welcome" element={<ProtectedRoute redirectTo={"/login"}><Welcome /></ProtectedRoute>} />
      <Route exact path="/data-collection-step1" element={<ProtectedRoute redirectTo={"/login"}><Step1 /> </ProtectedRoute>} />
      <Route exact path="/data-collection-step2" element={<ProtectedRoute redirectTo={"/login"}><Step2 /></ProtectedRoute>} />
      <Route exact path="/data-collection-step3" element={<ProtectedRoute><Step3 /></ProtectedRoute>} />
      <Route exact path="/user-profile" element={<ProtectedRoute redirectTo={"/login"}><PerfilUsuario /></ProtectedRoute>} />

    </Routes>
  );
};

export default AppRoutes;
