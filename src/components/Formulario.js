import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

  //state del formulario
  // const [busqueda, setBusqueda] = useState({
  //   ciudad: "",
  //   pais: ""
  // })

  const [error, setError] = useState(false)

  // extraer ciudad y pais
  const { ciudad, pais } = busqueda

//  Funcion que coloca los elementos en el state
  const handleChange = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Validar
    if(ciudad.trim() === "" || pais.trim() === ""){
      setError(true)
      return;
    }

  setError(false)

  setConsultar(true)

}


  return (
    <form action="" onSubmit={handleSubmit} >
      {
        error ? <p className="red darken-4 error">Todos los campos son obligatorios</p> : null
      }
      <div className="input-field col s12">
        <input type="text" name="ciudad" id="ciudad" value={ciudad} onChange={handleChange} />
        <label htmlFor="ciudad">Ciudad</label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange} >
          <option value="">-- Seleccione un pais --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="ciudad">Pais: </label> 
      </div>

      <div className="input-field col s-12">
        <input type="submit" value="Buscar clima" className="waves-effect waves-light btn-large btn-block yellow accent-4" />
      </div>
    </form>
  )
}

Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  setBusqueda: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired
}

export default Formulario
