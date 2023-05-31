import React from "react"

const Tarjeta = ({name, date}) => {
    return (
        <div className="tarjeta">
            <h1>Datos </h1>
            <h2>Nombre: {name}</h2>
            <h2>Fecha de nacimiento: {date}</h2>
            
        </div>
    )
}

export default Tarjeta