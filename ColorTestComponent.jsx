// ColorTestComponent.jsx


const ColorTestComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Red Color Test</h1>
        <p className="text-lg text-green-700">This text should be green.</p>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition-all">
          Blue Button
        </button>
      </div>
    </div>
  );
};

export default ColorTestComponent;
