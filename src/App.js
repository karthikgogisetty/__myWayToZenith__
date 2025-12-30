import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const experiences = [
    {
      role: "Senior Machine Learning Engineer",
      company: "IDfy",
      period: "Oct 2025 - Present",
      description: "Spearheading AI-powered fraud detection initiatives across KYC & KYB workflows.",
      achievements: [
        "Improving detection precision by 20% and reducing manual review overhead by 35%.",
        "Architecting scalable ML infrastructure leveraging LLMs, computer vision, and NLP.",
        "Leading technical roadmap planning and sprint execution."
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "IDfy", 
      period: "Jul 2023 - Oct 2025",
      description: "Engineered and deployed production-grade AI systems for classification and verification.",
      achievements: [
        "Engineered and deployed Shop AI API, a merchant classification system with 90% accuracy.",
        "Built document tampering detection service with 95% precision and 90% recall.",
        "Optimized Information Extraction APIs for Southeast Asian markets, reducing latency by 8 seconds.",
        "Automated support workflows using LLM-powered agents, accelerating resolution by 3x."
      ]
    },
    {
      role: "Technology Intern (Machine Learning)",
      company: "IDfy",
      period: "Jan 2023 - Jul 2023",
      description: "Conducted benchmarking and developed MLOps infrastructure.",
      achievements: [
        "Achieved 92% mAP for production deployment using YOLO and Faster R-CNN.",
        "Improved PII masking accuracy from 89% to 99% for CKYC verification.",
        "Implemented MLOps infrastructure across 10+ production projects."
      ]
    },
    {
      role: "Mechatronics Intern",
      company: "InfinityX Innovations",
      period: "Jun 2022 - Aug 2022",
      description: "Developed embedded automation systems for battery management.",
      achievements: [
        "Developed embedded systems using Arduino and Raspberry Pi for real-time control.",
        "Designed and tested IoT-enabled hardware-software interfaces for autonomous BMS."
      ]
    }
  ];

  const skills = [
    {
      category: "AI/ML",
      items: ["LLMs", "Computer Vision", "NLP", "RAG", "Agentic Workflows", "Deep Learning", "MLOps"]
    },
    {
      category: "Languages", 
      items: ["Python", "C++", "SQL", "JavaScript", "TypeScript"]
    },
    {
      category: "Cloud & DevOps",
      items: ["GCP", "AWS", "Kubernetes", "Docker", "Vertex AI", "CI/CD"]
    },
    {
      category: "Tools & Frameworks",
      items: ["PyTorch", "TensorFlow", "Hugging Face", "FastAPI", "React", "Git"]
    }
  ];

  const projects = [
    {
      name: "Shop AI",
      description: "Production merchant image classification system achieving 90% accuracy, processing 100K+ images monthly.",
      technologies: ["Computer Vision", "Classification", "Production ML"]
    },
    {
      name: "Forgery Detection Service",
      description: "High-precision document tampering detection service with 95% precision, integrated into core identity verification pipelines.",
      technologies: ["Deep Learning", "Forgery Detection", "CV"]
    },
    {
      name: "Document OCR",
      description: "Multilingual information extraction system for Southeast Asian markets with 15% accuracy improvement and 8s latency reduction.",
      technologies: ["NLP", "OCR", "Information Extraction"]
    },
    {
      name: "Document Validation",
      description: "In-house classifiers using YOLOv8 models for document identification and version detection. Features LLM fallback for unrecognized document types.",
      technologies: ["Computer Vision", "YOLOv8", "LLMs"]
    },
    {
      name: "DSL Generator Bot",
      description: "Designed an LLM-based tool to automate orchestrator workflow creation, reducing configuration time by 70%.",
      technologies: ["LLM", "Python", "Automation"]
    },
    {
      name: "Melanoma Skin Cancer Classification",
      description: "Built deep learning models for melanoma detection using 3,000+ dermatoscopic images with data augmentation.",
      technologies: ["Deep Learning", "Computer Vision", "PyTorch"]
    }
  ];

  
  const articles = [
    {
      id: 1,
      title: "Schrödinger's Cat Lives Inside Your Neural Network",
      summary: "A deep dive into superposition - exploring how quantum concepts manifest in neural networks and machine learning models.",
      link: "https://medium.com/@karthikgogisetty/schrödingers-cat-lives-inside-your-neural-network-a-deep-dive-into-superposition-f5a5ce164c7f",
      publishedDate: "2024-12-30"
    },
    {
      id: 2,
      title: "Geometry of Superposition inside a Neural Network",
      summary: "Coming soon - Second article exploring the geometry of contents & concepts of first article in a more mathematically rigorous way.",
      link: "#",
      publishedDate: null
    }
  ];

  const profile = {
    name: "Karthik Gogisetty",
    title: "Senior Machine Learning Engineer",
    summary: "Senior AI Engineer with 3+ years of experience in orchestrating production-grade AI/ML platforms and intelligent automation solutions. Expert in building and deploying production-grade AI systems at scale across computer vision, NLP, and generative AI.",
    email: "karthikgogisetty@gmail.com",
    githubUrl: "https://github.com/karthikgogisetty",
    linkedinUrl: "https://www.linkedin.com/in/karthik-gogisetty-a6772915b/"
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-zinc-800 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 md:px-6 md:py-4">
          {/* Mobile Layout */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <img 
                src="https://github.com/karthikgogisetty.png" 
                alt="KG"
                className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover border border-zinc-700 grayscale"
              />
              <span className="font-bold text-base md:text-lg bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">KG</span>
            </div>
            <div className="flex gap-3 md:gap-6 text-sm md:text-base">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#writing" className="text-muted-foreground hover:text-foreground transition-colors">Writing</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center relative px-6 pt-24 md:pt-20">
      <div id="about" className="scroll-mt-32 md:scroll-mt-24">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="container max-w-5xl mx-auto">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col items-center text-center space-y-8 md:hidden">
            {/* Profile Picture */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <img 
                  src={`${profile.githubUrl}.png`} 
                  alt={profile.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-zinc-900 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-mono mb-6">
                Hello, I'm
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 leading-tight pb-2">
                {profile.name}
              </h1>
              <h2 className="text-lg text-zinc-400 mb-6 font-light">
                {profile.title}
              </h2>
              <p className="text-zinc-500 text-base max-w-lg mb-8 leading-relaxed">
                {profile.summary}
              </p>

              <div className="flex flex-wrap gap-4 justify-center relative z-10">
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer">
                  <Github size={20} />
                </a>
                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer">
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:karthikgogisetty@gmail.com?subject=Hello%20from%20Portfolio" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:karthikgogisetty@gmail.com?subject=Hello%20from%20Portfolio';
                  }}
                  className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden md:grid grid-cols-2 gap-12 items-center">
            {/* Text Content - Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-mono mb-6">
                Hello, I'm
              </div>
              <h1 className="text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 leading-tight pb-2">
                {profile.name}
              </h1>
              <h2 className="text-xl text-zinc-400 mb-6 font-light">
                {profile.title}
              </h2>
              <p className="text-zinc-500 text-lg max-w-lg mb-8 leading-relaxed">
                {profile.summary}
              </p>

              <div className="flex flex-wrap gap-4 relative z-10">
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer">
                  <Github size={20} />
                </a>
                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer">
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:karthikgogisetty@gmail.com?subject=Hello%20from%20Portfolio" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:karthikgogisetty@gmail.com?subject=Hello%20from%20Portfolio';
                  }}
                  className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>

            {/* Profile Picture - Right */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 flex justify-end"
            >
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <img 
                  src={`${profile.githubUrl}.png`} 
                  alt={profile.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-zinc-900 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-zinc-900/30 scroll-mt-32 md:scroll-mt-24">
        <div className="container max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Experience</h2>
            <p className="text-muted-foreground max-w-2xl">My professional journey and career highlights.</p>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-1 w-20 bg-primary mt-6 rounded-full origin-left"
            />
          </motion.div>
          <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
            {experiences.map((role, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{role.role}</h3>
                    <span className="text-lg text-primary/80">{role.company}</span>
                  </div>
                  <span className="text-sm font-mono text-zinc-500 mt-2 sm:mt-0 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 w-fit">
                    {role.period}
                  </span>
                </div>

                <p className="text-zinc-400 mb-4 italic">{role.description}</p>
                
                <ul className="space-y-2">
                  {role.achievements.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 scroll-mt-32 md:scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">A selection of projects I've worked on.</p>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-1 w-20 bg-primary mt-6 rounded-full origin-left"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-zinc-800 text-zinc-400 group-hover:text-primary transition-colors">
                      <Folder size={24} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-mono text-zinc-500 px-2 py-1 rounded bg-zinc-950/50 border border-zinc-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl">Technologies and tools I work with.</p>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-1 w-20 bg-primary mt-6 rounded-full origin-left"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-zinc-800"
              >
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-400 hover:text-foreground hover:border-zinc-600 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-24 px-6 scroll-mt-32 md:scroll-mt-24">
        <div className="container max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Writing</h2>
            <p className="text-muted-foreground max-w-2xl">Coming soon - Thoughts on technology, AI, and software engineering.</p>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-1 w-20 bg-primary mt-6 rounded-full origin-left"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {articles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex items-center justify-between p-6 rounded-xl bg-zinc-900/20 hover:bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-1 line-clamp-1">{article.summary}</p>
                </div>
                <div className="flex items-center gap-6 ml-4">
                  <span className="text-xs font-mono text-zinc-600 hidden sm:block">
                    {article.publishedDate ? new Date(article.publishedDate).toLocaleDateString() : 'Recent'}
                  </span>
                  <ExternalLink className="text-zinc-600 group-hover:text-primary transition-colors" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-900 bg-black">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-zinc-400 text-sm">
              Karthik Gogisetty
            </p>
            <p className="text-zinc-500 text-xs mt-1">
              Built with React, Tailwind & Framer Motion
            </p>
          </div>
          <div className="text-right">
            <p className="text-zinc-400 text-xs italic font-light">
              "Crafting intelligence, one line at a time"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}