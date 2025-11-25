import Tarjeta from './Tarjeta';

function App() {
  return (
    <div>
      
      <h1 className="text-4xl font-bold text-indigo-600 mb-4 text-center mt-4">
        Pie Review
      </h1>
      
      {/* Caja que contiene todo*/}
      <div className="relative mt-12">
        {/* Etiqueta de Recientes */}
        <div className="absolute top-0 left-8 -translate-y-1/2 bg-gradient-to-b from-indigo-400 to-indigo-600 text-white px-6 py-2 rounded-full shadow-lg font-bold text-2xl tracking-wide">
          Recientes
        </div>

        {/* Carrusel */}
        <div className="overflow-x-auto snap-x flex flex-row items-center pl-6 mt-4 pt-12 pb-8 bg-gradient-to-b from-gray-100 to-gray-200 text-center gap-8">
          <Tarjeta 
          imagen="img/pie3.jpg" 
          titulo="Pie 2025"
          descripcion="¡El mejor pie del año 2025!" 
        />

        <Tarjeta 
          imagen="img/pie.jpg" 
          titulo="Pie 2023" 
          descripcion="Este pie anduvo medio flopero sinceramente, pero igual estaba rico. El detalle es que se sentía un poco falso." 
        />

        <Tarjeta 
          imagen="img/pie2.jpg" 
          titulo="Pie 2022" 
          descripcion="¡El mejor pie del año 2022! Mis felicitaciones a la chef." 
        />

        <Tarjeta 
          imagen="img/pie5.jpg" 
          titulo="Pie Mayo 2025-2" 
          descripcion="Muy caro y dulce, pero rico." 
        />

        <Tarjeta 
          imagen="img/pie6.jpg" 
          titulo="Pie Mayo 2025-1" 
          descripcion="Me gustó con los pedacitos de limón arriba, pero muy caro." 
        />

        <Tarjeta 
          imagen="img/pie4.webp" 
          titulo="Pie Unimarc" 
          descripcion="No es muy bueno porque se le siente un sabor como artificial." 
        />
        </div>
      </div>

      <div class="flex flex-col items-center mt-4 mx-4 p-4 bg-gray-100 text-center">
        <p>Mi <em>primera</em> <strong> Página Web</strong>.</p>
        <p>Esta es una página HTML muy básica.</p>
        <button class="mt-8 w-28 py-2 bg-gray-50 text-black rounded-lg hover:bg-blue-100 transition duration-300">
          Haz clic acá
        </button>
        <button class="mt-6 w-40 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
          Ver Perfil
        </button> 
      </div>

    </div>
  )
}

export default App