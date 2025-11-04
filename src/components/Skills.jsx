import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaAws, FaReact, FaNode, FaPython, FaDocker, FaGithub, FaLinux,
  FaDatabase, FaJenkins, FaChevronLeft, FaChevronRight
} from 'react-icons/fa'
import { 
  SiMongodb, SiExpress, SiMysql, SiPostgresql, SiJavascript, 
  SiTailwindcss, SiAnsible, SiKubernetes, SiTypescript, SiCisco
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentCertIndex, setCurrentCertIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward

  const skillCategories = [
    {
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 90 },
        { name: 'Docker', icon: <FaDocker />, level: 85 },
        { name: 'Jenkins', icon: <FaJenkins />, level: 60 },
        { name: 'Ansible', icon: <SiAnsible />, level: 75 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 60 },
        { name: 'Linux', icon: <FaLinux />, level: 85 },
      ],
    },
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 88 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 60 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
        { name: 'HTML/CSS', icon: <FaReact />, level: 95 },
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 83 },
        { name: 'Express.js', icon: <SiExpress />, level: 80 },
        { name: 'Python', icon: <FaPython />, level: 82 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 77 },
        { name: 'MySQL', icon: <SiMysql />, level: 75 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 73 },
      ],
    },
    {
      title: 'Tools & Others',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git/GitHub', icon: <FaGithub />, level: 90 },
        { name: 'CI/CD', icon: <FaJenkins />, level: 85 },
        { name: 'Microservices', icon: <FaDocker />, level: 80 },
        { name: 'REST APIs', icon: <FaDatabase />, level: 88 },
      ],
    },
  ]

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Designing and deploying scalable, highly available systems on AWS',
      icon: <FaAws className="text-6xl" />,
      color: 'from-orange-400 to-red-500',
    },
    {
      name: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco',
      date: '2024',
      description: 'Network fundamentals, IP connectivity, and network security',
      icon: <SiCisco className="text-6xl" />,
      color: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'Salesforce AI Specialist',
      issuer: 'Salesforce',
      date: '2024',
      description: 'AI-powered solutions and intelligent automation',
      icon: '⚡',
      color: 'from-purple-400 to-pink-500',
    },
    {
      name: 'Salesforce AI Associate',
      issuer: 'Salesforce',
      date: '2024',
      description: 'Foundational AI concepts and implementation',
      icon: '🌟',
      color: 'from-indigo-400 to-purple-500',
    },
  ]

  // Auto-rotate certifications every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentCertIndex((prev) => (prev + 1) % certifications.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextCert = () => {
    setDirection(1)
    setCurrentCertIndex((prev) => (prev + 1) % certifications.length)
  }

  const prevCert = () => {
    setDirection(-1)
    setCurrentCertIndex((prev) => (prev - 1 + certifications.length) % certifications.length)
  }

  const goToCert = (index) => {
    setDirection(index > currentCertIndex ? 1 : -1)
    setCurrentCertIndex(index)
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gradient-to-br dark:from-dark-300 dark:via-dark-200 dark:to-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-dark-100 dark:border dark:border-blue-900/30 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${category.color} text-white rounded-xl p-5 mb-8`}>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl text-blue-600 dark:text-blue-400">
                            {skill.icon}
                          </span>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mt-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
              Professional Certifications
            </h3>
            
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentCertIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -300 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 
                           rounded-2xl p-12 text-white shadow-2xl min-h-[400px] flex items-center justify-center"
                >
                  <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-8xl mb-6 flex justify-center"
                    >
                      {typeof certifications[currentCertIndex].icon === 'string' 
                        ? certifications[currentCertIndex].icon 
                        : <div className="text-white">{certifications[currentCertIndex].icon}</div>
                      }
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-3xl md:text-4xl font-bold mb-4"
                    >
                      {certifications[currentCertIndex].name}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-xl mb-2 opacity-90"
                    >
                      {certifications[currentCertIndex].issuer}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-lg mb-4 opacity-80"
                    >
                      {certifications[currentCertIndex].date}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-lg opacity-90 leading-relaxed"
                    >
                      {certifications[currentCertIndex].description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevCert}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 dark:bg-black/30 backdrop-blur-md 
                         rounded-full hover:bg-white/30 dark:hover:bg-black/50 transition-all z-10"
                aria-label="Previous certification"
              >
                <FaChevronLeft className="text-2xl text-white" />
              </button>
              <button
                onClick={nextCert}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 dark:bg-black/30 backdrop-blur-md 
                         rounded-full hover:bg-white/30 dark:hover:bg-black/50 transition-all z-10"
                aria-label="Next certification"
              >
                <FaChevronRight className="text-2xl text-white" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCert(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCertIndex 
                      ? 'bg-blue-600 dark:bg-cyan-400 w-8' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                  }`}
                  aria-label={`Go to certification ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '4', label: 'Certifications' },
              { number: '15+', label: 'Technologies' },
              { number: '5+', label: 'Major Projects' },
              { number: '7+', label: 'Months @ Cisco' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-dark-100 dark:to-dark-200 
                           rounded-xl shadow-lg border dark:border-blue-900/30"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
