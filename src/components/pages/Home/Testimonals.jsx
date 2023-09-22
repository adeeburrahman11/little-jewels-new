// import 'swiper/css';
// import 'swiper/css/navigation';

// import './Testimonals.css';

// // import required modules
// import { Navigation } from 'swiper/modules';

// export default function Testimonals() {
//     return (
//       <>
//         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//           <SwiperSlide>Slide 1</SwiperSlide>
//           <SwiperSlide>Slide 2</SwiperSlide>
//           <SwiperSlide>Slide 3</SwiperSlide>
//           <SwiperSlide>Slide 4</SwiperSlide>
//           <SwiperSlide>Slide 5</SwiperSlide>
//           <SwiperSlide>Slide 6</SwiperSlide>
//           <SwiperSlide>Slide 7</SwiperSlide>
//           <SwiperSlide>Slide 8</SwiperSlide>
//           <SwiperSlide>Slide 9</SwiperSlide>
//         </Swiper>
//       </>
//     );
//   }

import React from "react";
import "./Testimonals.css"; // You can create a separate CSS file for styling

function Testimonals(props) {
  return (
    <>
      <div>
        <h1 className="main-heading__testimonals">Testimonals</h1>
        <img
          className="testimonals-shadow"
          src="/src/assets/img/icons8-quote-left-480.png"
          alt="quotes"
          height="80px"
          width="80px"
        />
      </div>
      <div className="testimonals-wrapper">
        <div className="card-testimonals">
          <p>
            <img
              className="quotes-image"
              src="/src/assets/img/icons8-quote-left-512.png"
              alt="quotes"
              height="50px"
              width="50px"
            />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            accusamus dolor molestias deserunt, numquam nobis quisquam natus
            voluptatum provident reprehenderit expedita accusantium, dicta aut
            earum optio doloribus necessitatibus doloremque veniam? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Soluta necessitatibus
            deserunt omnis nihil pariatur iste vel quam ratione quisquam nulla
            modi dolores veniam vitae, molestiae mollitia, excepturi animi
            minima consequatur?
          </p>
          <section className="parents-corner">
            <h2 className="parents-review">
              <div className="border-style"></div>
              <p className="parents-name">Rohit Sharma</p>
            </h2>
          </section>
        </div>
      </div>
    </>
  );
}

export default Testimonals;
