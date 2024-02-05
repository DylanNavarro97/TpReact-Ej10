import Card from 'react-bootstrap/Card';

export const Cards = ({pelicula}) => {
  return (
    <>
      <Card className='cardPeli'>
      <Card.Body>
        <Card.Title>{pelicula.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{pelicula.genero}</Card.Subtitle>
        <Card.Text>
          {pelicula.descripcion}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
};
