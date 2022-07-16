import React from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const VerViagens = useNavigate()
  const AreaAdmin = useNavigate()

  const goToViagens = () => {
    VerViagens("/trips/list")
  }

  const goToLogin = () => {
    AreaAdmin("/login")
  }
  return (
    <div>
        <h2>LabeX</h2>
        <button onClick={goToViagens}>Ver viagens</button>
        <button onClick={goToLogin}>Área Admin</button>
    </div>
  );
}

export default HomePage;
