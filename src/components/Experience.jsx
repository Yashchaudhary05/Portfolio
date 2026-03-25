import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendar, FaCheckCircle } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Software Engineer Trainee',
      company: 'Cisco',
      location: 'Bengaluru, India',
      period: 'April 2025 - Present (1+ year)',
      type: 'Full-time',
      achievements: [
        'Designed and implemented an AI-powered KPI anomaly detection and observability system using GPT-4.1 with structured prompt engineering, improving user engagement by 80%',
        'Architected guard-railed AI workflows with SQL-safe query generation, context-aware retrieval, and controlled prompt pipelines for secure data access',
        'Built an AI-driven root cause analysis (RCA) pipeline leveraging MongoDB-based context queries and parametric prompting for automated insight generation',
        'Developed a natural language interface for querying system metrics, enabling dynamic filtering and contextual insights from telemetry data',
        'Delivered 200+ test cases and executed 1000+ regression tests in production-like environments, ensuring system stability and reliability',
        'Automated Method of Procedure (MOP) workflows using Ansible, reducing manual operational steps by 50+ commands per workflow',
        'Co-designed a day-2 operations dashboard for database cleanup, routing, and onboarding, improving operational visibility',
        'Recognized in Connected Cisco for contributions to AI system design and automation',
        'Awarded YubiKey access as one of the youngest team members based on performance and reliability',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cloud Intern',
      company: 'SSDN Technologies Pvt Ltd.',
      location: 'Remote',
      period: 'August 2024 - December 2024',
      type: 'Internship',
      achievements: [
        'Deployed microservices on AWS using EC2, S3, RDS, and Lambda, improving scalability and service availability',
        'Built CI/CD pipelines using Jenkins and GitHub Actions, enabling automated build, test, and deployment workflows',
        'Reduced manual deployment effort through pipeline automation, improving consistency and delivery speed',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gradient-to-br dark:from-dark-100 dark:via-dark-200 dark:to-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full 
                            bg-gradient-to-b from-red-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-12 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-dark-100 dark:border dark:border-purple-900/30 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${exp.color} text-white rounded-xl p-4 mb-4`}>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-lg font-semibold opacity-90">{exp.company}</p>
                    </div>

                    {/* Period & Location */}
                    <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendar />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 
                                     rounded-full text-xs font-semibold border dark:border-red-800/50">
                        {exp.type}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} 
                               flex items-center justify-center shadow-lg z-10`}
                  >
                    <FaBriefcase className="text-white text-2xl" />
                  </motion.div>
                </div>

                {/* Empty Space */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
