import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarAdmin from "./SideBarAdmin";

function Admin() {
  return (
    <div className="pagina">
        <SidebarAdmin />
        <h1>Painel Admin</h1>
        <Link to="/admin/clientes">
          <button className="entrar">Listar Clientes</button>
        </Link>
        <Link to="/admin/cuidadores">
          <button className="entrar">Listar Cuidadores</button>
        </Link>
        <Link to="/home">
          <button className="entrar">Voltar</button>
        </Link>
    </div>
  );
}

export default Admin;