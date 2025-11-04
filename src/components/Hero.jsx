import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaCode, FaRocket } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import ImageWithSkeleton from './ImageWithSkeleton'

const Hero = () => {
  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: ['#3b82f6', '#06b6d4'],
      },
      links: {
        color: '#3b82f6',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 40,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-white dark:bg-gradient-to-br dark:from-dark-100 dark:via-dark-200 dark:to-dark-300">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 dark:bg-cyan-900/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-400 dark:bg-blue-800/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
        
        {/* Floating SVG Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-32 left-20 opacity-20 dark:opacity-10"
        >
          <FaCode className="text-blue-500 dark:text-blue-600 text-6xl" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-32 right-20 opacity-20 dark:opacity-10"
        >
          <FaRocket className="text-cyan-500 dark:text-cyan-600 text-6xl" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:order-2"
          >
            <div className="relative">
              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500/40 dark:border-cyan-500/40"
              ></motion.div>
              
              {/* Profile Picture - Clickable LinkedIn Link */}
              <motion.a
                href="https://in.linkedin.com/in/yashchaudhary05"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="relative block w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-dark-100 shadow-2xl shadow-blue-500/20 dark:shadow-blue-900/50 cursor-pointer"
              >
                <ImageWithSkeleton
                  src="/portfolio/profile.jpg"
                  alt="Yash Chaudhary"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
                {/* Overlay gradient on hover */}
                <motion.div
                  whileHover={{ opacity: 0.9 }}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-blue-500/50 to-transparent flex items-end justify-center pb-6"
                >
                  <p className="text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity">
                    View LinkedIn Profile
                  </p>
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <div className="text-center lg:text-left lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold">
              👋 Hi, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Yash Chaudhary</span>
          </motion.h1>

          {/* Titles with Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              <TypeAnimation
                sequence={[
                  'Network & Cloud Engineer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'DevOps Enthusiast',
                  2000,
                  'DevNet Aspirant',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Automation • Testing • Deployment • CCNA
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-none mb-8"
          >
            Network & Cloud Engineer at <span className="font-semibold text-blue-600 dark:text-blue-400">Cisco</span>, 
            specializing in DevOps automation, deployment, and testing. Passionate about building scalable infrastructure 
            and automating workflows for seamless production deployments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
          >
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View My Work
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-6 justify-center lg:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/yashchaudhary05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://in.linkedin.com/in/yashchaudhary05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:yashch1077@gmail.com"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScrollDown}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaChevronDown className="text-3xl text-gray-600 dark:text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
