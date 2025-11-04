import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaDownload } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend service
    setStatus('Message sent successfully! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(''), 5000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      value: 'yashch1077@gmail.com',
      link: 'mailto:yashch1077@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Phone',
      value: '+91 9456218599',
      link: 'tel:+919456218599',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Location',
      value: 'Bengaluru, India',
      link: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      title: 'LinkedIn',
      value: 'yashchaudhary05',
      link: 'https://in.linkedin.com/in/yashchaudhary05',
      color: 'from-blue-600 to-blue-800',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gradient-to-br dark:from-dark-100 dark:via-dark-200 dark:to-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, projects, or collaborations. 
            Feel free to reach out if you'd like to connect!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 
                               dark:from-dark-100 dark:to-dark-200 rounded-xl shadow-lg hover:shadow-xl 
                               transition-all duration-300 border dark:border-blue-900/30"
                  >
                    <div className={`p-4 bg-gradient-to-r ${info.color} rounded-lg text-white`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {info.title}
                      </p>
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/yashchaudhary05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800 dark:bg-gray-700/50 text-white rounded-lg shadow-lg 
                               hover:bg-gray-700 dark:hover:bg-gray-600/50 transition-all"
                  >
                    <FaGithub className="text-3xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://in.linkedin.com/in/yashchaudhary05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow-lg 
                               hover:from-blue-700 hover:to-cyan-700 transition-all"
                  >
                    <FaLinkedin className="text-3xl" />
                  </motion.a>
                </div>
              </div>

              {/* Download Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8"
              >
                <a
                  href="/Portfolio/Yash_Chaudhary_Resume.pdf"
                  download="Yash_Chaudhary_Resume.pdf"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r 
                             from-red-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg 
                             hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <FaDownload className="text-xl" />
                  Download My Resume
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-100 border border-gray-300 
                               dark:border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500
                               focus:border-transparent transition-all text-gray-900 dark:text-gray-100"
                    placeholder="Yash Chaudhary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-100 border border-gray-300 
                               dark:border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500
                               focus:border-transparent transition-all text-gray-900 dark:text-gray-100"
                    placeholder="yashch1077@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-100 border border-gray-300 
                               dark:border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500
                               focus:border-transparent transition-all text-gray-900 dark:text-gray-100"
                    placeholder="Cloud Infrastructure Consulting"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-100 border border-gray-300 
                               dark:border-blue-900/50 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500
                               focus:border-transparent transition-all resize-none text-gray-900 dark:text-gray-100"
                    placeholder="Hi Yash, I'd like to discuss a networking automation project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                             rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all 
                             duration-300 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 
                               rounded-lg text-center"
                  >
                    {status}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
