const Card = ({ meal }) => {
  // Usar el SVG desde public como imagen
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition flex flex-col h-full">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 md:h-56 lg:h-64 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-oasis-brown mb-2 font-serif tracking-wide">
          {meal.strMeal}
        </h3>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl line-clamp-3 font-light flex-1">
          {meal.strArea}
        </p>
        {/* Icono de YouTube y enlace al video */}
        {meal.strYoutube && (
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 gap-2 text-red-600 hover:underline"
            title="Ver video en YouTube"
          >
            <img src="/youtube.svg" alt="YouTube" width={32} height={32} />
            <span className="text-sm">Ver video</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;