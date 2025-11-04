import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/yashchaudhary05', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://in.linkedin.com/in/yashchaudhary05', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:yashch1077@gmail.com', label: 'Email' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-gradient-to-br dark:from-dark-400 dark:via-dark-300 dark:to-dark-200 text-white py-12 border-t dark:border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold gradient-text mb-4"
            >
              Yash Chaudhary
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Network & Cloud Engineer | Full Stack Developer | DevOps Specialist
            </p>
            <p className="text-gray-500 text-sm">
              Building innovative solutions with cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 dark:bg-dark-100 rounded-lg hover:bg-gradient-to-r 
                             hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 
                             border dark:border-blue-900/30"
                  aria-label={social.label}
                >
                  <span className="text-2xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm">📍 Bengaluru, India</p>
              <p className="text-gray-400 text-sm">📧 yashch1077@gmail.com</p>
              <p className="text-gray-400 text-sm">📱 +91 9456218599</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 dark:border-blue-900/30 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm text-center">
              &copy; {currentYear} Yash Chaudhary. All rights reserved.
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 
                       hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold 
                       shadow-lg transition-all duration-300"
          >
            ↑ Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
