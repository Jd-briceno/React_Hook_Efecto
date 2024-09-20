import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

export default function Detail() {
    const { mascotaId } = useParams();
    const [mascota, setMascota] = useState(null);

    useEffect(() => {
    const URL =
        "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/" +
        "99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
        const mascotaEncontrada = data.find(
            (item) => item.id === parseInt(mascotaId)
        );
        setMascota(mascotaEncontrada);
        });
    }, [mascotaId]);

    if (!mascota) {
        return <p>Cargando detalles de la mascota...</p>;
    }

    return (
    <Container className="text-center mt-4">
        <h1>{mascota.nombre}</h1>
        <img
        src={mascota.foto}
        alt={mascota.nombre}
        style={{ width: "400px", height: "auto", margin: "20px 0" }}
        />
        <h3>{mascota.raza}</h3>
    </Container>
    );
}