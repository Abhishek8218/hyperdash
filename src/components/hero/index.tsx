"use client"

import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="bg-[url(/hero.png)] bg-cover bg-center sm:bg-center h-[90vh] flex items-center justify-center mt-24.5"
    >
      <div className="text-white text-center">
        <motion.button
          initial={{  opacity: 0 }}
          animate={{  opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.6,
         
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-2 max-sm:left-[34%] sm:left-[50%] sm:bottom-2 border border-white hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer text-white px-5 py-1.5 mt-4"
        >
          Test Drive
        </motion.button>
      </div>
    </motion.main>
  )
}

