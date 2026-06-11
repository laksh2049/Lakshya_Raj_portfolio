import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import lakshyaPhoto from "@/assets/lakshya-photo.png";
import lakshyaCV from "@/assets/Lakshya_Raj_CV.pdf";

/**
 * Tech-Forward Minimalism Design with Dark Skills Section
 * - Hero: Black background with two-column layout (text left, large photo right)
 * - Greeting text, bold headline, description, and CTA on left
 * - Large prominent photo on right side
 * - Messaging targets SDE, Data, and PM roles
 * - Minimal animations: fade-in-up for content, fade-in-down for image
 * - Electric blue (#0066ff) accents for interactive elements
 * - Dark slate background (slate-900/800) for skills section with blue borders
 * - Playfair Display for headings, Inter for body
 * - Card-based layout with technology logos and hover effects
 */

export default function Home() {
  const projects = [
    {
      name: "FADS - First-Attempt Delivery Score Prediction",
      duration: "March 2026 - April 2026",
      description: "End-to-end ML pipeline with ETL data engineering on logistics datasets, featuring geo, weather, and traffic features in a structured SQLite feature store.",
      tech: ["ML", "MLOps", "ETL", "LightGBM", "FastAPI", "Docker"],
      github: "https://github.com/laksh2049",
    },
    {
      name: "Seismic Fault Detection using U-Net",
      duration: "Feb 2026 - March 2026",
      description: "U-Net segmentation architecture for 9-class dense pixel labeling on 3D seismic volumes with over 10 million labeled voxels.",
      tech: ["Deep Learning", "PyTorch", "Computer Vision", "Geophysics"],
      github: "https://github.com/laksh2049/seismic-segmentation-unet",
    },
    {
      name: "Kavach AI - Voice Fraud & Deepfake Detection",
      duration: "Jan 2026 - Feb 2026",
      description: "3-model fusion inference pipeline combining HuBERT embeddings, Whisper ASR, and Sentence Transformer for voice fraud risk scoring.",
      tech: ["AI/ML", "HuBERT", "Whisper", "FastAPI", "Azure"],
      github: "https://github.com/laksh2049/kavach-ai",
    },
    {
      name: "Smart CloudOps Platform",
      duration: "Feb 2026 - March 2026",
      description: "Multi-cloud cost aggregation system ingesting AWS, Azure, and GCP billing APIs into unified normalized schema.",
      tech: ["Full Stack", "Cloud", "AWS", "Azure", "GCP"],
      github: "https://github.com/laksh2049/Smart-CloudOps-Platform",
    },
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      description: "Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.",
      logos: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      ],
    },
    {
      title: "Deep Learning & ML Frameworks",
      description: "Building and training neural networks with modern deep learning frameworks and machine learning libraries.",
      logos: [
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
        { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      ],
    },
    {
      title: "Data Engineering & Processing",
      description: "Designing and managing databases to ensure secure and efficient data storage and retrieval.",
      logos: [
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      ],
    },
    {
      title: "Backend & APIs",
      description: "Developing robust server-side logic and APIs to power dynamic and scalable web applications.",
      logos: [
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
        { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      ],
    },
    {
      title: "DevOps & MLOps",
      description: "Containerizing applications and managing deployment pipelines for production-ready systems.",
      logos: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      ],
    },
    {
      title: "Cloud Platforms",
      description: "Experienced in deploying and managing applications using modern cloud platforms and tools.",
      logos: [
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
        { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
      ],
    },
  ];

  const education = [
    {
      school: "Indian Institute of Technology Kharagpur",
      degree: "B.S. in Exploration Geophysics",
      duration: "2024 - 2028",
      gpa: "8.30/10",
    },
    {
      school: "New Holy Ganges Public School, Bihar",
      degree: "CBSE Class XII",
      duration: "2024",
      percentage: "89%",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Lakshya Raj</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black overflow-hidden py-20 sm:py-32 lg:py-40">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="space-y-6">
                {/* Greeting */}
                <p className="text-gray-400 text-base font-normal">
                  Hi, I'm Lakshya
                </p>
                
                {/* Main Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  Full-Stack Engineer & Data Specialist
                </h1>
                
                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed max-w-lg font-light">
                  Building end-to-end AI systems with expertise in backend engineering, data infrastructure, and product strategy. Passionate about scalable architectures, ML pipelines, and shipping features that matter. Currently at IIT Kharagpur.
                </p>
                
                {/* CTA Buttons */}
                <div className="pt-4 flex flex-wrap gap-6 items-center">
                  <button
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-white font-bold text-lg border-b-2 border-white hover:border-blue-400 hover:text-blue-400 transition-all duration-300 pb-2"
                  >
                    View My Work
                  </button>
                  <a
                    href={lakshyaCV}
                    download="Lakshya_Raj_CV.pdf"
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image - Large and Prominent */}
            <div className="flex justify-center lg:justify-end animate-fade-in-down">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={lakshyaPhoto}
                    alt="Lakshya Raj"
                    className="w-full max-w-md h-auto object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a Machine Learning Engineer with a passion for building end-to-end AI systems. My expertise spans from data engineering and feature engineering to model deployment and MLOps.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Currently pursuing a B.S. in Exploration Geophysics at IIT Kharagpur, I combine academic rigor with practical engineering to solve complex problems in AI and machine learning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently learning advanced machine learning techniques, system design for scalable applications, and backend engineering with focus on APIs and real-time infrastructure.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">Kharagpur, India</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-medium">IIT Kharagpur</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium">ML & AI Systems</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium text-primary">lakshyaraj.poddar@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.duration}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {t}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black border-t border-blue-500/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">Skills that fuel my passion</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">A comprehensive toolkit of technologies and frameworks I use to build scalable, production-ready AI systems.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">{category.description}</p>
                <div className="flex flex-wrap gap-4">
                  {category.logos.map((logo, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center w-14 h-14 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200 group cursor-pointer"
                      title={logo.name}
                    >
                      <img
                        src={logo.logo}
                        alt={logo.name}
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <Card key={idx} className="p-6 border-border">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{edu.school}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{edu.duration}</p>
                    <p className="font-medium">
                      {edu.gpa ? `GPA: ${edu.gpa}` : `${edu.percentage}`}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing ML projects, research opportunities, and innovative ideas. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/laksh2049"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/lakshya-raj-a2a5b8323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a
              href="mailto:lakshyaraj.poddar@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors font-medium"
            >
              <Mail className="h-5 w-5" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>© 2026 Lakshya Raj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
