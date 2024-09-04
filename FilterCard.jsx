import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { FaUser, FaGlobe, FaUniversity, FaLaptop, FaBriefcase, FaBuilding, FaBook, FaGamepad } from 'react-icons/fa';

const FilterCard = ({ title, icon, options, onFilterChange }) => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(true);

  const handleToggle = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
    onFilterChange(updatedOptions);
  };

  return (
    <div className="w-full bg-white/80 backdrop-blur-lg p-4 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105">
      <div className="flex items-center mb-4 gap-2 text-[#1D3557] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="text-2xl">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className={`ml-auto transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <FaSearch />
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="grid grid-cols-2 gap-3">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleToggle(option)}
                className={`cursor-pointer py-1 px-2 rounded-md text-sm border transition duration-200 text-center ${
                  selectedOptions.includes(option)
                    ? 'bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

FilterCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterCard;
