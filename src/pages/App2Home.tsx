import { BookOpen, GraduationCap, Calendar, Trophy, Bookmark, Sparkles, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

function App2Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/TOEFL1001.png" alt="TOEFL® 1001" className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-bold text-gray-900">TOEFL® 1001</span>
            </Link>
            <button className="px-6 py-2 rounded-full text-white font-medium flex items-center space-x-2 transition-colors" style={{backgroundColor: '#8E44AD'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6A3480'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E44AD'}>
              <Download className="w-4 h-4" />
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  2026 TOEFL® New Format.
                </h1>
                <p className="text-2xl font-semibold text-gray-700 leading-relaxed">
                  The fastest, simplest, and most effective way to master TOEFL vocabulary.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  TOEFL® 1001 is a complete TOEFL® vocabulary practice app designed for anyone preparing for the TOEFL® exam. It includes 1001 essential TOEFL words, carefully categorized into Beginner, Intermediate, and Advanced levels, allowing you to learn step-by-step and build lasting vocabulary mastery.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're aiming for a higher TOEFL score or strengthening your academic English, this app provides structured flashcard practice, daily Word of the Day, and tools to bookmark difficult words for focused review.
                </p>
              </div>
              
              <div className="flex justify-start">
                <a href="#" className="hover:opacity-80 transition-opacity transform hover:scale-105">
                  <img src="/downloadappstore.svg" alt="Download on the App Store" className="h-16" />
                </a>
              </div>

            </div>

            <div className="flex justify-center">
              <img src="/toefl1001PhoneScreen.png" alt="TOEFL® 1001 iPhone App Screenshot" className="w-40 md:w-48 lg:w-56 h-auto rounded-3xl shadow-lg" />
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
              Everything you need to master TOEFL vocabulary and achieve your target score
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "1001 Essential TOEFL Words",
                description: "Learn the most important and frequently tested TOEFL vocabulary.",
                color: "purple"
              },
              {
                icon: GraduationCap,
                title: "Leveled Flashcard Practice",
                description: "Study at your own pace with Beginner, Intermediate, and Advanced flashcard sets.",
                color: "purple"
              },
              {
                icon: Calendar,
                title: "Word of the Day",
                description: "Build a daily learning habit with a new curated TOEFL word each day.",
                color: "purple"
              },
              {
                icon: Trophy,
                title: "Achievements",
                description: "Track your progress with milestones and vocabulary learning badges.",
                color: "purple"
              },
              {
                icon: Bookmark,
                title: "Bookmark Words",
                description: "Save difficult or important words and review them anytime.",
                color: "purple"
              },
              {
                icon: Sparkles,
                title: "Clean and Focused Design",
                description: "Minimal interface to maximize learning efficiency.",
                color: "purple"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`} style={{backgroundColor: '#f3e8ff'}}>
                  <feature.icon className="w-8 h-8" style={{color: '#8E44AD'}} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20" style={{background: `linear-gradient(to right, #8E44AD, #6A3480, #5B2C6F)`}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Master TOEFL Vocabulary Today</h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                This app is perfect for TOEFL test takers, students preparing for English proficiency exams, and anyone who wants to improve their academic English vocabulary quickly and effectively.
              </p>
              <p className="text-lg text-purple-100 max-w-3xl mx-auto">
                With TOEFL® 1001, you can master essential TOEFL® vocabulary, boost your confidence, and reach your target score faster. Start your structured TOEFL® vocabulary practice today.
              </p>
            </div>

            <div className="flex justify-center">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/downloadappstore.svg" alt="Download on the App Store" className="h-14" />
              </a>
            </div>

            <div className="pt-8">
              <p className="text-purple-100">Available for iOS • Free to download</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <img src="/TOEFL1001.png" alt="TOEFL® 1001" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">TOEFL® 1001</span>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              The fastest, simplest, and most effective way to master TOEFL vocabulary. Prepare for the 2026 TOEFL® New Format with 1001 essential words.
            </p>
            <p className="text-gray-500 text-sm max-w-md mx-auto mt-2">
              Disclaimer: TOEFL® is a registered trademark of ETS. This app is not affiliated with, endorsed, or approved by ETS.
            </p>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">© 2025 TOEFL® 1001. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link to="/TOEFL1001/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                <Link to="/TOEFL1001/terms-of-use" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App2Home;

