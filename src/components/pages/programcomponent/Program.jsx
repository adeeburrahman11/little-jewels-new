import { useState } from 'react';
import './Program.css'
import Dialog from './Dialog';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    disable: false, 
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom',
});

const App = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className='outer-container'>
            <div className="header">
                <h1>Programs</h1>
                <div className="paragraph">
                <p>Welcome to our Random Paragraph Generator! Our Generator uses cutting edge technology to create unique and informative paragraph on a wide range of topics .. </p>
                </div>
            </div>
            <div className="cardsection">
                <div className="card-1" data-aos="slide-up"  data-aos-once="false" >
                    <img src="../../../assetss/boy1.png" alt="image not loaded" />
                    <h1>Pre - Nursery</h1>
                    <p>Age : 2+ <br />Children born on or <br /> before 31st <br />December, 2021</p>
                    <button className='program-button' type="button" onClick={openDialog}>Enroll</button>
                </div>
                <div className="card-2" data-aos="slide-up">
                    <img src="../../../assetss/boy2.png" alt="" />
                    <h1>Nursery</h1>
                    <p>Age : 2+ <br />Children born on or <br /> before 31st <br />December, 2021</p>
                    <button className='program-button' type="button" onClick={openDialog}>Enroll</button>
                </div>
                <div className="card-3" data-aos="slide-up">
                    <img src="../../../assetss/boy3.png" alt="" />
                    <h1>Lower Kindergarden</h1>
                    <p>Age : 2+ <br />Children born on or <br /> before 31st <br />December, 2021</p>
                    <button className='program-button' type="button" onClick={openDialog}>Enroll</button>
                </div>
                <div className="card-4" data-aos="slide-up">
                    <img src="../../../assetss/boy4.png" alt="" />
                    <h1>Upper Kindergarden</h1>
                    <p>Age : 2+ <br />Children born on or <br /> before 31st <br />December, 2021</p>
                    <button className='program-button' type="button" onClick={openDialog}>Enroll</button>
                </div>
                
                <div className="card-5" data-aos="slide-up">
                    <img src="../../../assetss/boy5.png" alt="" />
                    <h1>Standard 1</h1>
                    <p>Age : 2+ <br />Children born on or <br /> before 31st <br />December, 2021</p>
                    <button className='program-button' type="button" onClick={openDialog}>Enroll</button>
                </div>
            {/* <button className='button-end' type='button'>Learn More</button> */}

                {isDialogOpen && <Dialog onClose={closeDialog} />}
            </div>
            {/* <img className='image-13' src="../../../assetss/object1.png" alt="image not found" />
            <img className='image-23' src="../../../assetss/object2.png" alt="image not found" /> */}
        </div>
    )
}

export default App;
