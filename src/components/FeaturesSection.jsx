import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🐶", 
      title: "Инструкция ухода за  собакой",
      link: "https://giperzoo.by/blog/kak-uxazhivat-za-sobakami-polnyij-gid-dlya-vladelczev/",
      description: "Нажмите на этот текст для полной инструкции по уходу"
    },
    {
      icon: "😺",
      title: "Инструкция ухода за кошкой", 
      link:"https://www.purinaone.ru/cat/articles/new-owner-tips/kak-uhazhivat-za-koshkoj",
      description: "Нажмите на этот текст для полной инструкции по уходу"
    },
    {
      icon: "🐦",
      title: "Инструкция ухода за птицами",
      link:"https://czv.kz/sovetyi-po-uxodu-za-pticzami-v-domashnix-usloviyax.html",
      description: "Нажмите на этот текст для полной инструкции по уходу"
    }
  ]

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl font-bold mb-4"
        >
          Как мы можем обезопасить своих животных?
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600"
        >
          Мы предлагаем комплексное решение для зашиты ваших животных
        </motion.p>
      </motion.div>
      
      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            className="flex flex-col items-center p-6"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center" 
              style={{ 
                backgroundColor: index === 0 ? '#F1EFFD' : 
                               index === 1 ? '#FFE7E7' : 
                               '#FFF3E4'
              }}
            >
              <motion.div 
                variants={fadeIn('up', 0.5 * (index + 1))}
                className="text-3xl"
              >
                {feature.icon}
              </motion.div>
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className="text-2xl font-medium mb-3"
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.6 * (index + 1))}
              className="text-gray-500 text-center"
            >
             <a href={feature.link}> {feature.description}</a>
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.7)}
        className="text-center mt-12"
      >
       
      </motion.div>
    </motion.section>
  )
}

export default FeaturesSection