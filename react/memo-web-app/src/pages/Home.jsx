import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center bg-blue-50">
        <div className="max-w-7xl mx-auto px-8 text-center text-text-primary">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            AI-Powered Memo Management
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Transform your tasks into concise, actionable memos with our
            AI-driven summarization. Save, review, and track your progress
            effortlessly.
          </p>
          <button
            onClick={() => navigate("/chat")}
            className="mt-8 rounded-lg bg-blue-900 px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary">
              Key Features
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Streamline your workflow and stay organized with MemoAI.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 p-8">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 rounded-xl bg-background-card bg-gray-50 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                📝
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                AI Summarization
              </h3>
              <p className="text-text-secondary text-gray-600">
                Our AI algorithms analyze your tasks and generate clear, concise
                memos, highlighting key information and action items.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4 rounded-xl bg-background-card bg-gray-50 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                📋
              </div>
              <h3 className="text-xl font-bold text-text-primary">Memo List</h3>
              <p className="text-text-secondary text-gray-600">
                View all your saved memos in one place. Easily search, filter,
                and organize your memos for quick access.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4 rounded-xl bg-background-card bg-gray-50 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                ✅
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                Task Completion
              </h3>
              <p className="text-text-secondary text-gray-600">
                Mark memos as complete or incomplete to track your progress and
                stay organized. Keep your task list up-to-date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-background-card bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              A simple three-step process to boost your productivity.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 -ml-px h-full w-0.5 bg-gray-200 hidden md:block"
            ></div>
            <div className="space-y-12 md:space-y-16">
              {/* Step 1 */}
              <div className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-8">
                <div className="flex flex-col items-center md:items-end md:text-right">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    📝
                  </div>
                  <div className="ml-4 md:ml-0 md:mt-4">
                    <h3 className="text-xl font-bold text-text-primary">
                      Submit Your Tasks
                    </h3>
                    <p className="mt-2 text-text-secondary text-gray-600">
                      Enter your tasks in a simple text format.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-8">
                <div className="md:col-start-2 flex flex-col items-center md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    📋
                  </div>
                  <div className="ml-4 md:ml-0 md:mt-4">
                    <h3 className="text-xl font-bold text-text-primary">
                      AI Summarization
                    </h3>
                    <p className="mt-2 text-text-secondary text-gray-600">
                      Our AI processes your tasks and generates a concise memo.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-8">
                <div className="flex flex-col items-center md:items-end md:text-right">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    ✅
                  </div>
                  <div className="ml-4 md:ml-0 md:mt-4">
                    <h3 className="text-xl font-bold text-text-primary">
                      Manage Your Memos
                    </h3>
                    <p className="mt-2 text-text-secondary text-gray-600">
                      Save, review, and track your memos in your personal list.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-text-primary">
            Ready to Get Started?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary text-gray-600">
            Sign up today and experience the power of AI-driven memo management.
          </p>
          <button
            onClick={() => navigate("/chat")}
            className="mt-8 rounded-lg bg-blue-900 px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            Create Your First Memo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-light border-t border-gray-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center gap-8">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a
                href="#"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
            <p className="text-sm text-text-secondary">
              © 2025 MemoAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
