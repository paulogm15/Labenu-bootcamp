import React from "react";
import { useNavigate } from "react-router-dom"


function LoginPage() {

  const voltar = useNavigate()
  const AreaAdmin = useNavigate()

  const entrar = () => {
    AreaAdmin("/admin/trips/list")
  }

  const goBack = () => {
    voltar(-1)
  }

  return (
    <div>
        LoginPage
        <p>Email</p>
        <p>Senha</p>
        <button onClick={goBack}>Voltar</button>
        <button onClick={entrar}>Entrar</button>
    </div>
  );
}

export default LoginPage;
