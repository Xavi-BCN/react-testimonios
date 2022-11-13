import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='shawn Whang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de analisis'
          empresa='Tesla'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur quidem, qui commodi eaque expedita veritatis eum blanditiis ratione id, ut iste doloremque sed necessitatibus. Possimus eaque laboriosam odio quis iusto ea enim praesentium suscipit corporis, nam est animi repudiandae, sapiente earum? Veritatis velit corporis doloribus, vero natus recusandae laudantium. ' />
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur quidem, qui commodi eaque expedita veritatis eum blanditiis ratione id, ut iste doloremque sed necessitatibus. Possimus eaque <strong>laboriosam</strong> odio quis iusto ea enim praesentium suscipit corporis, nam est animi repudiandae, sapiente earum? Veritatis velit corporis doloribus, vero natus recusandae laudantium. ' />  
        <Testimonio 
          nombre='Sarah Gutierres'
          pais='Estonia'
          imagen='sarah'
          cargo='Analista de software'
          empresa='Winted'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur quidem, qui commodi eaque expedita veritatis eum blanditiis ratione id, ut iste doloremque sed necessitatibus. Possimus eaque laboriosam odio quis iusto ea enim praesentium suscipit corporis, nam est animi repudiandae, sapiente earum? Veritatis velit corporis doloribus, vero natus recusandae laudantium. ' />  
      </div>
    </div>
  );
}

export default App;
