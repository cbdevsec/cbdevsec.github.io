import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Err404cbdev from './pages/Err404cbdev';
import AIinLuxuryRetail from './Blogs/AIinLuxuryRetail';
import AuraConsortiumCyberSec from './Blogs/AuraConsortiumCyberSec';
import StudyingEarlyMorning from './Blogs/StudyingEarlyMorning';
import GettingThingsDone from './Blogs/GettingThingsDone';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog1" element={<AIinLuxuryRetail />} />
        <Route path="/blog2" element={<AuraConsortiumCyberSec />} />
        <Route path="/blog3" element={<StudyingEarlyMorning />} />
        <Route path="/blog4" element={<GettingThingsDone />} />
        <Route path="/*" element={<Err404cbdev/>} />
      </Routes>
    </Router>
  );
}

export default App;
