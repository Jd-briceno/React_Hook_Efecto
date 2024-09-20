import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Mascota(props) {
    const { nombre, descripcion, foto, id } = props.mascota || {};
  
    return (
      <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
        <Card.Img
          style={{ height: "14rem" }}
          variant="top"
          src={foto || "https://via.placeholder.com/150"} // Imagen de respaldo
          alt={descripcion || "Sin descripción"}
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/mascotas/${id}`}>{nombre || "Sin nombre"}</Link>
          </Card.Title>
          <Card.Text>{descripcion || "Sin descripción disponible"}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default Mascota;  