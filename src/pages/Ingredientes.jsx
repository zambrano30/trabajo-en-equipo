import React, { useEffect, useState } from "react";

export default function Ingredientes() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        // Paso 1: obtener muchas recetas de pollo
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken"
        );
        const data = await res.json();

        if (data.meals) {
          // Mezclar recetas
          const shuffled = [...data.meals].sort(() => 0.5 - Math.random());

          // Tomamos hasta 12 recetas para no sobrecargar
          const selectedMeals = shuffled.slice(0, 12);

          // Paso 2: obtener detalles de cada receta
          const detailedMeals = await Promise.all(
            selectedMeals.map(async (meal) => {
              const detailRes = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
              );
              const detailData = await detailRes.json();
              return detailData.meals[0];
            })
          );

          setMeals(detailedMeals);
        }
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-10">Recetas de Pollo</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="w-80 bg-white shadow-md rounded-xl overflow-hidden"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="h-40 w-full object-cover"
            />
            <div className="p-6">
              <h5 className="mb-2 text-xl font-semibold text-gray-800">
                {meal.strMeal}
              </h5>
              <p className="text-gray-600 text-sm font-semibold mb-2">
                Ingredientes:
              </p>
              <ul className="text-gray-600 text-sm list-disc ml-4">
                {[1, 2, 3, 4, 5].map((i) => {
                  const ingrediente = meal[`strIngredient${i}`];
                  const medida = meal[`strMeasure${i}`];
                  return (
                    ingrediente && (
                      <li key={i}>
                        {ingrediente} - {medida}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
