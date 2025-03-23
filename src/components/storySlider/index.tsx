"use client"

import type React from "react"
import Slider from "react-slick"
import Image from "next/image"
import { motion } from "framer-motion"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const cardData = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/story/Story 1 Img.png",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/story/Story 2 Img.png",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/story/Story 3 Img.png",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/story/Story 4 Img.png",
  },
]

export const StorySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-black p-8 md:pl-[8rem]"
    >
      <div>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-3xl font-light mb-8"
        >
          Our Stories
        </motion.h2>
        <div></div>
      </div>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className=""
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden text-white max-w-[320px]"
            >
              <Image
                src={card.imageUrl || "/placeholder.svg"}
                alt={card.title}
                width={320}
                height={330}
                className="w-[320] h-[330px] object-cover"
              />
              <div className="py-4 text-start">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-white mt-2">{card.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  )
}

interface ArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const SampleNextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props
  return (
    <div
    
      className={`${className} bg-white !text-4xl rounded-full block left-[75vw] md:left-[75vw] !top-[-70px] cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out p-2`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span className="text-white">→</span>
    </div>
  )
}

const SamplePrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props
  return (
    <div
     
      className={`${className} bg-white !text-4xl rounded-full block !left-[65vw] md:!left-[70vw] !top-[-70px] cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out p-2`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span className="text-white">←</span>
    </div>
  )
}

