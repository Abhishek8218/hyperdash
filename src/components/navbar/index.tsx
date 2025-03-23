"use client"

import { Menu } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileitemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        staggerChildren: 0.1,
        staggerDirection: -1, 
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="bg-[#1a1a1a] fixed top-0 left-0 w-full z-50 shadow-md"
    >
      <div className="flex justify-between items-center px-4 sm:px-20 text-white text-base h-[98px]">
        <motion.div className="hidden md:flex gap-5.5" variants={navVariants}>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="#"
            className="hover:text-gray-400 transition-colors"
          >
            Air X
          </motion.a>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="#"
            className="hover:text-gray-400 transition-colors"
          >
            Lexo Z
          </motion.a>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="#"
            className="hover:text-gray-400 transition-colors"
          >
            Gravity 9
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image alt="HyperDash" src="/Primary Logo.svg" height={23} width={118} />
        </motion.div>

        <motion.div className="hidden md:flex gap-5.5" variants={navVariants}>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="#"
            className="hover:text-gray-400 transition-colors"
          >
            Shop
          </motion.a>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="#"
            className="hover:text-gray-400 transition-colors"
          >
            Account
          </motion.a>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-md font-semibold"
          >
            <Menu size={24} />
          </motion.button>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} />
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1a1a1a] text-white text-lg px-4 py-4 overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {["Air X", "Lexo Z", "Gravity 9", "Shop", "Account"].map((item, index) => (
                <motion.a
                  key={index}
                  variants={mobileitemVariants}
                  href="#"
                  className="block py-2 hover:text-gray-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

