import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Анна Ковалёва", 
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    text: "Нашла здесь отличную ветеринарную клинику для своего кота. Подсказали, к какому врачу лучше обратиться, и объяснили, как ухаживать после процедуры. Сервис очень помог!",
  },
  {
    id: 2,
    name: "Игорь Малышев",
    image: "https://randomuser.me/api/portraits/men/90.jpg", 
    text: "Большое спасибо команде! Благодаря вашим рекомендациям щенок стал гораздо спокойнее, научился базовым командам и перестал грызть мебель. Наконец-то есть результат!",
  },
  {
    id: 3,
    name: "Марина Васильева",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Очень удобно, что на сайте собраны проверенные клиники. Нашла врача рядом с домом за пару минут. Плюс получила советы по уходу за пожилой собакой — всё чётко и понятно.",
  },
  {
    id: 4,
    name: "Евгения Романова",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Обращалась из-за странного поведения кошки. Сервис дал подробные рекомендации по безопасности в доме и снижению стресса. Реально помогло — кошка стала спокойнее.",
  },
  {
    id: 5,
    name: "Светлана Лебедева",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Здорово, что здесь можно получить советы по воспитанию и понять, как правильно выстроить общение с животным. Наш кот перестал царапаться и стал контактнее. Спасибо!",
  },
  {
    id: 6,
    name: "Максим Дорофеев",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    text: "Пользуюсь сайтом уже месяц. Очень ценно, что можно быстро найти клинику, получить рекомендации по уходу и даже советы по безопасности на прогулках. Отличный сервис!",
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Что говорят наши клиенты
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600"
        >
          Реальные отзывы о нашем сервисе для животных
        </motion.p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
              <motion.div 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
              >
                <motion.div 
                  variants={fadeIn('down', 0.4 * (index + 1))}
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <motion.img
                    variants={fadeIn('up', 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <motion.div 
                  variants={fadeIn('up', 0.4 * (index + 1))}
                  className="flex justify-center mb-2"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span 
                      key={starIndex} 
                      variants={fadeIn('up', 0.1 * starIndex)}
                      className="text-blue-600"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.h3 
                  variants={textVariant(0.3)}
                  className="font-semibold text-xl mb-3"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p 
                  variants={fadeIn('up', 0.6 * (index + 1))}
                  className="text-gray-600"
                >
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button 
            variants={fadeIn('right', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
            variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
