import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAward, FaCode, FaRocket, FaLightbulb, FaPlane, FaGamepad, FaMicrochip, FaStar, FaTrophy, FaMedal, FaGraduationCap, FaUserTie, FaCertificate } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: <FaAward className="text-4xl" />,
      title: 'Network & Cloud',
      description: 'AWS Certified, CCNA, Networking & Cloud Infrastructure',
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Full Stack Developer',
      description: 'React, Node.js, Python, MERN Stack Development',
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'DevOps Enthusiast',
      description: 'Ansible, CI/CD, Automation, Testing & Deployment',
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Quick Learner',
      description: 'Always eager to learn new technologies and best practices',
    },
  ]

  const hobbies = [
    {
      icon: <FaPlane className="text-3xl" />,
      title: 'Travelling',
      description: 'Exploring new places and cultures',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaMicrochip className="text-3xl" />,
      title: 'Tech Exploration',
      description: 'Staying updated with emerging technologies',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaGamepad className="text-3xl" />,
      title: 'Gaming',
      description: 'Strategy games and competitive gaming',
      color: 'from-red-500 to-orange-500',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gradient-to-br dark:from-dark-300 dark:via-dark-200 dark:to-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-dark-100 rounded-2xl p-8 shadow-xl border dark:border-blue-900/30">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Who I Am</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Network & Cloud Engineer at Cisco</span>, 
                  where I specialize in DevOps automation, deployment, and testing. My role involves building scalable infrastructure 
                  and automating workflows for seamless production deployments.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  With a strong foundation in full-stack development and cloud technologies, I bridge the gap between development 
                  and operations, ensuring robust and efficient systems.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-100 rounded-2xl p-8 shadow-xl border dark:border-blue-900/30">
                <h3 className="text-2xl font-bold mb-4 gradient-text">What I Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span><span className="font-semibold">Ansible Scripting & Automation:</span> Deploying production environments in customer VMs</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span><span className="font-semibold">CI/CD Pipelines:</span> Building and maintaining automated deployment workflows</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span><span className="font-semibold">Infrastructure as Code (IaC):</span> Managing cloud infrastructure programmatically</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span><span className="font-semibold">Testing & Quality Assurance:</span> Comprehensive testing to ensure reliable releases</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-green-500 text-xl mt-1">✓</span>
                    <span><span className="font-semibold">Full Stack Development:</span> React, Node.js, MongoDB, and AWS solutions</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Skills & Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-dark-100 rounded-2xl p-8 shadow-xl border dark:border-blue-900/30">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Technical Expertise</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Cloud & Networking</h4>
                    <div className="flex flex-wrap gap-2">
                      {['AWS', 'Azure', 'CCNA', '4G/5G', 'VPC', 'Load Balancers'].map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">DevOps & Automation</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Ansible', 'Docker', 'Jenkins', 'GitLab CI/CD', 'Terraform'].map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Node.js', 'Python', 'MongoDB', 'Django', 'Express.js'].map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-100 rounded-2xl p-8 shadow-xl border dark:border-blue-900/30">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Currently Learning</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Cisco DevNet Associate</span> - Network automation and programmability
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Advanced Kubernetes</span> - Container orchestration at scale
                    </span>
                  </div>
                </div>
              </div>

              {/* Hobbies Section */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-800 rounded-2xl p-8 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FaStar /> Beyond Work
                </h3>
                <div className="space-y-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                    >
                      <div className={`p-3 bg-gradient-to-r ${hobby.color} rounded-lg`}>
                        {hobby.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{hobby.title}</h4>
                        <p className="text-white/90 text-sm">{hobby.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-dark-100 dark:to-dark-200 
                           rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent dark:border-blue-900/30"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Key Achievements & Appreciations - Redesigned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="inline-flex items-center gap-3 mb-4"
              >
                <FaTrophy className="text-5xl text-yellow-500" />
                <h3 className="text-4xl md:text-5xl font-bold gradient-text">
                  Achievements & Recognition
                </h3>
              </motion.div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Milestones and appreciations earned through dedication and hard work
              </p>
            </div>

            {/* Professional Achievements - Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-8 shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="text-6xl mb-4">🌟</div>
                  <h4 className="text-2xl font-bold text-white mb-2">Manager's Appreciation</h4>
                  <p className="text-white/90 text-lg">80% increase in user engagement through Django Dashboard</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Cisco 2024</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-8 shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="text-6xl mb-4">🏆</div>
                  <h4 className="text-2xl font-bold text-white mb-2">Solutions Architect Recognition</h4>
                  <p className="text-white/90 text-lg">Excellence in Dashboard Development & Design</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Cisco 2024</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 p-8 shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="text-6xl mb-4">⚡</div>
                  <h4 className="text-2xl font-bold text-white mb-2">Fast Delivery</h4>
                  <p className="text-white/90 text-lg">Delivered 200+ comprehensive test cases in just 20 days</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Cisco 2024</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Academic & Certifications - Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-dark-100 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-blue-900/30 text-center"
              >
                <div className="flex justify-center mb-3">
                  <FaMedal className="text-5xl text-gray-400 dark:text-gray-500" />
                </div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1">Silver Medal</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">AKTU Tech Fest</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-dark-100 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-blue-900/30 text-center"
              >
                <div className="flex justify-center mb-3">
                  <FaGraduationCap className="text-5xl text-blue-500 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1">Scholarship</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">B.Tech Program</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-dark-100 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-blue-900/30 text-center"
              >
                <div className="flex justify-center mb-3">
                  <FaUserTie className="text-5xl text-purple-500 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1">Best Chairperson</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">DECO Committee</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-dark-100 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-blue-900/30 text-center"
              >
                <div className="flex justify-center mb-3">
                  <FaCertificate className="text-5xl text-green-500 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1">4 Certifications</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">AWS, CCNA, Salesforce</p>
              </motion.div>
            </div>

            {/* Inspirational Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="mt-8 text-center"
            >
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-dark-100 dark:to-dark-200 rounded-2xl border-2 border-blue-200 dark:border-blue-900/30">
                <p className="text-xl md:text-2xl font-semibold italic gradient-text">
                  "Eager to learn, ready to grow, committed to excellence."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
