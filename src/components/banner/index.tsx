"use client"

import { motion } from "framer-motion"

export const Banner = () => {
  return (
    <div className="">
      <div className="bg-[url(/bottom-banner.png)] bg-cover bg-no-repeat max-sm:bg-center py-28 h-[700px] flex max-sm:flex-col justify-between items-center w-full overflow-x-hidden gap-y-10 mx-auto lg:px-0 lg:pl-44 filter brightness-[90%] saturate-125">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white w-full pt-64 md:pt-40 px-4"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-medium mb-4"
          >
            Air X
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl font-medium mb-4"
          >
            Accelerate into a New Era
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex max-sm:flex-col space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black hover:border hover:border-white hover:bg-transparent cursor-pointer hover:text-white transition-all duration-300 ease-in-out px-11.5 py-3 font-semibold text-nowrap"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:border hover:border-white transition-all duration-300 ease-in-out px-11.5 py-3 font-semibold text-nowrap"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

