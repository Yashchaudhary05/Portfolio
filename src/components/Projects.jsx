import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaLock } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const projects = [
    {
      title: 'Cisco Customer Dashboard',
      period: 'Apr 2025 - Present',
      description: 'Built a fully functioning customer interaction dashboard using Django framework that increased user engagement by 80%, replacing traditional CLI-generated files with an interactive web interface. (Cisco Confidential)',
      features: [
        '80% increase in user interaction',
        'Interactive graphs using Plotly and Dash',
        'Real-time data visualization and analytics',
        'Appreciated by Solutions Architect and Manager',
      ],
      tech: ['Django', 'Python', 'Plotly', 'Dash', 'HTML/CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      color: 'from-cyan-500 to-blue-600',
      githubLink: '',
      liveLink: '',
      confidential: true,
    },
    {
      title: 'AWS CSA C03 Practice Quiz Website',
      period: 'Sep 2024 - Nov 2024',
      description: 'Built a comprehensive web-based platform for AWS CSA C03 certification exam preparation with result tracking and performance analytics.',
      features: [
        'Interactive quiz interface with 500+ questions',
        'Real-time result tracking and analytics',
        'Deployed on AWS EC2 with Apache HTTP server',
        'High availability and scalable architecture',
      ],
      tech: ['AWS EC2', 'Apache', 'JavaScript', 'HTML/CSS'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      color: 'from-orange-500 to-red-600',
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'T2DM Diabetes Detection System',
      period: 'Sep 2023 - Jul 2024',
      description: 'Developed an AI-powered Type 2 Diabetes detection system using machine learning algorithms to predict diabetes risk with exceptional 99% accuracy.',
      features: [
        'Machine learning model with 99% accuracy',
        'Trained on comprehensive healthcare datasets',
        'User-friendly prediction interface',
        'Real-time risk assessment and recommendations',
      ],
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      color: 'from-green-500 to-teal-600',
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Social Media Dashboard',
      period: 'Feb 2024 - Apr 2024',
      description: 'Created a modern social media dashboard with dark mode toggle and responsive design, achieving a 20% increase in user engagement.',
      features: [
        'Dark mode toggle with smooth transitions',
        'Responsive CSS grid layouts',
        'AWS EC2 deployment with load balancers',
        '20% increase in user engagement',
      ],
      tech: ['React.js', 'CSS Grid', 'AWS EC2', 'Load Balancer'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      color: 'from-blue-500 to-purple-600',
      githubLink: '#',
      liveLink: '#',
    },
  ]

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gradient-to-br dark:from-dark-200 dark:via-dark-100 dark:to-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Explore my portfolio of innovative projects showcasing cloud computing, 
            full-stack development, and machine learning expertise.
          </p>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative min-h-[650px] md:min-h-[520px] overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Project Card */}
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-6 p-2">
                    {/* Image Side */}
                    <div className="relative overflow-hidden rounded-2xl group h-64 md:h-auto">
                      <img
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${projects[currentIndex].color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                          {projects[currentIndex].title}
                        </h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow">{projects[currentIndex].period}</p>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-between p-6 glass-effect rounded-2xl shadow-xl">
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                          {projects[currentIndex].description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2 text-lg">
                            <span className="text-2xl">⚡</span>
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {projects[currentIndex].features.map((feature, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                              >
                                <span className="text-green-500 mt-1 text-lg">✓</span>
                                <span className="leading-relaxed">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {projects[currentIndex].tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className="px-3 py-1.5 bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-900/30 dark:to-purple-900/30 
                                       text-red-800 dark:text-red-300 rounded-full text-xs font-semibold border border-red-200 dark:border-red-800/50"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="grid grid-cols-2 gap-4">
                        {projects[currentIndex].confidential ? (
                          <>
                            <div className="col-span-2 flex items-center justify-center gap-2 px-6 py-3 bg-gray-700/50 dark:bg-gray-800/50 
                                          text-gray-400 dark:text-gray-500 rounded-xl border-2 border-dashed border-gray-500/50 
                                          dark:border-gray-600/50 cursor-not-allowed">
                              <FaLock className="text-lg" />
                              <span className="font-medium">Cisco Confidential - Code & Demo Unavailable</span>
                            </div>
                          </>
                        ) : (
                          <>
                            {projects[currentIndex].githubLink && (
                              <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={projects[currentIndex].githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700/50 
                                         text-white rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600/50 transition-all shadow-lg font-medium"
                              >
                                <FaGithub className="text-lg" /> Code
                              </motion.a>
                            )}
                            {projects[currentIndex].liveLink && (
                              <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={projects[currentIndex].liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 
                                         text-white rounded-xl hover:shadow-xl transition-all shadow-lg font-medium"
                              >
                                <FaExternalLinkAlt /> Demo
                              </motion.a>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-black/50 backdrop-blur-md 
                       rounded-full shadow-lg hover:bg-white dark:hover:bg-black/70 transition-all z-10 group"
              aria-label="Previous project"
            >
              <FaChevronLeft className="text-xl md:text-2xl text-gray-800 dark:text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-black/50 backdrop-blur-md 
                       rounded-full shadow-lg hover:bg-white dark:hover:bg-black/70 transition-all z-10 group"
              aria-label="Next project"
            >
              <FaChevronRight className="text-xl md:text-2xl text-gray-800 dark:text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 h-3 bg-gradient-to-r from-red-600 to-purple-600 rounded-full'
                      : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer rounded-xl overflow-hidden relative h-32 shadow-lg transition-all ${
                  index === currentIndex ? 'ring-4 ring-red-500 dark:ring-purple-500' : ''
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} ${
                  index === currentIndex ? 'opacity-30' : 'opacity-50'
                } transition-opacity`}></div>
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <p className="text-white font-bold text-xs md:text-sm text-center drop-shadow-lg">
                    {project.title.length > 30 ? project.title.substring(0, 27) + '...' : project.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/yashchaudhary05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 
                       text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 
                       transition-all duration-300"
            >
              <FaGithub className="text-xl" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
