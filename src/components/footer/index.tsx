"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="text-white py-12"
    >
      <div className="container mx-auto px-4 md:px-28">
        <motion.div variants={itemVariants} className="flex flex-col items-start mb-8">
          <h2 className="text-2xl font-semibold mb-4">Subscribe to our newsletter</h2>
          <div className="w-full max-w-sm">
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center border-b border-white pb-2">
              <input
                type="email"
                placeholder="enter your email"
                className="bg-transparent outline-none text-white w-full placeholder-white"
              />
              <motion.button whileHover={{ scale: 1.2, x: 5 }} whileTap={{ scale: 0.9 }} className="ml-4 text-white">
                <ArrowRight size={24} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20 justify-between items-center text-sm">
          {[
            ["Air X", "Lexo Z", "Gravity 9"],
            ["Fleet", "Company", "Stories"],
            ["Purchasing", "Charging", "Insurance", "Service"],
            ["Spaces", "Investors", "Career", "Contact Us"],
          ].map((column, colIndex) => (
            <motion.div key={colIndex} variants={itemVariants} className={`${colIndex < 2 ? "space-y-8" : "space-y-4"}`}>
              {column.map((item, itemIndex) => (
                <motion.p key={itemIndex} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  {item}
                </motion.p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

