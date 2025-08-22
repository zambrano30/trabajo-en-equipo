import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useCountries } from './useCountries';

const CountrySearchBar = ({ onCountrySelect, placeholder = "Buscar restaurantes, ciudades..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const searchRef = useRef(null);
  
  const { countries, loading, error } = useCountries();

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSearchTerm(country);
    setIsOpen(false);
    onCountrySelect && onCountrySelect(country);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(value.length > 0);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCountry('');
    setIsOpen(false);
    onCountrySelect && onCountrySelect('');
  };

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md mx-auto my-20">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(searchTerm.length > 0)}
          placeholder={loading ? "Cargando países..." : placeholder}
          disabled={loading}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white shadow-sm"
        />
        
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-8 flex items-center pr-2"
          >
            <span className="text-gray-400 hover:text-gray-600 text-xl">&times;</span>
          </button>
        )}
        
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
        </div>
      </div>

      {isOpen && filteredCountries.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredCountries.map((country, index) => (
            <div
              key={index}
              onClick={() => handleCountrySelect(country)}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center">
                <span className="text-gray-800">{country}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {isOpen && searchTerm && filteredCountries.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="px-4 py-3 text-gray-500 text-center">
            No se encontraron países que coincidan con "{searchTerm}"
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySearchBar;