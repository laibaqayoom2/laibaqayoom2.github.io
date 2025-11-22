import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

<RevealOnScroll>
        <div className="z-10 px-4 relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Profile Image & Stats */}
            <div className="flex flex-col items-center lg:items-start space-y-8">
              {/* Profile Image with decorative elements */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  src="public/my-img.png" 
                  alt="Laiba Qayoom" 
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-blue-500/30 shadow-2xl group-hover:border-blue-400/50 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4 shadow-lg animate-bounce">
                  <span className="text-3xl">👩‍💻</span>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                <div className="group cursor-default">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 hover:border-blue-400/50 hover:bg-blue-500/15 transition-all duration-300 hover:-translate-y-1 text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">3+</div>
                    <div className="text-xs text-gray-400 font-medium">Years Experience</div>
                  </div>
                </div>
                
                <div className="group cursor-default">
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 hover:border-cyan-400/50 hover:bg-cyan-500/15 transition-all duration-300 hover:-translate-y-1 text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-1">20+</div>
                    <div className="text-xs text-gray-400 font-medium">Projects Done</div>
                  </div>
                </div>
                
                <div className="group cursor-default">
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 hover:border-purple-400/50 hover:bg-purple-500/15 transition-all duration-300 hover:-translate-y-1 text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">3.81</div>
                    <div className="text-xs text-gray-400 font-medium">CGPA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="text-center lg:text-left space-y-6">
              {/* Greeting Badge */}
              <div className="inline-block">
                <span className="bg-blue-500/10 text-blue-400 px-6 py-2.5 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 hover:scale-105 transition-all duration-300">
                  👋 Welcome to my portfolio
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block mb-2 text-gray-300 text-2xl md:text-3xl font-normal">
                  Hi, I'm
                </span>
                <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-white text-transparent hover:scale-105 transition-transform duration-300">
                  Laiba Qayoom
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-400 font-light">
                Crafting <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">Intelligent Solutions</span> Through Code
              </p>

              {/* Role tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <span className="bg-blue-500/10 text-blue-300 px-5 py-2.5 rounded-xl text-sm font-semibold border border-blue-500/30 backdrop-blur-sm hover:bg-blue-500/20 hover:scale-105 hover:border-blue-400/50 transition-all duration-300 cursor-default">
                  🤖 AI/ML Engineer
                </span>
                <span className="bg-purple-500/10 text-purple-300 px-5 py-2.5 rounded-xl text-sm font-semibold border border-purple-500/30 backdrop-blur-sm hover:bg-purple-500/20 hover:scale-105 hover:border-purple-400/50 transition-all duration-300 cursor-default">
                  💻 Full Stack Developer
                </span>
                <span className="bg-emerald-500/10 text-emerald-300 px-5 py-2.5 rounded-xl text-sm font-semibold border border-emerald-500/30 backdrop-blur-sm hover:bg-emerald-500/20 hover:scale-105 hover:border-emerald-400/50 transition-all duration-300 cursor-default">
                  📱 Mobile Developer
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Building <span className="text-blue-400 font-semibold">intelligent systems</span> and 
                <span className="text-cyan-400 font-semibold"> scalable applications</span> that solve 
                <span className="text-teal-400 font-semibold"> real-world problems</span> using cutting-edge AI and modern frameworks.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 pt-4">
                <a
                  href="#projects"
                  className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-10 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <a
                  href="#contact"
                  className="group relative border-2 border-blue-500/40 text-blue-400 py-4 px-10 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(59,130,246,0.25)] hover:bg-blue-500/10 hover:border-blue-400/60 backdrop-blur-sm overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Let's Connect
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};