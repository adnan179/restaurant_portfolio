import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import images from "./images.js";
import './imgloop.css';
const ImgLoop = () =>{
  const [width,setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() =>{
    console.log(carousel.current.scrollWidth);
    setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
  },[]);
  return(
    <div className='app__imgslider'>
      <motion.div ref={carousel} 
      whileTap={{cursor: "grabbing"}}
      className="carousel">
        <motion.div drag = 'x' dragConstraints={{right:0,left:-width}}
         className="inner-carousel">
          {images.map(image =>{
            return(
              <motion.div  className="item" key={image}>
                <img src={image} alt='dish'/>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
};
export default ImgLoop;