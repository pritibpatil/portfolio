import React from 'react'
import './testmonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Priyanka</h5>
          <small className='client__review'>
            Beyond technical expertise, Priti is a fantastic team player. She collaborated smoothly with designers and backend developers to build a scalable and visually appealing platform. Had a really great time to work together.
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar Two" />
          </div>
          <h5 className='client__name'>Pranavi</h5>
          <small className='client__review'>
            Thanks to Priti's front-end development skills, our website performance improved significantly. Creative, detail-oriented, and highly efficient, delivers exceptional front-end solutions that enhance user experience and business growth.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials