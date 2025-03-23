"use client"
import { motion } from "framer-motion"

const CarSpecifications = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  }

  return (
    <div className="text-white">
      <div className="bg-black relative flex flex-col bg-[url(/feature.png)] h-[800px] md:flex-row justify-end md:pr-[10%] x;:pr-[20%] items-center md:space-x-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-sm:absolute top-[15%] space-y-10"
        >
          <motion.h3 variants={fadeInUp} className="max-sm:text-start text-xl">
            Model Air X Specification
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-2 text-left md:grid-cols-2 gap-10 md:gap-24 md:text-left max-w-3xl mx-auto"
          >
            <div className="space-y-16 text-[18px] font-light">
              {[
                { label: "Range (EPA est.)", value: "Up to 300 miles" },
                { label: "Peak Power", value: "400 hp" },
                { label: "Towing", value: "2000 pounds" },
                { label: "Drag Coefficient", value: "0.28 cd" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="font-light">{item.label}</p>
                  <p>{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-16 text-[18px] font-light">
              {[
                { label: "Acceleration", value: "4.5s 0-60 mph" },
                { label: "Wheels", value: '19" or 20"' },
                { label: "Seating", value: "Up to 5" },
                { label: "Top Speed", value: "130 mph" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="font-light">{item.label}</p>
                  <p>{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center gap-y-16 px-4 py-8 pt-24"
      >
        {[
          { label: "Max Power", value: "1200+", unit: "hp" },
          { label: "0-60mph", value: "<2", unit: "sec" },
          { label: "Minutes to charge 200 miles", value: "12", unit: "mins" },
          { label: "EPA estimated range up to", value: "516", unit: "mi" },
        ].map((item, index) => (
          <motion.div key={index} variants={fadeInUp} className="space-y-8">
            <p className="text-xs">{item.label}</p>
            <motion.h3
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.2 + index * 0.1,
              }}
              className="text-5xl font-light"
            >
              {item.value}
            </motion.h3>
            <p className="text-4xl">{item.unit}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 justify-between">
          {[
            { src: "/grid/grid1.png", alt: "Impeccable Design", text: "Impeccable Design" },
            { src: "/grid/grid2.png", alt: "Elevated Performance", text: "Elevated Performance" },
            { src: "/grid/grid3.png", alt: "Great Interiors", text: "Great Interiors" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={item.src}
                alt={item.alt}
              />
              <p className="text-left mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[15%] py-20 px-10 justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/grid/grid4.png"
              alt="Impeccable Design"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start justify-start"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/grid/grid5.png"
              alt="Elevated Performance"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-2"
            >
              Drive a sustainable future
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-20 px-10 justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 justify-between">
              {[
                { src: "/grid/grid6.png", alt: "Impeccable Design", className: "md:items-end" },
                { src: "/grid/grid7.png", alt: "Elevated Performance", className: "md:items-start" },
                { src: "/grid/grid8.png", alt: "Impeccable Design", className: "md:items-end" },
                { src: "/grid/grid9.png", alt: "Elevated Performance", className: "md:items-start" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${item.className} justify-center`}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    src={item.src}
                    alt={item.alt}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/grid/grid10.png"
              alt="Elevated Performance"
              className=""
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default CarSpecifications

