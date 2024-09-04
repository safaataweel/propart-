

import Search from './Search';
import HistoryPage from './HistoryPage';
import ChooseInterest from './Interest';
import ChooseSkills from './SkillsSection';
const App = () => {
  return (
    <div>
      
       
      <Search/>
      <HistoryPage/>
      <ChooseInterest/>
      
      < ChooseSkills/>
    </div>
  );
};

export default App;

/*
import SkillsSection from './SkillsSection';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 to-blue-100">
      <header className="text-4xl font-bold text-gray-800 mb-8">Choose Your Skills</header>
      <div className="max-w-screen-xxxxl mx-auto space-y-8"> {/* Widened the width to max-w-screen-xl }
        <SkillsSection />
       
      </div>
    </div>
  );
};


export default App;




import Interest from './Interest';

const App = () => {
  return (
    <div>
      <Interest />
    </div>
  );
};

export default App;
*/