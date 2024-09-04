import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
const profiles = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    imgSrc: "https://ui-avatars.com/api/?name=John+Doe&background=1D3557&color=fff",
    bio: "Experienced in building scalable web applications with modern technologies. Passionate about coding and continuous learning.",
    email: "john.doe@example.com",
    phone: "+1234567890",
    linkedin: "https://linkedin.com/in/johndoe",
    facebook: "https://facebook.com/johndoe"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager",
    imgSrc: "https://ui-avatars.com/api/?name=Jane+Smith&background=1D3557&color=fff",
    bio: "Skilled in product strategy, development, and user research. Dedicated to creating user-centered products and improving user experiences.",
    email: "jane.smith@example.com",
    phone: "+0987654321",
    linkedin: "https://linkedin.com/in/janesmith",
    facebook: "https://facebook.com/janesmith"
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "UI/UX Designer",
    imgSrc: "https://ui-avatars.com/api/?name=Alice+Johnson&background=1D3557&color=fff",
    bio: "Passionate designer with a keen eye for user experience and aesthetics. Experienced in creating intuitive and engaging interfaces.",
    email: "alice.johnson@example.com",
    phone: "+1122334455",
    linkedin: "https://linkedin.com/in/alicejohnson",
    facebook: "https://facebook.com/alicejohnson"
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Data Scientist",
    imgSrc: "https://ui-avatars.com/api/?name=Michael+Brown&background=1D3557&color=fff",
    bio: "Expert in data analysis, machine learning, and statistical modeling. Focused on deriving insights from complex data sets.",
    email: "michael.brown@example.com",
    phone: "+2233445566",
    linkedin: "https://linkedin.com/in/michaelbrown",
    facebook: "https://facebook.com/michaelbrown"
  },
  {
    id: 5,
    name: "Emily White",
    role: "DevOps Engineer",
    imgSrc: "https://ui-avatars.com/api/?name=Emily+White&background=1D3557&color=fff",
    bio: "Specialized in continuous integration, deployment, and cloud infrastructure. Committed to optimizing development workflows and ensuring system reliability.",
    email: "emily.white@example.com",
    phone: "+3344556677",
    linkedin: "https://linkedin.com/in/emilywhite",
    facebook: "https://facebook.com/emilywhite"
  },
  {
    id: 6,
    name: "David Lee",
    role: "Marketing Specialist",
    imgSrc: "https://ui-avatars.com/api/?name=David+Lee&background=1D3557&color=fff",
    bio: "Focused on digital marketing strategies, social media, and brand growth. Expert in crafting compelling marketing campaigns and driving brand engagement.",
    email: "david.lee@example.com",
    phone: "+4455667788",
    linkedin: "https://linkedin.com/in/davidlee",
    facebook: "https://facebook.com/davidlee"
  }
];

const headerHeight = 60; // Adjust this value based on your header's height

const SearchResults = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleOpenDetails = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseDetails = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="relative">
      <div className="mt-16">
        <h1 className="text-3xl font-bold mb-4 text-[#1D3557] font-playfair">Results</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-300 p-2 flex flex-col items-center text-center w-[200px] h-[200]"
            >
              {/* Profile Picture */}
              <div className="w-18 h-18 overflow-hidden rounded-full border-2 border-[#1D3557] mb-4">
                <img
                  src={profile.imgSrc}
                  alt={`${profile.name} Profile`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Information */}
              <div>
                <h3 className="text-xl font-semibold text-[#1D3557] mb-1">{profile.name}</h3>
                <p className="text-gray-700 mb-4 font-playfair">{profile.role}</p>
                <button 
                  onClick={() => handleOpenDetails(profile)}
                  className="px-4 py-2 bg-[#1D3557] text-white rounded-lg hover:bg-[#33527A] transition duration-300 font-playfair"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Profile Sidebar */}
      {selectedProfile && (
        <motion.div
          className="fixed top-0 right-0 w-full sm:w-1/3 h-full bg-white shadow-lg border-l border-gray-200 p-6 flex flex-col overflow-y-auto"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ top: `${headerHeight}px` }} // Adjusting top position
        >
            <button 
            onClick={handleCloseDetails}
            className="text-[#1D3557] text-xl font-bold absolute top-4 right-4 hover:text-[#33527A] transition duration-300"
          >
            &times;
          </button>
          <div className="w-full flex flex-col items-center mt-10">
            <div className="w-24 h-24 overflow-hidden rounded-full border-2 border-[#1D3557] mb-4">
              <img
                src={selectedProfile.imgSrc}
                alt={`${selectedProfile.name} Profile`}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#1D3557] mb-1">{selectedProfile.name}</h3>
            <p className="text-gray-700 mb-4">{selectedProfile.role}</p>
            <p className="text-gray-600 mb-6 text-center">{selectedProfile.bio}</p>
            <div className="flex gap-4">
              <a href={`mailto:${selectedProfile.email}`} className="text-[#1D3557] hover:text-[#33527A] transition duration-300">
                <FaEnvelope size={24} />
              </a>
              <a href={`tel:${selectedProfile.phone}`} className="text-[#1D3557] hover:text-[#33527A] transition duration-300">
                <FaPhone size={24} />
              </a>
              <a href={selectedProfile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#1D3557] hover:text-[#33527A] transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href={selectedProfile.facebook} target="_blank" rel="noopener noreferrer" className="text-[#1D3557] hover:text-[#33527A] transition duration-300">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SearchResults;