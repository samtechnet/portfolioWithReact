import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>MY Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill  className='experience_detail-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon'/>
              <div>
              <h4>Boostrap</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
          </div>   
        </div>
        {/* End of Frontend */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon'/>
              <div>
              <h4>Nodejs</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon' />
              <div>
              <h4>TypeScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermidiate</small>
             </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon'/>
              <div>
              <h4>PostgresSQL</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon'/>
              <div>
              <h4>Jasmine</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            
            
          </div>
          
        </div>
      </div>
        
    </section>
  )
}

export default Experience