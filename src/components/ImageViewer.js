import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function ImageViewer() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [image, setImage] = useState("https://dummyimage.com/100x100.png");

  useEffect(() => {
    const imageUrl = `https://dummyimage.com/${width}x${height}.png`;
    fetch(imageUrl)
      .then((data) => data.blob())
      .then((blob) => {
        setImage(URL.createObjectURL(blob));
      });
  }, [width, height]);

  const handleWidthUpdate = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightUpdate = (e) => {
    setHeight(e.target.value);
  };

  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body className="mb-3">
          <Card.Title>Custom Size Image</Card.Title>
          <img src={image} alt="Custom" style={{ width: "100%", height: "auto" }} />
          <Card.Text>
            <h2>Width:</h2>
            <input type="number" value={width} onChange={handleWidthUpdate} />
          </Card.Text>
          <Card.Text>
            <h2>Height:</h2>
            <input type="number" value={height} onChange={handleHeightUpdate} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ImageViewer;