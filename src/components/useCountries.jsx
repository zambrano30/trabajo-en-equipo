import { useState, useEffect } from 'react';

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const data = await response.json();
        const countryList = data.meals.map(meal => meal.strArea);
        setCountries(countryList);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los países');
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};