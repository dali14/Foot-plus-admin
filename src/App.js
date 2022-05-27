import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Login from "./pages/login/Login";
import Signup from "./pages/singup/Singup";
import EmailVerify from "./pages/EmailVerify";
import PasswordReset from "./pages/PasswordReset";
import ForgotPassword from "./pages/ForgotPassword";


import Home from "./pages/home/Home";
import ClientList from "./pages/listeclient/ClientList";
import PropTListe from "./pages/listeppt/PropTListe";
import Client from "./pages/client/Client";

import TerrainValide from "./pages/valideterrain/ValideT";
import TerrainNonValide from "./pages/Nonvalideterrain/NonValideT";
import AllTerrains from "./pages/allTerrain/AllTerrain";
import Terrain from "./pages/terrain/Terrain";
import AddAdmin from "./pages/addAdmin/AddAdmin" ;
import User from "./pages/user/User" ;

function App() {
  return (
    <>
      <Router>
        <Routes>

          
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

            
          <Route exact path='/dash' element={<Home />} />
          <Route exact path='/clients' element={<ClientList />} />
          <Route exact path='/propterrain' element={<PropTListe />} />
          <Route exact path='/client/:id' element={<Client/>} />


          <Route exact path='/valideTerrain' element={<TerrainValide />} />
          <Route exact path='/NonValideTerrain' element={<TerrainNonValide />} />
          <Route exact path='/AllTerrains' element={<AllTerrains />} />
          <Route exact path='/terrain/:id' element={<Terrain/>} />
          

          <Route exact path='/Myaccount' element={ <User />} />
          <Route exact path='/addAdmin' element={ <AddAdmin />} />





        </Routes>
      </Router>

    </>
  );
}

export default App;
