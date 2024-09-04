import  { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaHeart } from "react-icons/fa";
import { MdSort } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from './Header';
import Footer from './Footer';

const HistoryPage = () => {
  const [filter, setFilter] = useState("all"); // Filter by all, liked, viewed
  const [sortOrder, setSortOrder] = useState("desc"); // Sort order by date
  const [startDate, setStartDate] = useState(null); // Start date for date range filter
  const [endDate, setEndDate] = useState(null); // End date for date range filter
  const [historyItems, setHistoryItems] = useState([]); // State for history items
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Fetch data from JSONPlaceholder
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => {
        const items = response.data.map((item) => ({
          id: item.id,
          thumbnail: "https://via.placeholder.com/150", // Placeholder image
          title: item.title,
          duration: "5:00",
          date: new Date(),
          type: item.id % 2 === 0 ? "viewed" : "liked",
        }));
        setHistoryItems(items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);


  // Filter and sort logic
  const filteredItems = historyItems
    .filter((item) => (filter === "all" ? true : item.type === filter))
    .filter((item) => {
      if (startDate && endDate) {
        return item.date >= startDate && item.date <= endDate;
      }
      return true;
    })
    .sort((a, b) =>
      sortOrder === "asc" ? a.date - b.date : b.date - a.date
    );

  return (
    
    <div className="min-h-screen bg-[#c9dbd1] p-4">
      <header className="mb-4">
        <h1 className="text-4xl font-extrabold text-[#1D3557] mb-4">History</h1>

        <div className="max-w-4xl mx-auto flex flex-col space-y-4">
          <div className="flex justify-between items-center text-[#1D3557] border-b border-gray-400 pb-2 mb-2">
            <div className="flex space-x-4">
              <div
                onClick={() => setFilter("viewed")}
                className={`pb-2 border-b-4 ${
                  filter === "viewed" ? "border-[#1D3557]" : "border-transparent"
                } cursor-pointer hover:border-[#33527A]`}
              >
                <FaEye className="text-l" />
                <span className="ml-2">Viewed</span>
              </div>
              <div
                onClick={() => setFilter("liked")}
                className={`pb-2 border-b-4 ${
                  filter === "liked" ? "border-[#1D3557]" : "border-transparent"
                } cursor-pointer hover:border-[#33527A]`}
              >
                <FaHeart className="text-l" />
                <span className="ml-2">Liked</span>
              </div>
              <div
                onClick={() => setFilter("all")}
                className={`pb-2 border-b-4 ${
                  filter === "all" ? "border-[#1D3557]" : "border-transparent"
                } cursor-pointer hover:border-[#33527A]`}
              >
                <span className="text-l">All</span>
              </div>
            </div>

            <div
              onClick={() =>
                setSortOrder((prevOrder) =>
                  prevOrder === "asc" ? "desc" : "asc"
                )
              }
              className="pb-2 border-b-4 border-transparent cursor-pointer hover:border-[#33527A] flex items-center"
            >
              <span>Sort by Date</span>
              <MdSort
                className={`text-xl ml-2 ${
                  sortOrder === "asc" ? "transform rotate-180" : ""
                } transition-transform duration-300`}
              />
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={
                  <button className="px-4 py-2 bg-white border border-[#1D3557] rounded-md text-[#1D3557] shadow-md">
                    {startDate ? startDate.toLocaleDateString() : "Select Start Date"}
                  </button>
                }
              />
            </div>
            <div>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                customInput={
                  <button className="px-4 py-2 bg-white border border-[#1D3557] rounded-md text-[#1D3557] shadow-md">
                    {endDate ? endDate.toLocaleDateString() : "Select End Date"}
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </header>

      <section className="flex flex-col gap-6 max-w-4xl mx-auto">
        {loading ? (
          <p>Loading...</p>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex items-center p-4 hover:scale-105 transform transition-all duration-300"
            >
              <img
                className="w-24 h-24 object-cover rounded-md"
                src={item.thumbnail}
                alt={item.title}
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-bold text-[#1D3557]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#1D3557]">{item.duration}</p>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-xs text-[#1D3557]">
                    {item.date.toLocaleDateString()}
                  </p>
                  <button className="bg-[#1D3557] hover:bg-[#33527A] text-white px-3 py-1 rounded-full text-xs transition-all shadow-md">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-[#1D3557]">No items found.</p>
        )}
      </section>
    </div>
  );
};

export default HistoryPage;
