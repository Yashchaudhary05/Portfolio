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
      period: 'April 2025 - Present (7 months)',
      type: 'Full-time',
      achievements: [
        'Increased user interaction by 80% by developing a fully functioning dashboard for customers to interact with, replacing CLI-generated files',
        'Received appreciation from Solutions Architect and Manager via email for dashboard innovation and user experience improvements',
        'Tested and validated 200+ test cases in 20 days, receiving appreciation from Manager for exceptional quality assurance work',
        'Write Ansible scripts and configuration files for automated deployment of production environments in customer VMs',
        'Deploy and configure customer dashboard solutions in production environments using Infrastructure as Code (IaC)',
        'Improved user satisfaction by 15% through systematic testing and iterative refinement of the AT&T customer interface',
        'Optimized mobility services by deepening expertise in the 4G and 5G domains, enhancing service reliability',
        'Troubleshot critical data inconsistencies in customer dashboard by collaborating with backend and frontend teams',
        'Achieved CCNA certification and currently preparing for DevNet certification',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cloud Intern',
      company: 'SSDN Technologies Pvt Ltd.',
      location: 'Hybrid',
      period: 'August 2024 - December 2024',
      type: 'Internship',
      achievements: [
        'Deployed cloud applications on AWS EC2 instances and optimized infrastructure for cost and performance',
        'Automated deployment pipelines using Jenkins and GitHub Actions, reducing manual intervention',
        'Designed microservices architecture and integrated AWS services like RDS, S3, and Lambda',
        'Awarded Certificate of Appreciation for outstanding contribution to cloud infrastructure management',
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
