




import React from 'react';
import { slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';import Typical from 'react-typical'


const styles = {
  slideInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
}
export  const TitleAnimated =() => {
  return( 
    <StyleRoot>
      <div className="test" style={styles.slideInLeft}> 
      
      <h1 className="block xl:inline text-7xl font-extrabold  text-black sm:text-7xl md:text-7xl mx-auto">
Increasing access 


<h3 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#fa8142] to-[#ff4088]">
    
    <Typical
  steps={['lowering costs', 5000, 'Improving health!', 5000]}
  loop={Infinity}
  wrapper="p"
/>
        </h3>
</h1>


      </div>
    </StyleRoot>
  )
}
