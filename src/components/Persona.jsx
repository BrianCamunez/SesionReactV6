function Persona({imgPersona, nombre, apellido}){
    return(
        <>
            <div className="card" style={{width: "18em"}}>
                <img src={imgPersona} alt="imagen" className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">Apellido: {apellido}</p>
                    <p className="card-text">Nombre: {nombre}</p>
                </div>
            </div>
        </>
    )
}

export default Persona
