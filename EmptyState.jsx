import { FaSearch } from 'react-icons/fa';

// EmptyState Component
const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center">
      <FaSearch className="text-5xl text-[#457B9D] mb-4" />
      <h2 className="text-2xl font-bold text-[#1D3557] mb-2">No Results Found</h2>
      <p className="text-gray-600">
        Try adjusting your search criteria or filters to find what you are looking for.
      </p>
    </div>
  );
};

export default EmptyState;
