function Tarjeta({ imagen, titulo, descripcion }) {
  return (
    <div className="ring-4 ring-gray-400 hover:ring-indigo-400 flex-shrink-0 relative group w-80 h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:scale-110 transition-scale duration-300">
      
      {/* Imagen */}
      <img 
        src={imagen} 
        alt={titulo} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />

      {/* Texto */}
      <div className="absolute inset-0 bg-black/60 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="justify-center bg-gray-300 py-2 w-72 rounded-lg mb-2">
          <h3 className="text-gray-700 text-2xl font-bold text-center px-2">
          {titulo}
          </h3>
          <h4 className="text-gray-700 text-center px-2">
            {descripcion}
          </h4>
        </div>
      </div>
      
    </div>
  );
}

export default Tarjeta;