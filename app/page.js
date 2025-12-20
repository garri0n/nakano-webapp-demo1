import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Menu */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-indigo-600">TailwindTutorial</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#basics" className="text-gray-700 hover:text-indigo-600 transition">Basics</a>
            <a href="#examples" className="text-gray-700 hover:text-indigo-600 transition">Examples</a>
            <a href="#layouts" className="text-gray-700 hover:text-indigo-600 transition">Layouts</a>
            <a href="#tips" className="text-gray-700 hover:text-indigo-600 transition">Tips & Tricks</a>
          </div>
          <button className="md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            How to Use Tailwind CSS
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive guide to mastering utility-first CSS framework for rapid UI development
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Beginner Friendly</span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Practical Examples</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Step-by-Step</span>
          </div>
        </div>

        {/* Tutorial Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div id="basics" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">Getting Started with Tailwind CSS</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Installation</h3>
              <p className="text-gray-700 mb-4">Start by installing Tailwind CSS via npm or yarn:</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                npm install -D tailwindcss postcss autoprefixer<br />
                npx tailwindcss init
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Configuration</h3>
              <p className="text-gray-700 mb-4">Configure your template paths in tailwind.config.js:</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                module.exports = &#123;<br />
                &nbsp;&nbsp;content: ["./src/**/*.&#123;js,jsx,ts,tsx&#125;"],<br />
                &nbsp;&nbsp;theme: &#123; extend: &#123;&#125; &#125;,<br />
                &nbsp;&nbsp;plugins: [],<br />
                &#125;
              </div>
            </div>
          </div>

          <div id="examples" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">Practical Examples</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Example 1 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Buttons</h4>
                <div className="space-y-4 mb-4">
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Primary Button
                  </button>
                  <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                    Outline Button
                  </button>
                </div>
                <code className="text-sm bg-gray-900 p-2 rounded block">
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg"
                </code>
              </div>

              {/* Example 2 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Cards</h4>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 mb-4">
                  <h5 className="font-bold text-gray-800 mb-2">Beautiful Card</h5>
                  <p className="text-gray-600 text-sm">This card uses gradient background and shadow utilities.</p>
                </div>
                <code className="text-sm bg-gray-900 p-2 rounded block">
                  className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"
                </code>
              </div>
            </div>
          </div>

          <div id="layouts" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">Layout Techniques</h2>
            
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Flexbox Examples</h3>
              <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1 min-w-[200px] p-4 text-gray-950 bg-white border rounded-lg text-center">
                  Flex Item 1
                </div>
                <div className="flex-1 min-w-[200px] p-4 text-gray-950 bg-white border rounded-lg text-center">
                  Flex Item 2
                </div>
                <div className="flex-1 min-w-[200px] p-4 text-gray-950 bg-white border rounded-lg text-center">
                  Flex Item 3
                </div>
              </div>
              <code className="text-sm bg-gray-900 p-2 rounded block">
                className="flex flex-wrap gap-4"
              </code>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Grid System</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 text-gray-950 bg-blue-100 rounded-lg text-center">Column 1</div>
                <div className="p-4 text-gray-950 bg-blue-200 rounded-lg text-center">Column 2</div>
                <div className="p-4 text-gray-950 bg-blue-300 rounded-lg text-center">Column 3</div>
              </div>
              <code className="text-sm bg-gray-900 p-2 rounded block">
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              </code>
            </div>
          </div>

          <div id="tips">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">Pro Tips & Best Practices</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-indigo-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-2">📱 Mobile-First Approach</h3>
                <p className="text-gray-700">Always design for mobile first. Use responsive modifiers like md:, lg:, xl: for larger screens.</p>
              </div>

              <div className="p-6 bg-green-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🎨 Customize Your Theme</h3>
                <p className="text-gray-700">Extend the default theme in tailwind.config.js to match your brand colors and design system.</p>
              </div>

              <div className="p-6 bg-purple-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-2">⚡ Use JIT Mode</h3>
                <p className="text-gray-700">Enable Just-In-Time mode for faster build times and arbitrary value support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to master Tailwind CSS?</h3>
          <p className="text-gray-600 mb-6">Start building beautiful interfaces today!</p>
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1">
            Download Cheat Sheet
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">© 2025 TailwindTutorial. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Built with ❤️ by Garri Nakano</p>
          </div>
        </div>
      </footer>
    </div>
  );
}