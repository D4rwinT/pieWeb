import { useState, useEffect } from 'react';
import Tarjeta from './Tarjeta';
import axios from 'axios';

function GaleriaComidas({ pais, titulo }) {
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    // Creamos el controlador
    const controller = new AbortController();

    const obtenerComidas = async () => {
      try {
        const respuesta = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${pais}`,
          { signal: controller.signal }
        );
        // ¡Listo! No hubo que hacer "await respuesta.json()"
        setComidas(respuesta.data.meals || []); 

      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Petición cancelada (limpieza exitosa)');
        } else {
          console.error("Error real:", error);
        }
      }
    };

    obtenerComidas();

    return () => {
      controller.abort();
    };

  }, [pais]);

  return (
    <div className="relative mt-12">
        {/* Etiqueta de Recientes */}
        <div className="absolute top-0 left-8 -translate-y-1/2 bg-gradient-to-b from-indigo-400 to-indigo-600 text-white px-6 py-2 rounded-full shadow-lg font-bold text-2xl tracking-wide">
          Comida de {titulo}
        </div>

        {/* Carrusel */}
        <div className="overflow-x-auto snap-x flex flex-row items-center pr-6 pl-6 mt-4 pt-12 pb-8 bg-gradient-to-b from-gray-100 to-gray-200 text-center gap-8">
        {comidas.map((plato) => (
          <Tarjeta 
            key={plato.idMeal} 
            imagen={plato.strMealThumb} 
            titulo={plato.strMeal}
            descripcion={`Deliciosa comida típica de ${titulo}.`} 
          />
        ))}
      </div>
      
    </div>
  );
}

export default GaleriaComidas;