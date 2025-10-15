import Header from "../components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              About Jarurat Care
            </h1>
            <p className="text-xl text-gray-600">
              Modern Healthcare Management Solution
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jarurat Care is dedicated to revolutionizing patient record management through
                innovative technology and user-centric design. We believe that healthcare
                professionals deserve tools that are both powerful and easy to use.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Easy Management</h3>
                    <p className="text-gray-600">
                      Intuitive interface for managing patient records efficiently
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Fast Search</h3>
                    <p className="text-gray-600">
                      Quickly find patient information with powerful search
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Responsive Design</h3>
                    <p className="text-gray-600">
                      Works seamlessly on desktop, tablet, and mobile devices
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Customizable</h3>
                    <p className="text-gray-600">
                      Add and manage patient records according to your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Technology Stack</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Built with modern web technologies including React, TypeScript, and Tailwind CSS,
                Jarurat Care delivers a fast, reliable, and beautiful user experience. We use
                the Random User API to demonstrate patient data management capabilities.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Ready to get started?
              </h3>
              <p className="text-gray-600 mb-6">
                Explore our patient management system and see how it can help you
              </p>
              <a
                href="/patients"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-teal-600"
              >
                View Patients
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
