import React from 'react'
import './AcademicsNav.css'
export default function AcademicsNav() {
  return (
    <>
      <div className="head">
        <h1>Academics & Beyond </h1>
        <p className='shadow'>Academics & Beyond</p>
      </div>
      <div className="sec1">
        <img src="images\Academics_Images\1stPic.jpg" alt="img1" />
        <h2>Our Ideology</h2>
        <hr />
        <p>Little Jewels is a home, full of love and affection to ensure that the children receive a wholesome environment for their physical, mental, emotional, cognitive and social development. Our aim is to encourage children to be self disciplined, innovative, caring, tolerant, honest and friendly all the while providing a secure and happy learning environment for learning and growing.</p>
        <img src="images\Academics_Images\2ndPic.jpg" alt="" />
        <p>In this manner, we strive to create a joyful, stress free and effective learning environment for the child. For us each child is special and different. At all times, we keep the self-esteem of the child upper most in our mind and try to do justice to all aspects of learning.</p>
      </div>
      <div className="sec2">
        <div className="wrapper">
          <article className="card-academics">
            <img
              className="card__background"
              src="images\Academics_Images\TEACHER LEARNING.JPG"
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">Teacher Learning Transaction</h2>
                <p className="card__description">
                  Our teaching methodology is a trans-disciplinary approach and derives a lot from the Montessori and Play Way methods. Every concept taught is intertwined with concepts of other subjects that make learning more effective and retentive. In this manner, we strive to create a joyful, stress free and effective learning environment for the child.
                </p>
              </div>
            </div>
          </article>
          <article className="card-academics">
            <img
              className="card__background"
              src="images\Academics_Images\trasndisciplinary.JPG"
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title" style={{fontSize:"1.4rem"}}>Transdisciplinary Home Projects</h2>
                <p className="card__description">
                  Our transdisciplinary home projects provide the foundation for children to become original thinkers, generous collaborators and learners for life. These home sheets create a unity of different disciplines ensuring that children learn beyond the curriculum, learn holistically and learn more readily.
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="wrapper">
          <article className="card-academics">
            <img
              className="card__background"
              src="images\Academics_Images\MULTI LEVEL.JPG"
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">Multilevel Learning</h2>
                <p className="card__description">
                Our multilevel learning strategies and classrooms ensure that no child becomes bored from a lack of challenge or disengaged because it is difficult . We strive to acknowledge and work with diverse learning styles and pace of children in the Foundational Years.
                </p>
              </div>
            </div>
          </article>
          <article className="card-academics">
            <img
              className="card__background"
              src="images\Academics_Images\STORY TELLING.JPG"
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title" style={{fontSize:"1.4rem"}}>Story Telling Integrated Pedagogy</h2>
                <p className="card__description">
                We use story telling as a pedagogical tool to open the minds of the children to cultural diversity and to fuel their power of imagination and creativity. Through story telling we weave together concepts from various subjects, values, life lessons while creating empathy and universal understanding through the experiences of others.
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="wrapper">
          <article className="card-academics">
            <img
              className="card__background"
              src="images\Academics_Images\ICT.JPG"
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">ICT Integrated Pedagogy</h2>
                <p className="card__description">
                Through our ICT integrated pedagogy we enhance the learning experience by providing environments that cater to different styles of learning. We notice that ICT integration in the learning strategies supports conceptual learning and promotes children's intellectual qualities through higher order thinking skills, problem solving and better communication skills.
                </p>
              </div>
            </div>
          </article>
          <article className="card-academics">
            <img
              className="card__background"
              src="images\Academics_Images\VALUE EDUCTAION.JPG"
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">Value Education</h2>
                <p className="card__description">
                Our process of value education is seamlessly woven into the curriculum. We aim at developing the children into sensible and responsible individuals with a strong character and values.
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="wrapper">
          <article className="card-academics">
            <img
              className="card__background"
              src="images\Academics_Images\MONTESSORI.JPG"
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">Montessori Activities</h2>
                <p className="card__description">
                We focus prominently on gross and fine motor skills development through our Montessori activities. Our activities are carefully thought out and carried out being mindful of a child's interest and developmental needs. Via these hands- on activities children learn through their senses.
                </p>
              </div>
            </div>
          </article>
          <article className="card-academics">
            <img
              className="card__background"
              src="images\Academics_Images\Assesment.JPG"
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">Assessment</h2>
                <p className="card__description">
                Our assessment pattern is primarily diagnostic in nature , is microskill based and is continuous and comprehensive. Every aspect of the child's development is assessed through a variety of tools and techniques. A comprehensive report is provided to the parent at regular intervals and intervention is done when the need is seen.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}