import { Link } from 'react-router-dom';

function ViralRecipesTermsOfUse() {
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

      {/* Terms & Conditions Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Effective Date:</strong> September 25, 2025</p>
              <p><strong>Last Updated:</strong> September 25, 2025</p>
            </div>

            <p>Welcome to Viral Recipes ("the App"). These Terms & Conditions ("Terms") govern your use of the App. By downloading or using the App, you agree to these Terms. If you do not agree, please do not use the App.</p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. About the App</h2>
              <p>Viral Recipes is a mobile application developed and published by an individual developer ("we," "our," or "us"). The App provides AI-generated recipes, nutritional information, and related images for personal, non-commercial use.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
              <p>You must be at least 13 years old (or the minimum legal age in your country) to use the App. By using the App, you confirm that you meet these requirements.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Data & Privacy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The App does not require account registration.</li>
                <li>The App does not collect, store, or share any personal information.</li>
                <li>All information you provide (such as saved recipes) is stored only on your device and is deleted if you uninstall the App.</li>
                <li>Please refer to our <Link to="/viral-recipes/privacy-policy" className="text-green-600 hover:text-green-800 underline">Privacy Policy</Link> for more details.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscriptions & Payments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The App is free to download but may offer premium features through a paid subscription.</li>
                <li>Subscriptions are managed securely via RevenueCat, which handles billing through the App Store / Google Play.</li>
                <li>All fees, payment terms, and renewal details are presented at the time of purchase.</li>
                <li>You can manage or cancel your subscription through your device's app store account settings.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Advertisements</h2>
              <p>The App may include advertisements, which may be updated or changed at our discretion.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. AI-Generated Content</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Recipes, nutritional information, and images in the App are generated using third-party artificial intelligence services (including OpenAI's ChatGPT, Grok, and Google Gemini).</li>
                <li>While we aim to provide accurate and enjoyable content, AI-generated results may contain errors, omissions, or inconsistencies.</li>
                <li>Nutritional information is approximate, automatically generated, and should not be relied upon for medical, dietary, or health decisions.</li>
                <li>You are responsible for verifying that recipes and nutritional values meet your dietary needs, preferences, and safety requirements.</li>
                <li>We are not liable for any outcomes related to preparing, consuming, or relying on recipes or nutritional information from the App.</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Health & Allergy Disclaimer</h3>
                <p className="text-red-700">The recipes, nutritional values, and content in the App are for informational and entertainment purposes only. They are not intended as medical or dietary advice. Ingredients may cause allergic reactions or other adverse effects depending on individual health conditions.</p>
                <p className="text-red-700 mt-2">You are solely responsible for checking ingredient labels, verifying nutritional information, and ensuring recipes meet your personal dietary needs and restrictions. We are not responsible for any illness, injury, or adverse outcome that may result from following recipes or consuming foods prepared based on App content.</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Reviews, Testimonials & Engagement Data</h3>
                <p className="text-blue-700">Any reviews, testimonials, ratings, or statistics displayed in the App (including the number of people who have cooked or interacted with recipes) are provided for illustrative purposes only. These do not represent actual user data or verified activity.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the App for any unlawful or harmful purpose.</li>
                <li>Copy, modify, distribute, or reverse-engineer the App.</li>
                <li>Attempt to disrupt or interfere with the operation of the App.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
              <p>The App is provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee uninterrupted access, accuracy, or error-free performance.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use of the App, including but not limited to reliance on AI-generated recipes or nutritional information.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p>We may suspend or terminate your access to the App at any time if you violate these Terms or if we discontinue the App.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p>These Terms are governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to conflict of law principles.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p>We may update these Terms from time to time. The latest version will always be available in the App. By continuing to use the App after changes take effect, you agree to the updated Terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Third-Party Information & Sources</h2>
              <p>The App may provide or reference third-party information, including research, reports, and statistics. In particular, certain information in the App is based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IJBNPA Study: "Application of the Healthy Eating Index to Online Recipes" (2017)</li>
                <li>Chicory "2024 State of Online Recipes" Report</li>
              </ul>
              <p>These materials are provided for general informational purposes only. We do not control, endorse, or guarantee the accuracy, relevance, or availability of third-party content. Your use of or reliance on such information is at your own risk.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
              <p>For questions about these Terms, please contact us at:</p>
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ViralRecipesTermsOfUse;

