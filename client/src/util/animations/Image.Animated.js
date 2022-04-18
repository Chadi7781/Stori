




import React from 'react';
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  zoomIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}

export  const ImageAnimated =() => {
  return( 
    <StyleRoot>
      
      <div className="lg:absolute lg:inset-y-1 mt-24  lg:right-0 lg:w-1/2 " style={styles.zoomIn}>
       <img
          className=" hero-picture object-contain  h-2/3 w-full mt-1 mb-8"  
          src="assets/images/hero-home.jpg" /> 
   
      </div>
    </StyleRoot>
  )
}
