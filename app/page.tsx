import {
  RoadmapPreview,
  FitnessOverviewPreview,
  MuscleHighlightPreview,
} from "./components/PreviewSnapshots";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
              <span>Early Access Now Available</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
              Turn Two Photos Into Your Personal Fitness Blueprint
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Upload a photo of where you are now and where you want to be. Get a realistic, 
              personalized coaching plan built around your body, your goals, and your timeline.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#early-access"
                className="w-full rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
              >
                Get Early Access
              </a>
              <a
                href="#how-it-works"
                className="w-full rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-base font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 sm:w-auto"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Visual Concept */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 p-8 dark:from-zinc-800 dark:to-zinc-900">
                <div className="flex h-64 items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-300 dark:bg-zinc-700">
                      <svg className="h-10 w-10 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Current You</p>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">Your starting point</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 p-8 dark:from-blue-950 dark:to-indigo-950">
                <div className="flex h-64 items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-300 dark:bg-blue-700">
                      <svg className="h-10 w-10 text-blue-700 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-200">Goal You</p>
                    <p className="mt-1 text-xs text-blue-700 dark:text-blue-400">Your target body type</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md dark:bg-zinc-900">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Personalized Plan Generated
                </span>
              </div>
            </div>

            {/* Preview Snapshots Section */}
            <div className="mt-10">
              <p className="mb-6 text-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Your plan includes:
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <RoadmapPreview title="Your Roadmap" />
                <FitnessOverviewPreview title="Fitness Overview" />
                <MuscleHighlightPreview title="Target Muscles" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-24 dark:bg-zinc-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
              Simple Process
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              How It Works
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Three simple steps to get your personalized fitness plan
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Upload Current Photo
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  Take or upload a photo of your body as it is today. This helps us understand your 
                  starting point and create a plan that works for you.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Set Your Goal
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  Upload a photo of your target body type. This could be a past version of yourself, 
                  or a realistic body type that matches your goals.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Get Your Plan
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  Receive a detailed coaching plan with nutrition guidance, workout routines, and 
                  realistic milestones tailored to bridge the gap between where you are and where you want to be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-900 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
              Built Different
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Why Body Blueprint Works
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Truly Personalized
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  Unlike generic fitness apps that give everyone the same template, Body Blueprint 
                  analyzes both your current physique and your specific goal to create a plan designed 
                  uniquely for your transformation journey.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Realistically Achievable
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  No crash diets or unrealistic promises. Body Blueprint sets achievable milestones 
                  based on sustainable fitness principles, helping you build lasting habits rather than 
                  chasing quick fixes that never last.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Adaptive Coaching
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  Your body changes, and so should your plan. Body Blueprint adapts as you progress, 
                  adjusting your nutrition and workout recommendations to keep you moving toward your goal 
                  at the optimal pace.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Privacy First
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  Your photos are encrypted and stored securely. We never share your images with third 
                  parties, and you maintain complete control over your data. Your transformation is 
                  personal, and we keep it that way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-white py-24 dark:bg-zinc-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
              Join Early Users
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Be Part of the First Wave
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Body Blueprint is currently in early access. Join hundreds of users who are already 
              transforming their fitness journey with personalized, photo-based coaching plans.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">500+</div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Early Access Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">89%</div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Report Better Results</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">4.8</div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="early-access" className="bg-blue-600 dark:bg-blue-700">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Transformation?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Get early access to Body Blueprint and start building your personalized fitness plan today. 
              Limited spots available.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="w-full rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-600 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
              >
                Join the Beta
              </a>
              <a
                href="#"
                className="w-full rounded-full border border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-lg font-bold text-white">BB</span>
              </div>
              <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Body Blueprint</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Terms of Service
              </a>
              <a href="#" className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                About Us
              </a>
              <a href="#" className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                Contact
              </a>
            </nav>
          </div>
          <div className="mt-8 border-t border-zinc-200 pt-8 text-center dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Body Blueprint. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}