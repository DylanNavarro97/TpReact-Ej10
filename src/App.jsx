import { Button, Form, FormControl } from "react-bootstrap";
import "./App.css";
import { Cards } from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    genero: "",
  });
  const [peliculas, setPeliculas] = useState([]);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (verificarFormulario()) {
      const listaPeliculas = [...peliculas, formulario];
      setPeliculas(listaPeliculas);
      localStorage.setItem("peliculas", JSON.stringify(listaPeliculas));
      alert("Pelicula agregada correctamente");
      setFormulario({
        nombre: "",
        descripcion: "",
        genero: "",
      });
    } else {
      alert("Completa los campos correctamente");
    }
  };

  const verificarFormulario = () => {
    if (
      verificarInputText(formulario.nombre, 3, 50) &&
      verificarInputText(formulario.genero, 3, 30) &&
      verificarInputText(formulario.descripcion, 3, 100)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const verificarInputText = (input, minlength, maxlength) => {
    if (input.trim().length >= minlength && input.trim().length <= maxlength) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const peliculasLS = JSON.parse(localStorage.getItem("peliculas")) || [];
    setPeliculas(peliculasLS);
  }, []);

  return (
    <>
      <Form className="py-5" onSubmit={handleSubmit}>
        <div className="container p-3 bg-secondary text-white rounded-1 mb-5">
          <label htmlFor="nombre" className="mb-2">
            Nombre de la pelicula
          </label>
          <FormControl
            id="nombre"
            placeholder="Ej: Star Wars"
            name="nombre"
            required
            minLength={3}
            maxLength={50}
            className="mb-3"
            onChange={handleChange}
            value={formulario.nombre}
          />
          <label htmlFor="descripcion" className="mb-2">
            Descripcion
          </label>
          <FormControl
            as="textarea"
            id="descripcion"
            placeholder="Ingresa la descripcion"
            name="descripcion"
            required
            minLength={3}
            maxLength={100}
            className="mb-3"
            onChange={handleChange}
            value={formulario.descripcion}
          />
          <label htmlFor="genero" className="mb-2">
            Genero de la pelicula
          </label>
          <FormControl
            id="genero"
            placeholder="Ej: Ciencia ficcion"
            name="genero"
            required
            minLength={3}
            maxLength={30}
            className="mb-3"
            onChange={handleChange}
            value={formulario.genero}
          />

          <div className="p-3 text-end">
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </div>
        </div>
      </Form>

      <div className="container d-flex flex-wrap">
        {peliculas?.map((pelicula, i) => (
          <Cards pelicula={pelicula} key={i}/>
        ))}
      </div>
    </>
  );
}

export default App;
