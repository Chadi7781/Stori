




import React from 'react';
import { slideInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInUp, 'slideInUp')
  }
}

const borderButton  = {
  border: '1px solid #000', 

}

export  const ButtonAnimated =() => {
  return( 
    <StyleRoot>
      <div className="test" style={styles.bounce}> 
      
         
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <button class="mt-6 px-8 py-4 rounded-full font-normal tracking-wide 
          
          b-2 border-blue-500 bg-white
          text-black  hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out" style={borderButton}>
              Get Started
            </button>
          
         
        </div>
      </div>
      
      
    </StyleRoot>
  )
}
