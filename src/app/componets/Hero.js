'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
// import { FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = ({ onQuizOpen }) => {
  const heroImages = [
    {
      src: '/images/hero/maasai-mara.webp',
      alt: 'Maasai Mara National Reserve',
      placeholder: '/images/hero/maasai-mara-placeholder.jpg'
    },
    {
      src: '/images/hero/diani-beach.webp',
      alt: 'Diani Beach',
      placeholder: '/images/hero/diani-beach-placeholder.jpg'
    },
    {
      src: '/images/hero/santorini.webp',
      alt: 'Santorini',
      placeholder: '/images/hero/santorini-placeholder.jpg'
    }
  ];

  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 bg-blue-800">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1000}
          className="w-full h-full"
        >
          {heroImages.map((image) => (
            <SwiperSlide key={image.src}>
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={85}
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL={image.placeholder}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Discover Your Perfect <span className="text-blue-400">Getaway</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            AI-powered travel recommendations tailored to your unique style
          </motion.p>
          
          {/* Quiz CTA Button */}
          <motion.button 
            onClick={onQuizOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center mx-auto text-lg font-medium"
          >
            Find Your Perfect Trip
            {/* <FiChevronRight className="ml-2" /> */}
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-8 h-8 border-r-2 border-b-2 border-white rotate-45"
        />
      </div>
    </section>
  );
};

export default Hero;