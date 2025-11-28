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
          { signal: controller.signal } // Conectamos el cable de cancelación
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
    <div className="relative w-full bg-white mt-12 pt-12 p-8 rounded-xl border border-gray-300 shadow-sm">
      
      {/* Etiqueta */}
      <div className="absolute top-0 left-8 -translate-y-1/2 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg font-bold text-lg tracking-wide border-4 border-white uppercase">
        Comida {titulo}
      </div>

      {/* Carrusel */}
      <div className="overflow-x-auto snap-x flex flex-row items-center gap-8 pb-4">
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