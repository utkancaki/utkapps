import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  useEffect(() => {
    document.title = 'Mobile App';
  }, []);
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-4">
        {/* Viral Recipes App */}
        <Link 
          to="/viral-recipes" 
          className="flex flex-col items-center space-y-4 group cursor-pointer transition-transform hover:scale-105"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow overflow-hidden bg-white">
            <img 
              src="/ViralRecipes.png" 
              alt="Viral Recipes" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
            Viral Recipes
          </h2>
        </Link>

        {/* Second App */}
        <Link 
          to="/TOEFL1001" 
          className="flex flex-col items-center space-y-4 group cursor-pointer transition-transform hover:scale-105"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow overflow-hidden bg-white">
            <img 
              src="/TOEFL1001.png" 
              alt="TOEFL® 1001" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
            TOEFL® 1001
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Landing;

