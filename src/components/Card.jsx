
const Card = ({ meal }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition">
      <img
        src={`${meal.strMealThumb}/medium`} // 👈 podés cambiar a /small o /large
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {meal.strInstructions}
        </p>
      </div>
    </div>
  );
};

export default Card;