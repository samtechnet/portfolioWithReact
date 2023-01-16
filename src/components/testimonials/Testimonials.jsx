import React from 'react'
import './testimonials.css'
import AVTR1 from '../../asset/avatar1.jpg'
import AVTR2 from '../../asset/avatar2.jpg'
import AVTR3 from '../../asset/avatar3.jpg'
import AVTR4 from '../../asset/avatar4.jpg'

// import Swiper core and required modules
import { Navigation,Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
  name: 'Kevin Obinyan',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit deserunt dolores ex, expedita fugit aliquam dicta porro quod incidunt reprehenderit quas dolorem minus necessitatibus culpa eos accusamus delectus esse dolorum.'
  },
  {
    avatar: AVTR2,
  name: 'Stutern',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt dignissimos praesentium voluptatum quam sed earum rem id dolor illum, numquam, sit iusto temporibus! Inventore tenetur laborum quasi sed atque.'
  },
  {
    avatar: AVTR3,
  name: 'Oyindamola feyi',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eos quae odio minima, earum incidunt minus ratione assumenda dolores consequuntur, eligendi maiores pariatur. Ea, veritatis culpa pariatur eveniet tempora possimus!'
  },
  {
    avatar: AVTR4,
  name: 'faniran',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit deserunt dolores ex, expedita fugit aliquam dicta porro quod incidunt reprehenderit quas dolorem minus necessitatibus culpa eos accusamus delectus esse dolorum.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={50}
        slidesPerView={1}
        navigation
      pagination={{ clickable: true }}
     >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
