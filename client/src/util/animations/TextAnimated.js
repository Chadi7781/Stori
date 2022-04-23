




import React from 'react';
import { slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  slideInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
}

export  const TextAnimated =() => {
  return( 
    <StyleRoot>
      <div className="test" style={styles.slideInLeft}> 
      
      <p className="mt-8 text-base  sm:text-sm   text-gray-600 sm:mt-5  sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            <p className="text-left "> 
            Using the sensors provided with the application,
                we can detect 
                the patient health situation.
                Wise-Bot will ask you several questions according to your medical state. 
            </p>
            </p>
      
      </div>
    </StyleRoot>
  )
}
