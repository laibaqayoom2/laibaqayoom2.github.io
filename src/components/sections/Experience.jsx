import { useState } from "react";

const RevealOnScroll = ({ children }) => {
  return <div className="animate-fade-in">{children}</div>;
};

const experienceList = [
  {
    role: "Qt Developer Intern",
    company: "Stackware",
    location: "Islamabad, Pakistan",
    period: "Summer 2024",
    type: "Internship",
    description: "Developed cross-platform desktop applications with advanced IoT integrations",
    responsibilities: [
      "Built Qt-based cross-platform GUI applications using C++",
      "Implemented Bluetooth Low Energy (BLE) device scanning and communication protocols",
      "Integrated MQTT message broker for IoT device communication",
      "Collaborated on hardware-level integration and testing",
      "Optimized application performance for embedded systems",
    ],
    tech: ["Qt", "C++", "BLE", "MQTT", "IoT"],
    icon: "💼",
    achievements: [
      "Successfully deployed IoT monitoring system used by 50+ devices",
      "Reduced BLE connection latency by 40%",
      "Contributed to 3 production-ready applications"
    ]
  },
  {
    role: "Web Developer & SEO Specialist",
    company: "Top Notch Painters FL",
    location: "Florida, USA (Remote)",
    period: "2024",
    type: "Contract",
    description: "Enhanced web presence and search engine optimization for a US-based painting company",
    responsibilities: [
      "Redesigned website for full device responsiveness",
      "Implemented SEO strategies achieving top Google rankings",
      "Integrated analytics for user behavior tracking and insights",
      "Enhanced UI/UX resulting in improved user engagement",
      "Optimized Django backend and Angular frontend performance",
    ],
    tech: ["Django", "Angular", "SEO", "Google Analytics", "UI/UX"],
    icon: "🎨",
    achievements: [
      "Achieved #1 ranking for 5+ local keywords",
      "Increased organic traffic by 200%",
      "Improved conversion rate by 35%"
    ]
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2023 – Present",
    type: "Freelance",
    description: "Building custom software solutions for clients across multiple industries",
    responsibilities: [
      "Developed mobile applications using Flutter and React Native",
      "Built AI-powered systems using computer vision and ML models",
      "Created full-stack web applications with modern frameworks",
      "Designed and implemented RESTful APIs and microservices",
      "Provided digital branding and social media management services",
      "Managed end-to-end project delivery from design to deployment",
    ],
    tech: ["Flutter", "React Native", "Python", "Django", "Firebase", "AI/ML"],
    icon: "🚀",
    achievements: [
      "Completed 20+ projects for international clients",
      "Maintained 5-star rating across all platforms",
      "Built long-term relationships with 10+ recurring clients"
    ]
  },
  {
    role: "Social Media & Web Content Creator",
    company: "Various Clients",
    location: "Remote",
    period: "2023 – 2024",
    type: "Freelance",
    description: "Digital branding and web content creation for multiple clients",
    responsibilities: [
      "Developed landing pages with interactive content",
      "Created and managed email marketing campaigns",
      "Designed social media assets and content strategies",
      "Improved client engagement rates through targeted campaigns",
      "Managed content workflow and delivery timelines",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Canva", "Email Marketing"],
    icon: "📱",
    achievements: [
      "Increased client social media engagement by 150%",
      "Created 50+ high-converting landing pages",
      "Managed campaigns reaching 100K+ users"
    ]
  },
];

const ExperienceModal = ({ experience, isOpen, onClose }) => {
  if (!isOpen) return null;

  const getTypeColor = (type) => {
    switch(type) {
      case "Internship":
        return { 
          gradient: "from-blue-500 to-cyan-500",
          bg: "bg-blue-500/10", 
          text: "text-blue-400", 
          border: "border-blue-500/30" 
        };
      case "Contract":
        return { 
          gradient: "from-purple-500 to-pink-500",
          bg: "bg-purple-500/10", 
          text: "text-purple-400", 
          border: "border-purple-500/30" 
        };
      case "Freelance":
        return { 
          gradient: "from-emerald-500 to-teal-500",
          bg: "bg-emerald-500/10", 
          text: "text-emerald-400", 
          border: "border-emerald-500/30" 
        };
      default:
        return { 
          gradient: "from-gray-500 to-slate-500",
          bg: "bg-gray-500/10", 
          text: "text-gray-400", 
          border: "border-gray-500/30" 
        };
    }
  };

  const colors = getTypeColor(experience.type);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-slate-800/90 hover:bg-slate-700 text-white rounded-full p-2 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className={`relative bg-gradient-to-r ${colors.gradient} p-8 rounded-t-2xl`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">{experience.icon}</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">
                {experience.role}
              </h2>
              <p className="text-xl text-white/90 font-semibold">{experience.company}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 text-white/90">
            <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {experience.location}
            </span>
            <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {experience.period}
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-lg text-sm font-semibold">
              {experience.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className={`w-5 h-5 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Key Responsibilities
            </h3>
            <ul className="space-y-3">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <span className={`${colors.text} mt-1 flex-shrink-0`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          {experience.achievements && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <svg className={`w-5 h-5 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`${colors.text} text-xl flex-shrink-0`}>🏆</span>
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className={`w-5 h-5 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {experience.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className={`${colors.bg} ${colors.text} ${colors.border} py-2 px-4 rounded-lg text-sm font-medium border hover:scale-105 transition-transform`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const getTypeColor = (type) => {
    switch(type) {
      case "Internship":
        return { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30", gradient: "from-blue-500 to-cyan-500" };
      case "Contract":
        return { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30", gradient: "from-purple-500 to-pink-500" };
      case "Freelance":
        return { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", gradient: "from-emerald-500 to-teal-500" };
      default:
        return { bg: "bg-gray-500/10", text: "text-gray-400", border: "border-gray-500/30", gradient: "from-gray-500 to-slate-500" };
    }
  };

  return (
    <>
      <section
        id="experience"
        className="flex items-center justify-center py-20 relative overflow-hidden"
      >
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Professional Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                My journey through internships, client projects, and freelance work
              </p>
            </div>

            {/* Experience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experienceList.map((exp, index) => {
                const colors = getTypeColor(exp.type);
                return (
                  <div 
                    key={index} 
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedExperience(exp)}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`}></div>
                    <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl flex-shrink-0">{exp.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                              {exp.role}
                            </h3>
                            <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                          <p className="text-purple-400 font-semibold mb-2">{exp.company}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className={`${colors.bg} ${colors.text} ${colors.border} px-2 py-1 rounded text-xs font-semibold border`}>
                              {exp.type}
                            </span>
                            <span className="text-xs text-gray-400 flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                        {exp.description}
                      </p>

                      {/* Tech Stack Preview */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tech.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white/5 text-gray-300 py-1 px-2 rounded text-xs font-medium border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {exp.tech.length > 4 && (
                          <span className="text-purple-400 py-1 px-2 text-xs font-medium">
                            +{exp.tech.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* View Details */}
                      <div className="group/link flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors text-sm font-medium mt-auto">
                        View Full Details
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Modal */}
      <ExperienceModal 
        experience={selectedExperience} 
        isOpen={!!selectedExperience} 
        onClose={() => setSelectedExperience(null)} 
      />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Experience;