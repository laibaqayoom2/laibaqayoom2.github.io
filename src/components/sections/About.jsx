import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const aimlSkills = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "YOLOv5/YOLOv8",
    "Scikit-learn",
  ];

  const softwareSkills = [
    "C# (.NET)",
    "Django",
    "Angular",
    "React",
    "MySQL",
    "Firebase",
  ];

  const mobileSkills = [
    "Flutter",
    "React Native",
    "Android Studio",
    "REST APIs",
    "Bluetooth / BLE",
    "MQTT",
  ];

  return (
    <section
      id="about"
      className="flex items-center justify-center py-20 relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          {/* Introduction Card */}
          <div className="mb-12 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am <strong className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Laiba Qayoom</strong>, an AI/ML Engineer,
                Software Developer, and Mobile App Developer passionate about
                building intelligent, real‑world solutions. My expertise spans
                computer vision, full‑stack development, and cross‑platform mobile
                applications. I love turning complex ideas into scalable,
                user‑centric products.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* AI / ML Skills */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">AI / Machine Learning</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aimlSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 cursor-default border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Software Development Skills */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Software Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {softwareSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-400 py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200 cursor-default border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Development Skills */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Mobile Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mobileSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-500/10 text-emerald-400 py-2 px-4 rounded-lg text-sm font-medium hover:bg-emerald-500/20 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 cursor-default border border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div className="pl-4 border-l-2 border-amber-500/40">
                    <p className="font-semibold text-white text-lg mb-1">
                      B.S. Computer Science
                    </p>
                    <p className="text-amber-400 mb-2">Institute of Space Technology, Islamabad</p>
                    <p className="text-sm text-gray-400 mb-2">2021–2025</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-white">CGPA: 3.81</span>
                      <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded text-xs font-semibold border border-amber-500/30">
                        Silver Medalist
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      <strong>Key Courses:</strong> Machine Learning, Deep Learning, Data Structures,
                      Software Engineering, Mobile App Development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-rose-500/20 hover:border-rose-400/40 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Experience</h3>
                </div>
                <div className="space-y-5 text-gray-300">
                  <div className="pl-4 border-l-2 border-rose-500/40 hover:border-rose-400/60 transition-colors">
                    <h4 className="font-semibold text-white mb-1">
                      Qt Developer Intern
                    </h4>
                    <p className="text-rose-400 text-sm mb-2">Stackware • 2024</p>
                    <p className="text-sm text-gray-400">
                      Built cross‑platform Qt applications, BLE integrations, and
                      MQTT modules for intelligent IoT communication.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-rose-500/40 hover:border-rose-400/60 transition-colors">
                    <h4 className="font-semibold text-white mb-1">
                      Web Developer & SEO
                    </h4>
                    <p className="text-rose-400 text-sm mb-2">Top Notch Painters FL • 2024</p>
                    <p className="text-sm text-gray-400">
                      Improved UI/UX, SEO ranking, and optimized Django + Angular
                      web experience.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-rose-500/40 hover:border-rose-400/60 transition-colors">
                    <h4 className="font-semibold text-white mb-1">
                      Freelance Developer
                    </h4>
                    <p className="text-rose-400 text-sm mb-2">Self-Employed • 2023–Present</p>
                    <p className="text-sm text-gray-400">
                      Building mobile apps, AI systems, and full‑stack solutions
                      for clients across multiple industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};