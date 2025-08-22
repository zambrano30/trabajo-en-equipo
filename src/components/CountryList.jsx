import { useCountries } from './useCountries';

const CountryList = () => {
  const { countries, loading } = useCountries();

  if (loading) {
    return <div className="text-gray-500">Cargando países...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {countries.map((country, index) => (
        <span
          key={index}
          className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
        >
          {country}
        </span>
      ))}
    </div>
  );
};

export default CountryList;