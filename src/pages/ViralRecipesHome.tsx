import { useEffect, useState } from 'react';
import { ChefHat, Video, Search, Heart, ShoppingCart, Calendar, Download, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function ViralRecipesHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Viral Recipes';
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Are the recipes real and tested?",
      answer: "All recipes in Viral Recipes are AI-generated based on trending recipes from social media platforms like TikTok and Instagram. The recipes are designed to help you recreate viral dishes, but we recommend following standard cooking safety practices and adjusting recipes to your taste preferences."
    },
    {
      question: "Is the app free to download?",
      answer: "Yes, Viral Recipes is free to download from the App Store. The app offers core features at no cost, and there may be optional premium features available through in-app purchases."
    },
    {
      question: "Can I save my favorite recipes?",
      answer: "Yes! You can save recipes you love and access them anytime. All saved recipes are stored locally on your device, so you can build your personal collection of favorite viral recipes."
    },
    {
      question: "Do recipes include nutritional information?",
      answer: "Yes, every recipe includes detailed nutritional information including calories, macronutrients, and other dietary information. However, please note that nutritional values are AI-generated and should be used as approximate guidelines."
    },
    {
      question: "Can I use the app offline?",
      answer: "Once you've loaded recipes, you can view saved recipes offline. However, searching for new recipes and generating content requires an internet connection to access AI services."
    },
    {
      question: "Are the recipes suitable for dietary restrictions?",
      answer: "Recipes are AI-generated and may not always account for specific dietary restrictions or allergies. We strongly recommend reviewing all ingredients carefully and consulting with a healthcare professional if you have dietary concerns, allergies, or medical conditions before trying any recipe."
    },
    {
      question: "How often are new recipes added?",
      answer: "The app uses AI to generate recipes based on trending content from social media. You can search for new viral recipes anytime, and the app will provide you with the latest trending dishes from platforms like TikTok and Instagram."
    },
    {
      question: "Can I create a meal plan?",
      answer: "Yes! The app includes meal planning features that allow you to schedule your weekly meals with viral recipes. You can organize your cooking calendar and plan ahead for the week."
    },
    {
      question: "Do recipes include video instructions?",
      answer: "Yes, recipes include meal preparation clips showing key techniques from the original viral posts. These short video clips help you understand the cooking process and recreate the dishes more accurately."
    },
    {
      question: "Can I generate a shopping list from recipes?",
      answer: "Absolutely! The app includes smart grocery list features that automatically add recipe ingredients to your shopping list. This helps ensure you never forget an ingredient when shopping."
    },
    {
      question: "How can I get additional support?",
      answer: "If you have any questions, concerns, or need additional support, please don't hesitate to reach out to us at appsutk@gmail.com. We're here to help and will respond to your inquiries as soon as possible."
    }
  ];
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Viral Recipes
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
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
                <a href="/viral-recipes#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a>
                <a href="mailto:appsutk@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ViralRecipesHome;

