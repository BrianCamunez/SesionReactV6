import './App.css'
import Persona from "./components/Persona.jsx"

function App() {
  console.log("App")

  const arrayPersonas = [
    {nombre: "Jose", apellido: "Benitez", imgPersona: "https://media.istockphoto.com/id/1414159406/es/vector/multicolor-abstracto-rojo-naranja-verde-p%C3%BArpura-amarillo-colorido-ondulado-papelcut.jpg?s=612x612&w=0&k=20&c=UNjQErYytEZGkh72OyyN0XvryBi_G7_NUmQGwmK34jg="},
    {nombre: "Brian", apellido: "Camuñez", imgPersona: "https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg"},
    {nombre: "Karlos", apellido: "Zubieta", imgPersona: "https://aguacatec.es/wp-content/uploads/2023/10/e5a978b8-6772-4c85-a50e-15581af7d483.png"}
  ]

  return(
    <>
      <h1>Sesion 6 App</h1>
      {arrayPersonas.map((persona, index) => (
        <Persona key={index} nombre={persona.nombre} apellido={persona.apellido} imgPersona={persona.imgPersona} />
      ))}
    </>
  )
}

export default App
