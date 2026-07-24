import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ORANGE = '#FF9500';
const ORANGE_DARK = '#E68600';

function ChestMaxxPrivacyPolicy() {
  useEffect(() => {
    document.title = 'ChestMaxx — Privacy Policy';

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
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy for ChestMaxx</h1>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="p-6 rounded-lg border border-white/10" style={{ backgroundColor: '#1C1C1E' }}>
              <p>
                <strong className="text-white">Last updated:</strong> July 24, 2026
              </p>
            </div>

            <p>
              Thank you for using ChestMaxx ("the App"). Your privacy is important to us. This Privacy Policy explains what information the App collects, how it is used, and your rights regarding your data.
            </p>
            <p>By using ChestMaxx, you agree to the practices described in this Privacy Policy.</p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. No Account Required</h2>
              <p>ChestMaxx does not require you to create an account or sign in.</p>
              <p className="mt-2">There is no login, registration, or user authentication system.</p>
              <p className="mt-2">
                Because the App operates without user accounts, we do not maintain user profiles or store your personal information on our servers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p>
                ChestMaxx does <strong className="text-white">not</strong> collect, upload, transmit, or store your personal information on our servers.
              </p>
              <p className="mt-4">Any information you create or enter in the App, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Profile name</li>
                <li>Profile image</li>
                <li>Workout progress</li>
                <li>Workout history</li>
                <li>Preferences</li>
                <li>Settings</li>
                <li>Completed workouts</li>
                <li>Subscription status cached on your device</li>
                <li>Any other App-related data</li>
              </ul>
              <p className="mt-4">
                is stored <strong className="text-white">locally on your device only</strong>.
              </p>
              <p className="mt-2">We cannot access this information.</p>
              <p className="mt-2">
                If you uninstall or delete the App, your locally stored data may be permanently deleted unless it has been backed up by your device's operating system.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Profile Images</h2>
              <p>If you choose to add a profile image, it is stored only on your device.</p>
              <p className="mt-2">We do not upload, process, or store your profile image.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. AI-Generated Content</h2>
              <p>
                ChestMaxx uses artificial intelligence to generate workout suggestions, educational content, recommendations, motivational material, and illustrative images.
              </p>
              <p className="mt-2">This content is provided for informational and educational purposes only.</p>
              <p className="mt-4">
                It is <strong className="text-white">not</strong> created, reviewed, or approved by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Physicians</li>
                <li>Certified personal trainers</li>
                <li>Physical therapists</li>
                <li>Registered dietitians</li>
                <li>Sports scientists</li>
                <li>Healthcare professionals</li>
                <li>Any licensed medical or fitness expert</li>
              </ul>
              <p className="mt-4">The information within the App should never replace professional medical or fitness advice.</p>
              <p className="mt-2">
                Always consult a qualified healthcare or fitness professional before beginning any exercise program.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. No Guaranteed Results</h2>
              <p>The workouts, plans, and recommendations provided by ChestMaxx are suggestions only.</p>
              <p className="mt-4">
                We do <strong className="text-white">not</strong> guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Muscle growth</li>
                <li>Weight loss</li>
                <li>Fat loss</li>
                <li>Increased strength</li>
                <li>Improved physique</li>
                <li>Reduced body fat</li>
                <li>Reduction in the appearance of gynecomastia ("man boobs")</li>
                <li>Any specific health or fitness outcome</li>
              </ul>
              <p className="mt-4">
                Results vary depending on many factors including genetics, nutrition, consistency, recovery, lifestyle, health conditions, and exercise technique.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. AI-Generated Images</h2>
              <p>Images displayed throughout the App are generated using artificial intelligence.</p>
              <p className="mt-2">
                They are intended only as artistic illustrations or visual examples of potential outcomes.
              </p>
              <p className="mt-2">
                They are <strong className="text-white">not</strong> photographs of real people or actual users and should not be interpreted as representations of real or guaranteed results.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Comments and Testimonials</h2>
              <p>
                Comments, reviews, conversations, or testimonial-style content shown within the App are provided for demonstration purposes only.
              </p>
              <p className="mt-4">These comments:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Are not submitted by real users.</li>
                <li>Are not reviews of ChestMaxx.</li>
                <li>Do not represent actual user experiences or endorsements.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Subscriptions</h2>
              <p>ChestMaxx offers optional premium subscriptions.</p>
              <p className="mt-2">Subscriptions are processed securely through Apple App Store or Google Play Store.</p>
              <p className="mt-2">
                The App uses RevenueCat solely to manage subscription status and premium access.
              </p>
              <p className="mt-2">
                Subscription billing, renewals, cancellations, and refunds are handled according to Apple's or Google's policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Services</h2>
              <p>The App may use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Apple App Store</li>
                <li>Google Play Store</li>
                <li>RevenueCat</li>
              </ul>
              <p className="mt-4">These services have their own privacy policies.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
              <p>
                ChestMaxx is not intended for children without appropriate parental consent where required by applicable law.
              </p>
              <p className="mt-2">We do not knowingly collect personal information from children.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time.</p>
              <p className="mt-2">
                When changes are made, the "Last updated" date at the top of this page will be updated.
              </p>
              <p className="mt-2">
                Your continued use of the App after changes become effective constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact</h2>
              <p>If you have any questions regarding this Privacy Policy, please contact:</p>
              <p className="p-4 rounded-lg inline-block mt-2 border border-white/10" style={{ backgroundColor: '#1C1C1E' }}>
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:appsutk@gmail.com" className="font-medium hover:underline" style={{ color: ORANGE }}>
                  appsutk@gmail.com
                </a>
              </p>
              <p className="mt-6">
                These Privacy Policy and{' '}
                <Link to="/ChestMaxx/terms-of-use" className="underline" style={{ color: ORANGE }}>
                  Terms & Conditions
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

export default ChestMaxxPrivacyPolicy;
