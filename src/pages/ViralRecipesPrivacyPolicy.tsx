import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ViralRecipesPrivacyPolicy() {
  useEffect(() => {
    document.title = 'Viral Recipes';
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/viral-recipes" className="flex items-center space-x-3">
              <img src="/ViralRecipes.png" alt="Viral Recipes" className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-bold text-gray-900">Viral Recipes</span>
            </Link>
            <Link 
              to="/viral-recipes"
              className="px-6 py-2 rounded-full text-white font-medium transition-colors" 
              style={{backgroundColor: '#04a539'}} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#038a30'} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#04a539'}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Effective Date:</strong> September 25, 2025</p>
              <p><strong>Last Updated:</strong> September 25, 2025</p>
            </div>

            <p>This Privacy Policy describes how Viral Recipes ("the App," "we," "our," or "us") handles your information. By using the App, you agree to the practices described in this Policy.</p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Do Not Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not collect, store, or share any personal information from users.</li>
                <li>We do not require you to create an account or provide login details.</li>
                <li>All recipes you save or interact with in the App remain stored only on your device and are deleted if you uninstall the App.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Subscription & Payments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The App may offer premium features through a paid subscription.</li>
                <li>Subscriptions are processed and managed by RevenueCat in connection with your device's app store (Apple App Store or Google Play Store).</li>
                <li>We do not receive or store your payment details. Please refer to the privacy policies of Apple, Google, and RevenueCat for information on how they handle your data.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Advertisements</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The App may display third-party advertisements.</li>
                <li>Advertisers may use technologies such as cookies or device identifiers to deliver personalized ads.</li>
                <li>Any data collected by third-party ad networks is governed by their own privacy policies, not ours.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. AI-Generated Content</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Recipes, nutritional information, and images in the App are generated using third-party artificial intelligence services (including OpenAI's ChatGPT, Grok, and Google Gemini).</li>
                <li>No personal data is sent to these AI providers.</li>
                <li>Content is generated automatically and may not always be accurate or reliable.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Information Sources</h2>
              <p>The App may provide or reference third-party information, including research, reports, and statistics. In particular, certain information in the App is based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IJBNPA Study: "Application of the Healthy Eating Index to Online Recipes" (2017)</li>
                <li>Chicory "2024 State of Online Recipes" Report</li>
              </ul>
              <p>These materials are provided for general informational purposes only. We are not responsible for the content, accuracy, or privacy practices of these third-party sources.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Health & Allergy Disclaimer</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-700">The recipes, nutritional values, and related content in the App are generated automatically using AI and are provided for general informational purposes only. They are not a substitute for professional medical, dietary, or nutritional advice.</p>
                <p className="text-red-700 mt-2">You are responsible for reviewing ingredients, checking for allergens, and making sure recipes are safe for your personal consumption. If you have dietary concerns, allergies, or medical conditions, consult a qualified professional before relying on the information in the App.</p>
                <p className="text-red-700 mt-2">We are not responsible for any illness, injury, or adverse outcome that may result from following recipes or consuming foods prepared based on App content.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Reviews, Testimonials & Engagement Data</h2>
              <p>Any reviews, testimonials, ratings, or statistics shown in the App — including the number of people who have cooked or interacted with recipes — are examples only. These figures are not based on personal data, do not reflect real user activity, and are displayed solely for demonstration and illustrative purposes.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p>The App is not directed at children under the age of 13. We do not knowingly collect personal data from children. If we become aware that we have inadvertently received personal data from a child under 13, we will delete it immediately.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Security</h2>
              <p>Since the App does not collect or store personal information, no special measures are required. However, please protect your device with appropriate security settings to safeguard your locally stored information.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. The latest version will always be available in the App. By continuing to use the App after changes take effect, you agree to the updated Policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="bg-green-50 p-4 rounded-lg inline-block">
                📧 <a href="mailto:appsutk@gmail.com" className="text-green-600 hover:text-green-800 font-medium">appsutk@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/viral-recipes"
              className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium transition-colors"
              style={{backgroundColor: '#04a539'}} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#038a30'} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#04a539'}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

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

export default ViralRecipesPrivacyPolicy;

