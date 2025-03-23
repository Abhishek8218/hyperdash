"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export const Showcase = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-white absolute top-14 max-sm:left-[10%] left-[24%] z-20 text-7xl font-[400] mb-8"
      >
        Air X
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full max-sm:max-w-[90vw] max-w-[980px] max-sm:h-[350px] h-[535px] mt-24"
      >
        <Image src="/showcase1.png" alt="Air X Car Interior" layout="fill" objectFit="cover" className="rounded-md" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-white absolute max-sm:top-[21.5%] top-[36.5%] max-sm:left-[5%] left-[18%] z-20 text-xl font-base mt-6"
      >
        Accelerate into a New Era
      </motion.div>

      <div className="flex max-sm:flex-col justify-between items-center w-full mt-20 gap-y-10 mx-auto lg:px-0 lg:pl-44">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white w-full lg:w-1/2 px-4"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4"
          >
            Lexo Z
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-light mb-4"
          >
            Accelerate into a New Era
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <p className="text-lg font-light mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
            <p className="text-lg font-light mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
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
              className="text-white px-11.5 py-3 hover:border hover:border-white transition-all duration-100 ease-in-out cursor-pointer font-semibold text-nowrap"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/3 h-[500px]"
        >
          <Image src="/showcase2.png" alt="Lexo Z Car" layout="fill" objectFit="cover" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white bg-[url(/showcase3.png)] py-28 flex max-sm:flex-col justify-between items-center w-full gap-y-10 mx-auto lg:px-0 lg:pl-44"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-black w-full lg:w-1/3 px-4"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4"
          >
            Air X
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-medium mb-4"
          >
            Accelerate into a New Era
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg font-light mb-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex max-sm:flex-col space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white border hover:border-black hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer px-11.5 py-3 font-semibold text-nowrap"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-black hover:border hover:border-black hover:text-black transition-all ease-in-out duration-300 cursor-pointer px-11.5 py-3 font-semibold text-nowrap"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

