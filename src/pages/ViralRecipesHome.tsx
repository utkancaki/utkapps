import { ChefHat, Video, Search, Heart, ShoppingCart, Calendar, Download, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function ViralRecipesHome() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/ViralRecipes.png" alt="Viral Recipes" className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-bold text-gray-900">Viral Recipes</span>
            </Link>
            <button className="px-6 py-2 rounded-full text-white font-medium flex items-center space-x-2 transition-colors" style={{backgroundColor: '#04a539'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#038a30'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#04a539'}>
              <Download className="w-4 h-4" />
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Discover
                  <span className="block" style={{color: '#04a539'}}>Viral Recipes</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Cook the hottest recipes trending on social media! From TikTok sensations to Instagram favorites, 
                  get detailed nutrition info, meal prep clips, and step-by-step cooking guides.
                </p>
              </div>
              
              <div className="flex justify-start">
                <a href="#" className="hover:opacity-80 transition-opacity transform hover:scale-105">
                  <img src="/downloadappstore.svg" alt="Download on the App Store" className="h-16" />
                </a>
              </div>

            </div>

            <div className="flex justify-center">
              <img src="/iphoneScreen.png" alt="Viral Recipes iPhone App Screenshot" className="w-96 h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to recreate trending recipes from social media platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Meal Planning",
                description: "Plan your weekly meals with viral recipes. Schedule trending dishes and organize your cooking calendar.",
                color: "green"
              },
              {
                icon: Search,
                title: "Advanced Recipe Search",
                description: "Find viral recipes by ingredients, cuisine, difficulty, or social media platform. Discover what's trending now.",
                color: "orange"
              },
              {
                icon: Heart,
                title: "Detailed Nutrition Info",
                description: "Get complete nutritional breakdown for every viral recipe. Track calories, macros, and dietary information.",
                color: "green"
              },
              {
                icon: Video,
                title: "Meal Preparation Clips",
                description: "Watch short video clips showing key preparation techniques from the original viral posts.",
                color: "orange"
              },
              {
                icon: ChefHat,
                title: "Step-by-Step Cooking",
                description: "Follow detailed cooking instructions with photos and tips to recreate viral recipes perfectly.",
                color: "green"
              },
              {
                icon: ShoppingCart,
                title: "Smart Grocery Lists",
                description: "Automatically add recipe ingredients to your shopping list. Never forget an ingredient again.",
                color: "orange"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`} style={{backgroundColor: feature.color === 'green' ? '#e6f7ed' : '#f0f9f1'}}>
                  <feature.icon className="w-8 h-8" style={{color: feature.color === 'green' ? '#04a539' : '#038a30'}} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20" style={{background: `linear-gradient(to right, #04a539, #038a30, #026b24)`}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Cook What's Trending?</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Join thousands of food enthusiasts recreating the most popular recipes from TikTok, Instagram, and beyond.
              </p>
            </div>

            <div className="flex justify-center">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/downloadappstore.svg" alt="Download on the App Store" className="h-14" />
              </a>
            </div>

            <div className="pt-8">
              <p className="text-green-100">Available for iOS • Free to download</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <img src="/ViralRecipes.png" alt="Viral Recipes" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">Viral Recipes</span>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Discover and cook trending recipes from social media platforms with detailed guides and nutrition info.
            </p>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">© 2025 Viral Recipes. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link to="/viral-recipes/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                <Link to="/viral-recipes/terms-of-use" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ViralRecipesHome;

