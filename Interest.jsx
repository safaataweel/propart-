import { useState, useRef, useEffect } from 'react';
import InterestTile from './InterestTile';
import Button from './Button';
import ParticleBackground from './ParticleBackground';


const interests = [
  'Music', 
  'Movies', 
  'Books', 
  'Tech', 
  'Travel', 
  'Fitness', 
  'Gaming', 
  'Photography', 
  'Art', 
  'Cooking', 
  'Fashion', 
  'Science', 
  'Health', 
  'Nature', 
  'Business'
];




const ChooseInterest = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);

  const handleSelect = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleContinue = () => {
    console.log('Selected interests:', selectedInterests);
  };

  

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tiles = container.querySelectorAll('.interest-tile');
    const tilePositions = Array.from(tiles).map(tile => {
      const rect = tile.getBoundingClientRect();
      return {
        id: tile.dataset.id,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    });

    const newLines = [];
    if (selectedInterests.length > 1) {
      for (let i = 0; i < selectedInterests.length - 1; i++) {
        const startInterest = selectedInterests[i];
        const endInterest = selectedInterests[i + 1];
        const startPos = tilePositions.find(tile => tile.id === interests.indexOf(startInterest));
        const endPos = tilePositions.find(tile => tile.id === interests.indexOf(endInterest));
        if (startPos && endPos) {
          newLines.push({
            x1: startPos.x,
            y1: startPos.y,
            x2: endPos.x,
            y2: endPos.y,
          });
        }
      }
    }

    setLines(newLines);
  }, [selectedInterests]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f0f8ff] to-[#f0f8ff]">
      <ParticleBackground className="absolute inset-0 z-0" />
      <h1 className="text-4xl font-bold text-[#1D3557] mb-8 z-10">Choose Your Interests</h1>

      <div ref={containerRef} className="relative flex flex-wrap gap-6 justify-center z-10 max-w-5xl mx-auto">
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1000 1000">
          {lines.map((line, index) => (
            <line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#1D3557"
              strokeWidth="2"
              strokeOpacity="0.5"
              strokeLinecap="round"
            />
          ))}
        </svg>
        {interests.map((interest, index) => (
          <InterestTile
            key={interest}
            interest={interest}
            selected={selectedInterests.includes(interest)}
            onSelect={handleSelect}
            data-id={index}
          />
        ))}
      </div>
      <div className="flex gap-4 mt-8 z-10">
        <Button label="Continue" onClick={handleContinue} />
        <Button label="Skip for Now" onClick={() => console.log('Skipped')} type="secondary" />
      </div>
    </div>
  );
};

export default ChooseInterest;
