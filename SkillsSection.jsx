import { useState } from 'react';
import { FaCode, FaPaintBrush, FaDatabase, FaUser, FaMobileAlt, FaNetworkWired, FaServer, FaRobot, FaCloud, FaLock, FaBug, FaBriefcase, FaMusic, FaPen, FaChartLine, FaLanguage, FaCogs, FaPlane } from 'react-icons/fa';
import Button from './Button';
import ParticleBackground from './ParticleBackground';

// Skill icons
const icons = {
  Coding: <FaCode />,
  Design: <FaPaintBrush />,
  Database: <FaDatabase />,
  Management: <FaUser />,
  Mobile: <FaMobileAlt />,
  Networking: <FaNetworkWired />,
  DevOps: <FaServer />,
  AI: <FaRobot />,
  Cloud: <FaCloud />,
  Security: <FaLock />,
  Debugging: <FaBug />,
  Business: <FaBriefcase />,
  Music: <FaMusic />,
  Writing: <FaPen />,
  Marketing: <FaChartLine />,
  Languages: <FaLanguage />,
  Engineering: <FaCogs />,
  Travel: <FaPlane />,
};

// Expanded skill categories
const skills = [
  'Coding',
  'Design',
  'Database',
  'Management',
  'Mobile',
  'Networking',
  'DevOps',
  'AI',
  'Cloud',
  'Security',
  'Debugging',
  'Business',
  'Music',
  'Writing',
  'Marketing',
  'Languages',
  'Engineering',
  'Travel',
];

const ChooseSkills = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSelect = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const handleContinue = () => {
    console.log('Selected skills:', selectedSkills);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f0f8ff] to-[#f0f8ff]">
      <ParticleBackground className="absolute inset-0 z-0" />
      <h1 className="text-3xl font-bold text-[#1D3557] mb-6 z-10">Choose Your Skills</h1>

      <div className="relative flex flex-wrap gap-4 justify-center z-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className={`relative w-32 h-32 bg-[#1D3557] text-white rounded-full flex flex-col items-center justify-center cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#457B9D] shadow-lg hover:shadow-xl m-2 p-3`}
            onClick={() => handleSelect(skill)}
          >
            <div className="text-3xl">{icons[skill]}</div>
            <h3 className="mt-2 text-sm font-semibold">{skill}</h3>
            {selectedSkills.includes(skill) && (
              <div className="absolute bottom-0 right-0 p-1 text-green-400 text-lg">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6 z-10">
        <Button label="Continue" onClick={handleContinue} />
        <Button label="Skip for Now" onClick={() => console.log('Skipped')} type="secondary" />
      </div>
    </div>
  );
};

export default ChooseSkills;
