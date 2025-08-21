import React, { useEffect, useState } from "react";
import Card from "./Card";

const ImageGallery = () => {
  const [meals, setMeals] = useState([]);
  const [page, setPage] = useState(0);
  const imagesPerPage = 6;

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await res.json();
        if (data.meals) {
          const shuffled = [...data.meals].sort(() => 0.5 - Math.random());
          setMeals(shuffled);
        }
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchMeals();
  }, []);

  // Filtrar el id excluido antes de paginar
  const filteredMeals = meals.filter((meal) => meal.idMeal !== "53088" && meal.idMeal !== 53088);
  const totalPages = Math.ceil(filteredMeals.length / imagesPerPage);

  const currentMeals = filteredMeals.slice(
    page * imagesPerPage,
    page * imagesPerPage + imagesPerPage
  );

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentMeals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className={`px-6 py-2 rounded-lg shadow-md transition ${
            page === 0
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Atrás
        </button>

        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className={`px-6 py-2 rounded-lg shadow-md transition ${
            page === totalPages - 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Ver más
        </button>
      </div>

      {meals.length > 0 && (
        <p className="text-center text-gray-500 mt-4">
          Página {page + 1} de {totalPages}
        </p>
      )}
    </div>
  );
};

export default ImageGallery;