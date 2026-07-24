import { useEffect, useState } from 'react';
import { Dumbbell, Flame, TrendingUp, Sparkles, Target, Download, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const ORANGE = '#FF9500';
const ORANGE_DARK = '#E68600';

function ChestMaxxHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'ChestMaxx';

    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/ChestMaxx.png';
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.type = 'image/png';
      newLink.href = '/ChestMaxx.png';
      document.head.appendChild(newLink);
    }

    return () => {
      const defaultLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (defaultLink) {
        defaultLink.href = '/ViralRecipes.png';
      }
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is ChestMaxx?',
      answer:
        'ChestMaxx is a chest-focused workout app designed to help you build strength and track your progress. It includes structured workout plans, set logging, and AI-powered recommendations tailored to chest training.',
    },
    {
      question: 'Is the app free to download?',
      answer:
        'Yes, ChestMaxx is free to download from the App Store, with optional premium subscriptions available through in-app purchases.',
    },
    {
      question: 'Does ChestMaxx guarantee muscle growth or results?',
      answer:
        'No. ChestMaxx provides workout suggestions and educational information only. Results vary based on genetics, nutrition, consistency, recovery, and other factors. The App does not guarantee muscle growth, fat loss, or any specific fitness outcome.',
    },
    {
      question: 'Is the content created by certified trainers?',
      answer:
        'Content in ChestMaxx — including workout plans, recommendations, and images — is AI-generated for informational and educational purposes. It is not created, reviewed, or approved by licensed physicians, certified personal trainers, or other healthcare professionals. Always consult a qualified professional before beginning any exercise program.',
    },
    {
      question: 'Where is my workout data stored?',
      answer:
        'All of your data — including profile information, workout progress, preferences, and completed workouts — is stored locally on your device only. We do not collect or store your personal information on our servers.',
    },
    {
      question: 'Can I use the app offline?',
      answer:
        'Yes. Once downloaded, you can log workouts, track sets, and use core features offline. Your progress stays on your device so you can train without an internet connection.',
    },
    {
      question: 'How can I get additional support?',
      answer:
        'If you have any questions, concerns, or need additional support, please reach out to us at appsutk@gmail.com. We\'re here to help and will respond as soon as possible.',
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/ChestMaxx.png" alt="ChestMaxx" className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-bold text-white">ChestMaxx</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/ChestMaxx/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hidden sm:inline">
                Privacy Policy
              </Link>
              <Link to="/ChestMaxx/terms-of-use" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hidden sm:inline">
                Terms & Conditions
              </Link>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hidden md:inline">
                FAQ
              </a>
              <a href="mailto:appsutk@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hidden md:inline">
                Support
              </a>
              <button
                className="px-6 py-2 rounded-full text-black font-semibold flex items-center space-x-2 transition-colors"
                style={{ backgroundColor: ORANGE }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ORANGE_DARK)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ORANGE)}
              >
                <Download className="w-4 h-4" />
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(135deg, #000000 0%, #1C1C1E 50%, #2A1500 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(255,149,0,0.25), transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  ChestMaxx
                </h1>
                <p className="text-2xl font-semibold leading-relaxed" style={{ color: ORANGE }}>
                  Build a stronger chest. Track every set.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  ChestMaxx is a chest-focused exercise app built for serious training. Log your sets and follow structured workout days — all in a dark, high-energy interface designed for the gym.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Whether you train with machines, free weights, or a full gym setup, ChestMaxx helps you stay consistent and push your chest workouts further.
                </p>
              </div>

              <div className="flex justify-start">
                <a href="#" className="hover:opacity-80 transition-opacity transform hover:scale-105">
                  <img src="/downloadappstore.svg" alt="Download on the App Store" className="h-16" />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/chestMaxxPhoneScreen.png"
                alt="ChestMaxx iPhone App Screenshot"
                className="w-40 md:w-48 lg:w-56 h-auto rounded-3xl shadow-2xl shadow-orange-500/20 border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to train your chest with focus and intensity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Dumbbell,
                title: 'Chest-Focused Workouts',
                description: 'Structured workout days built around presses, flies, and machine work to target your chest from every angle.',
              },
              {
                icon: Flame,
                title: 'Set Logging',
                description: 'Log weight and reps for every set, mark completed work, and add extra sets when you want to push further.',
              },
              {
                icon: TrendingUp,
                title: 'Progress Tracking',
                description: 'Track completed workouts and training history stored locally on your device so your progress stays with you.',
              },
              {
                icon: Target,
                title: 'Exercise Guidance',
                description: 'Clear exercise visuals and details help you understand each movement and train with better form.',
              },
              {
                icon: Sparkles,
                title: 'AI Recommendations',
                description: 'Get AI-powered workout suggestions and motivational content to keep your chest training on track.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl transition-all duration-300 border border-white/5 hover:border-orange-500/40"
                style={{ backgroundColor: '#1C1C1E' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'rgba(255, 149, 0, 0.15)' }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: ORANGE }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about ChestMaxx</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-white/10" style={{ backgroundColor: '#1C1C1E' }}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`}
                    style={{ color: ORANGE }}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t border-white/10" style={{ backgroundColor: '#141414' }}>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20" style={{ background: `linear-gradient(to right, ${ORANGE}, #E68600, #CC6A00)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-black">Train Your Chest Today</h2>
              <p className="text-xl text-black/80 max-w-3xl mx-auto">
                Built for lifters who want focused chest workouts, clear set tracking, and a training experience that matches the intensity of the gym.
              </p>
              <p className="text-lg text-black/70 max-w-3xl mx-auto">
                Download ChestMaxx and start logging stronger workouts — one set at a time.
              </p>
            </div>

            <div className="flex justify-center">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/downloadappstore.svg" alt="Download on the App Store" className="h-14" />
              </a>
            </div>

            <div className="pt-8">
              <p className="text-black/70">Available for iOS • Free to download</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <img src="/ChestMaxx.png" alt="ChestMaxx" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold text-white">ChestMaxx</span>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              A chest-focused workout app for logging sets, tracking progress, and training with intensity.
            </p>
            <p className="text-gray-500 text-sm max-w-md mx-auto mt-2">
              Exercise involves inherent risks. Consult a healthcare professional before beginning any workout program.
            </p>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500">© 2026 ChestMaxx. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link to="/ChestMaxx/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/ChestMaxx/terms-of-use" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </Link>
                <a href="/ChestMaxx#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
                <a href="mailto:appsutk@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ChestMaxxHome;
