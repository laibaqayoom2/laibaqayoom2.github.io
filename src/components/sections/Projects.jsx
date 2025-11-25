import { useState } from "react";

const RevealOnScroll = ({ children }) => {
  return <div className="animate-fade-in">{children}</div>;
};

const projectList = [
  {
    title: "Intellicarts – Smart Shopping System",
    description:
      "A smart retail automation system that transforms traditional shopping by using computer vision and real-time guidance.",
    tech: ["Flutter", "Python", "Flask", "Firebase", "YOLOv5/v8", "Google ML Kit"],
    features: [
      "Smart trolley tablet app with real-time product recognition",
      "Mobile app for shopping lists, budget tracking, and QR-based onboarding",
      "YOLOv5/v8 model trained on a custom dataset (~99.5% accuracy)",
      "Flask inference server for instant product detection",
      "Firebase for real-time inventory, user data, and cart sync",
      "Optimized shopping route guidance",
      "High-speed barcode scanning via Google ML Kit",
    ],
    category: "AI/ML",
    github: "https://github.com/yourusername/intellicarts",
    demo: "https://intellicarts-demo.com",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&h=500&fit=crop"
  },
  {
    title: "YOLOv5 Object Detection Application",
    description:
      "A real-time object detection system using a custom-trained YOLOv5 model.",
    tech: ["Python", "Django", "Flutter", "OpenCV", "YOLOv5"],
    features: [
      "Trained on 28k+ images, achieving 99% accuracy",
      "Django backend serving detection and inference APIs",
      "Flutter mobile app for image/video-based detection",
      "Real-time OpenCV processing",
      "Efficient model deployment optimized for mobile",
    ],
    category: "AI/ML",
    github: "https://github.com/yourusername/yolo-detection",
    demo: "https://yolo-demo.com",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop"
  },
  {
    title: "AI-Based Attendance System",
    description: "Automated attendance using facial recognition and ML classification.",
    tech: ["Python", "OpenCV", "Dlib", "Scikit-learn", "SQLite"],
    features: [
      "User registration + profile management",
      "Facial encoding extraction with Dlib",
      "SVM model training on collected encodings",
      "Real-time recognition for attendance marking",
      "Attendance reports (by date, by student, daily summaries)",
      "Admin dashboard to manage students and records",
    ],
    category: "AI/ML",
    github: "https://github.com/yourusername/ai-attendance",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=500&fit=crop"
  },
  {
    title: "E-Commerce Web Platform",
    description: "A scalable online shopping platform with modern features.",
    tech: ["Django REST Framework", "React", "Stripe", "JWT"],
    features: [
      "Product listings, search, and advanced filters",
      "Stripe payment gateway integration",
      "JWT authentication system",
      "Shopping cart + checkout system",
      "Admin product management dashboard",
      "Modern React UI with responsive design",
    ],
    category: "Full-Stack",
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop"
  },
  {
    title: "Expense Tracker Application",
    description: "A fpersonal finance management platforms frontend.",
    tech: ["JavaScript", "React", "Figma"],
    features: [
      "Add, edit, delete expenses and income",
      "Smart categorization + filtering",
      "JWT authentication",
      "Reports and charts with data visualization",
      "Predictive insights for spending habits",
      "Dashboard with balance and recent transactions",
    ],
    category: "Front-end",
    github: "https://github.com/yourusername/expense-tracker",
    demo: "https://expense-demo.com",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop"
  },
  {
    title: "Event Management Website",
    description: "A web app allowing users to manage and track events.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    features: [
      "Event listing + detailed event pages",
      "Interactive calendar with event markers",
      "User authentication system",
      "Event creation and management",
      "Automatic ticket generation",
      "Mobile-responsive UI",
    ],
    category: "Full-Stack",
    github: "https://github.com/yourusername/event-management",
    demo: "https://events-demo.com",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop"
  },
];

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  const getCategoryColor = (category) => {
    switch(category) {
      case "AI/ML":
        return "from-blue-500 to-cyan-500";
      case "Full-Stack":
        return "from-purple-500 to-pink-500";
      default:
        return "from-blue-500 to-cyan-500";
    }
  };

  const getCategoryBadgeColor = (category) => {
    switch(category) {
      case "AI/ML":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "Full-Stack":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      default:
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-slate-800/90 hover:bg-slate-700 text-white rounded-full p-2 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project Image */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-20`}></div>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent h-32"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <span className={`${getCategoryBadgeColor(project.category)} px-3 py-1 rounded-lg text-sm font-semibold border inline-block mb-3`}>
                {project.category}
              </span>
              <h2 className={`text-3xl font-bold bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text text-transparent mb-3`}>
                {project.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white/5 text-gray-300 py-2 px-4 rounded-lg text-sm font-medium border border-white/10 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Key Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <span className="text-blue-400 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20 font-medium`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const getCategoryColor = (category) => {
    switch(category) {
      case "AI/ML":
        return "from-blue-500 to-cyan-500";
      case "Full-Stack":
        return "from-purple-500 to-pink-500";
      default:
        return "from-blue-500 to-cyan-500";
    }
  };

  const getCategoryBadgeColor = (category) => {
    switch(category) {
      case "AI/ML":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "Full-Stack":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      default:
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <>
      <section
        id="projects"
        className="flex items-center justify-center py-20 relative overflow-hidden"
      >
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Explore my portfolio of AI-powered applications, full-stack platforms, and intelligent systems
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectList.map((project, index) => (
                <div
                  key={index}
                  className="group relative h-full cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`}></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${getCategoryBadgeColor(project.category)} px-3 py-1 rounded-lg text-xs font-semibold border`}>
                        {project.category}
                      </span>
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-white/5 text-gray-300 py-1 px-3 rounded-lg text-xs font-medium border border-white/10 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="flex-grow mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        Key Features
                      </h4>
                      <ul className="space-y-1.5 text-gray-400 text-xs">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {project.features.length > 4 && (
                          <li className="text-blue-400 text-xs font-medium">
                            +{project.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* View Project Link */}
                    <div className="group/link flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors text-sm font-medium mt-auto">
                      View Details
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
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

export default Projects;