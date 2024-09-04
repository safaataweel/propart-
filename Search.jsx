import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaGlobe, FaUniversity, FaBriefcase, FaBuilding, FaBook, FaGamepad, FaSearch } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import SearchResults from './SearchResults';


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
    <div className="w-full bg-white/80 backdrop-blur-lg p-2 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105">
      <div className="flex items-center mb-1 gap-1 text-[#1D3557] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="text-xl">{icon}</div>
        <h2 className="text-sm font-semibold">{title}</h2>
        <div className={`ml-auto transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <FaSearch />
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="grid grid-cols-2 gap-1">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleToggle(option)}
                className={`cursor-pointer py-1 px-2 rounded-md text-xs border transition duration-200 text-center ${
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

const Search = () => {
  const [activeFilters, setActiveFilters] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showResults, setShowResults] = React.useState(false);

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
  };

  const handleSearch = () => {
    setShowResults(true);
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSearchTerm('');
    setShowResults(false);
  };

  return (
    <div className="w-full max-w-8xl p-2 bg-[#c9dbd1] min-h-screen flex flex-col">
      <Header />

      <main className="relative flex flex-1 bg-[#c9dbd1]">
        {/* Sidebar */}
        <div className="w-1/4 p-4 bg-white/80 backdrop-blur-lg shadow-lg rounded-xl min-h-screen sticky top-0 overflow-y-auto mt-20 mb-8">
          <div className="w-full max-w-md p-2 bg-white rounded-xl shadow-lg transition hover:shadow-2xl hover:scale-105">
            <h1 className="text-lg font-extrabold mb-2 text-[#1D3557]">Search</h1>
            <div className="relative mb-2">
              <input
                type="text"
                placeholder="Search for people, jobs, companies"
                className="w-full px-2 py-1 rounded-lg bg-gray-50/80 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#457B9D]/50 transition-shadow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute right-2 top-1 text-[#457B9D]" />
            </div>
            <button className="w-full py-1 bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none transition-all duration-300 text-sm hover:scale-105" onClick={handleSearch}>
              Search
            </button>
          </div>

          {/* Filters Section */}
          <div className="mt-4">
            <h1 className="text-lg font-bold mb-2 text-[#1D3557]">Filters</h1>
            <FilterCard
              title="Category"
              icon={<FaBriefcase />}
              options={['IT', 'Education', 'Finance', 'Healthcare', 'Others']}
              onFilterChange={handleFilterChange}
            />
            <FilterCard
              title="Location"
              icon={<FaGlobe />}
              options={['USA', 'UK', 'Canada', 'Australia', 'Others']}
              onFilterChange={handleFilterChange}
            />
            <FilterCard
              title="Experience Level"
              icon={<FaUniversity />}
              options={['Junior', 'Mid', 'Senior', 'Lead']}
              onFilterChange={handleFilterChange}
            />
            {activeFilters.length > 0 && (
              <div className="mt-4">
                <button className="w-full py-1 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none transition-all duration-300 text-sm" onClick={clearAllFilters}>
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-2 flex flex-col bg-[#c9dbd1]">
          <div className="relative flex-1">
            <div className="relative z-10">
              {showResults ? (
                <SearchResults searchTerm={searchTerm} filters={activeFilters} />
              ) : (
                <div className="flex flex-col items-center justify-center min-h-full">
                  <h2 className="text-2xl font-bold text-[#1D3557]">Your search results will appear here</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
