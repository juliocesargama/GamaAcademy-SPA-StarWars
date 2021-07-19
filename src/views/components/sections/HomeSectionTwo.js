import BackgroundTwo from "../../../assets/images/background/bg2.jpg";
import vader from "../../../assets/images/elements/vader.png";
import footer from '../footer';

let textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. In aliquam sem fringilla ut morbi tincidunt augue 
interdum velit. Placerat orci nulla pellentesque dignissim. Id faucibus nisl tincidunt eget nullam.
</br></br> 
Amet purus gravida quis blandit. Sagittis vitae et leo duis ut diam quam. Ultricies integer quis 
auctor elit sed vulputate mi. Amet nisl suscipit adipiscing bibendum est ultricies. Venenatis lectus 
magna fringilla urna porttitor rhoncus dolor purus. Enim diam vulputate ut pharetra sit amet 
aliquam id. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt.`

let HomeSectionTwo = `
     <section id="section-two" class="section background--two" style="background-image: url(${BackgroundTwo})">
          <div class="container block-section">
               <div class="block-section--two">
                    <img src="${vader}" alt="Darth Vader"/>
                    
                    <div class="text-block--two">
                         <p>${textContent}</p>
                    </div>  
               </div>
               <div class="block-section">
                    ${footer}
               </div>
          </div>     
    </section>`;

export default HomeSectionTwo;