import React from "react";

export default function NotFound() {
  return (
    <div className="not-found text-center py-5 my-5">
      <h2 className="mb-3">Página no encontrada</h2>
      <h5 className="mb-3">
        La página que busca no existe o no esta disponible
      </h5>
      <p className="lead">¿Necesitas ayuda?</p>
      <a href="/contacto" className="btn btn-primary">
        Escribinos
      </a>
    </div>
  );
}
