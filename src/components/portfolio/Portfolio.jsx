import React from 'react'
import './portfolio.css'
import img1 from '../../asset/portfolio1.jpg'
import img2 from '../../asset/portfolio2.jpg'
import img3 from '../../asset/portfolio3.jpg'
import img4 from '../../asset/portfolio4.jpg'
import img5 from '../../asset/portfolio5.png'
import img6 from '../../asset/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: img1,
    title: 'title1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 2,
    image: img2,
    title: 'title2',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 3,
    image: img3,
    title: 'title3',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 4,
    image: img4,
    title: 'title4',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 5,
    image: img5,
    title: 'title5',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 6,
    image: img6,
    title: 'title6',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                  <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
              </article>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Portfolio
