import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ViralRecipesHome from './pages/ViralRecipesHome';
import ViralRecipesPrivacyPolicy from './pages/ViralRecipesPrivacyPolicy';
import ViralRecipesTermsOfUse from './pages/ViralRecipesTermsOfUse';
import App2Home from './pages/App2Home';
import App2PrivacyPolicy from './pages/App2PrivacyPolicy';
import App2TermsOfUse from './pages/App2TermsOfUse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/viral-recipes" element={<ViralRecipesHome />} />
        <Route path="/viral-recipes/privacy-policy" element={<ViralRecipesPrivacyPolicy />} />
        <Route path="/viral-recipes/terms-of-use" element={<ViralRecipesTermsOfUse />} />
        <Route path="/TOEFL1001" element={<App2Home />} />
        <Route path="/TOEFL1001/privacy-policy" element={<App2PrivacyPolicy />} />
        <Route path="/TOEFL1001/terms-of-use" element={<App2TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;