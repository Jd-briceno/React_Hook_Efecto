import React, { useEffect, useState } from "react";
import Mascota from "./mascota";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Mascotas() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        console.log("Datos recibidos:", data); // Para verificar los datos recibidos
        setMascotas(data);
      })
      .catch((error) => console.error("Error al obtener los datos:", error)); // Manejo de errores
  }, []);

  return (
    <div className="container">
      <h2 className="mt-2">Listado de mascotas</h2>
      <hr />
      <Row>
        {mascotas.length > 0 ? (
          mascotas.map((mascota) => (
            <Col key={mascota.id}>
              <Mascota mascota={mascota} />
            </Col>
          ))
        ) : (
          <p>No se encontraron mascotas</p>
        )}
      </Row>
    </div>
  );
}

export default Mascotas;