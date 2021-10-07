import React, { useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import Header from './components/Header';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: ""
  })

  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})
  const [error, setError] = useState(false)

  const { ciudad, pais } = busqueda

  useEffect(() => {
    // console.log(ciudad);
    // console.log(consultar);
    const consultarApi = async () => {
      if (consultar) {
        const appId = "fe59866ec4b189c6d5e2fc8d4afe6a88"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        // console.log(resultado);
        setResultado(resultado)
        setConsultar(false)

        // Detecta si hubo resultados correctos en la consuklta
        if(resultado.cod === "404"){
          setError(true)
        }else{
          setError(false)
        }
      }
      
      
    }
    consultarApi()
    // eslint-disable-next-line
  }, [consultar])

  let component;

  if (error) {
    component = <Error mensaje="No hay resultados"/>
  }else{
    component = <Clima resultado={resultado}/>
  }

 

  return (

    <>
      <Header titulo="Clima React App"/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
