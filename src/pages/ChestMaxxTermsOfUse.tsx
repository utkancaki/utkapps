import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ORANGE = '#FF9500';
const ORANGE_DARK = '#E68600';

function ChestMaxxTermsOfUse() {
  useEffect(() => {
    document.title = 'ChestMaxx — Terms & Conditions';

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

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <header className="sticky top-0 z-40 border-b border-white/10" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/ChestMaxx" className="flex items-center space-x-3">
              <img src="/ChestMaxx.png" alt="ChestMaxx" className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-bold text-white">ChestMaxx</span>
            </Link>
            <Link
              to="/ChestMaxx"
              className="px-6 py-2 rounded-full text-black font-semibold transition-colors"
              style={{ backgroundColor: ORANGE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ORANGE_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ORANGE)}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions for ChestMaxx</h1>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="p-6 rounded-lg border border-white/10" style={{ backgroundColor: '#1C1C1E' }}>
              <p>
                <strong className="text-white">Last updated:</strong> July 24, 2026
              </p>
            </div>

            <p>Welcome to ChestMaxx ("the App"). These Terms & Conditions govern your access to and use of the App.</p>
            <p>By downloading, accessing, or using ChestMaxx, you agree to these Terms.</p>
            <p>If you do not agree with these Terms, please discontinue use of the App.</p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Purpose of the App</h2>
              <p>
                ChestMaxx is an AI-powered fitness application that provides chest workout suggestions, educational information, progress tracking, and motivational content.
              </p>
              <p className="mt-2">The App is intended solely for informational and educational purposes.</p>
              <p className="mt-2">
                It is <strong className="text-white">not</strong> intended to diagnose, treat, cure, or prevent any disease or medical condition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. No Account Required</h2>
              <p>ChestMaxx operates without user accounts.</p>
              <p className="mt-2">There is no login, registration, or authentication system.</p>
              <p className="mt-2">
                All workout data, profile information, settings, and preferences remain stored locally on your device.
              </p>
              <p className="mt-2">
                Deleting the App may permanently remove this data unless your device has backed it up.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. No Medical or Professional Advice</h2>
              <p>
                All workout plans, recommendations, educational content, and other information provided within ChestMaxx are generated using artificial intelligence.
              </p>
              <p className="mt-4">
                They are <strong className="text-white">not</strong> created, reviewed, or approved by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Doctors</li>
                <li>Certified personal trainers</li>
                <li>Physical therapists</li>
                <li>Registered dietitians</li>
                <li>Sports scientists</li>
                <li>Healthcare professionals</li>
                <li>Any licensed expert</li>
              </ul>
              <p className="mt-4">
                Nothing contained in the App should be interpreted as medical advice, professional fitness coaching, or rehabilitation guidance.
              </p>
              <p className="mt-2">
                Always consult an appropriate healthcare professional before beginning any exercise program.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. No Guaranteed Results</h2>
              <p>ChestMaxx provides suggestions only.</p>
              <p className="mt-4">
                We do <strong className="text-white">not</strong> guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Muscle gain</li>
                <li>Weight loss</li>
                <li>Fat loss</li>
                <li>Strength improvements</li>
                <li>Better athletic performance</li>
                <li>Reduction in body fat</li>
                <li>Reduction in the appearance of gynecomastia ("man boobs")</li>
                <li>Any specific physical outcome</li>
              </ul>
              <p className="mt-4">Your results depend on many factors outside our control.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. AI-Generated Images</h2>
              <p>Images displayed throughout the App are AI-generated illustrations.</p>
              <p className="mt-2">They are intended solely as visual examples.</p>
              <p className="mt-2">
                They are not photographs of real individuals or actual users and should never be interpreted as guaranteed results.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Comments and Testimonials</h2>
              <p>
                Any comments, reviews, conversations, or testimonial-style content displayed within the App are fictional and are included solely for demonstration or design purposes.
              </p>
              <p className="mt-4">They:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Are not from real users.</li>
                <li>Are not reviews of the App.</li>
                <li>Should not be interpreted as genuine user experiences.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Exercise Risks</h2>
              <p>Exercise carries inherent risks.</p>
              <p className="mt-2">
                By using ChestMaxx, you acknowledge that you participate in physical activity voluntarily and entirely at your own risk.
              </p>
              <p className="mt-2">
                You should stop exercising immediately if you experience pain, dizziness, or other concerning symptoms and seek professional medical advice.
              </p>
              <p className="mt-2">
                To the fullest extent permitted by law, ChestMaxx and its developer are not liable for any injuries, health complications, damages, or losses resulting from the use of the App.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Subscriptions</h2>
              <p>ChestMaxx offers optional premium subscriptions.</p>
              <p className="mt-2">Payments are processed by Apple App Store or Google Play Store.</p>
              <p className="mt-2">RevenueCat is used to manage subscription status and premium access.</p>
              <p className="mt-2">Deleting the App does not cancel your subscription.</p>
              <p className="mt-2">Subscriptions must be managed through your Apple ID or Google Play account.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Intellectual Property</h2>
              <p>
                All content within ChestMaxx, including its design, branding, logos, software, graphics, interface, AI-generated content, workout organization, and other materials, is owned by or licensed to the developer and is protected by applicable intellectual property laws.
              </p>
              <p className="mt-2">
                You may not copy, distribute, reproduce, modify, reverse engineer, or commercially exploit any part of the App without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use the App for unlawful purposes.</li>
                <li>Attempt to interfere with or reverse engineer the App.</li>
                <li>Circumvent subscription mechanisms.</li>
                <li>Redistribute App content without authorization.</li>
                <li>Use the App in a manner that may harm its operation or other users.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Disclaimer of Warranties</h2>
              <p>
                ChestMaxx is provided on an <strong className="text-white">"AS IS"</strong> and <strong className="text-white">"AS AVAILABLE"</strong> basis.
              </p>
              <p className="mt-2">
                To the maximum extent permitted by law, we disclaim all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, reliability, accuracy, availability, and non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, ChestMaxx and its developer shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Your use of the App.</li>
                <li>Your inability to use the App.</li>
                <li>Reliance on AI-generated content.</li>
                <li>Exercise-related injuries.</li>
                <li>Health complications.</li>
                <li>Data loss.</li>
                <li>Device issues.</li>
                <li>Subscription matters handled by Apple, Google, or RevenueCat.</li>
              </ul>
              <p className="mt-4">Your sole remedy if you are dissatisfied with the App is to discontinue its use.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">13. Changes to These Terms</h2>
              <p>We may revise these Terms at any time.</p>
              <p className="mt-2">The updated version becomes effective immediately upon publication.</p>
              <p className="mt-2">Continued use of the App constitutes acceptance of the revised Terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">14. Contact</h2>
              <p>If you have any questions regarding these Terms & Conditions, please contact:</p>
              <p className="p-4 rounded-lg inline-block mt-2 border border-white/10" style={{ backgroundColor: '#1C1C1E' }}>
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:appsutk@gmail.com" className="font-medium hover:underline" style={{ color: ORANGE }}>
                  appsutk@gmail.com
                </a>
              </p>
              <p className="mt-6">
                These Terms & Conditions and the{' '}
                <Link to="/ChestMaxx/privacy-policy" className="underline" style={{ color: ORANGE }}>
                  Privacy Policy
                </Link>{' '}
                should be read together and constitute the complete agreement regarding your use of ChestMaxx.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/ChestMaxx"
              className="inline-flex items-center px-6 py-3 rounded-full text-black font-semibold transition-colors"
              style={{ backgroundColor: ORANGE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ORANGE_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ORANGE)}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

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

export default ChestMaxxTermsOfUse;
