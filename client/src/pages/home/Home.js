import React from 'react'
import Typical from 'react-typical'

import {ImageAnimated} from  "../../util/animations/ImageAnimated";
import {ButtonAnimated} from  "../../util/animations/ButtonAnimated";
import { TitleAnimated } from '../../util/animations/TitleAnimated';
import { TextAnimated } from '../../util/animations/TextAnimated';


//hez

function Home() {
  return (

    <>         
        

    
   <main className="mt-40 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">



      <div className="sm:text-center lg:text-left">
    
            <TitleAnimated/>
           
      
            </div>

            <TextAnimated/>
            <ButtonAnimated/>

      
    


      


      
   
    </main> 
    <ImageAnimated/>
 
 
{/*    
    <section className="mt-56 md:mt-56 pb-20 p-24 relative bg-gray-100">
    <div class="justify-center text-center flex flex-wrap mt-4"><div class="w-full md:w-6/12 px-12 md:px-4">
    <h1 class="font-semibold text-4xl">Our Services</h1>
     </div></div>
      <div className="container mx-auto px-4">
         <div className="flex flex-wrap">
           <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
             <div className="relative flex flex-col min-w-0 break-word bg-white w-full mb-8 shadow-lg rounded-lg">
               
               <div className="px-4 py-4 flex-auto">
               <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full
               
               
               bg-gradient-to-r  from-blue-500 to-purple-500">
                 <i class="fas fa-stethoscope"></i></div>
               <h6 class="text-xl font-semibold">Diagonse</h6>
               <p class="mt-2 mb-4 text-slate-500">Divide details about your product or agency work into parts. 
               A paragraph describing a feature will be enough.</p>
               <button class="
             focus:ring-blue-700 text-sm font-semibold leading-none
             text-white focus:outline-none bg-gradient-to-r from-cyan-500 to-blue-500 border rounded hover:purple-pink-500 hover:to-purple-700 py-4 w-full 
             ease-linear transition-all duration-150" type="button">Read More</button>
               </div>
             </div>
           
            


           </div>
           <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
             <div className="relative flex flex-col min-w-0 break-word bg-white w-full mb-8 shadow-lg rounded-lg">
               <div className="px-4 py-4 flex-auto">
               <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full
               bg-gradient-to-r  from-blue-500 to-purple-500">
               <i class="fas fa-hospital"></i></div>
               <h6 class="text-xl font-semibold">Locations</h6>
               <p class="mt-2 mb-4 text-slate-500">Divide details about your product or agency work into parts. 
               A paragraph describing a feature will be enough.</p>
               <button class="
             focus:ring-blue-700 text-sm font-semibold leading-none
             text-white focus:outline-none bg-gradient-to-r from-cyan-500 to-blue-500 border rounded hover:purple-pink-500 hover:to-purple-700 py-4 w-full 
             ease-linear transition-all duration-150" type="button">Read More</button>
               </div>
             </div>
            


           </div>
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
             <div className="relative flex flex-col min-w-0 break-word bg-white w-full mb-8 shadow-lg rounded-lg">
               <div className="px-4 py-4 flex-auto">
               <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full
               bg-gradient-to-r  from-blue-500 to-purple-500">
               <i class="fas fa-hospital"></i></div>
               <h6 class="text-xl font-semibold">Locations</h6>
               <p class="mt-2 mb-4 text-slate-500">Divide details about your product or agency work into parts. 
               A paragraph describing a feature will be enough.</p>
               <button class="
             focus:ring-blue-700 text-sm font-semibold leading-none
             text-white focus:outline-none bg-gradient-to-r from-cyan-500 to-blue-500 border rounded hover:purple-pink-500 hover:to-purple-700 py-4 w-full 
             ease-linear transition-all duration-150" type="button">Read More</button>
               </div>
             </div>
            


           </div>
           <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
             <div className="relative flex flex-col min-w-0 break-word bg-white w-full mb-8 shadow-lg rounded-lg">
               <div className="px-4 py-4 flex-auto">
               <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full
               bg-gradient-to-r  from-blue-500 to-purple-500">
               <i class="fas fa-video"></i></div>
               <h6 class="text-xl font-semibold">Appointments</h6>
               <p class="mt-2 mb-4 text-slate-500">Need to take an appointment?. Doctor Wise connects you online with perfect specialists and perfect tools.</p>
               <button class="
             focus:ring-blue-700 text-sm font-semibold leading-none
             text-white focus:outline-none bg-gradient-to-r from-cyan-500 to-blue-500 border rounded hover:purple-pink-500 hover:to-purple-700 py-4 w-full 
             ease-linear transition-all duration-150" type="button">Read More</button>
               </div>
             </div>

            


           </div>
         </div>
        </div>
     
 
</section>
<section className="mt-10 md:mt-10 pb-20 relative bg-white">
<div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src="https://img.freepik.com/free-vector/call-doctor-concept-doctors-answer-patient-questions-phone_1150-50289.jpg?w=1060&t=st=1650205902~exp=1650206502~hmac=66c924ab1745fa2b5233524aa8c972f1382525c82cfee31cd286b8be165a6f3a" alt="image" loading="lazy" width="" height=""/>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
            Take Care Good Of Yourself</h2>
          <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
      </div>
  </div>
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
      <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
            Take Care Good Of Yourself</h2>
          <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
        <div class="md:5/12 lg:w-5/12">
          <img src="https://img.freepik.com/free-vector/doctor-patient-medical-concept-hospital-patient-lying-hospital-bed_1150-50285.jpg?w=996&t=st=1650206004~exp=1650206604~hmac=e9d6d50b11974045dbfaee540a1cc8b984c1720fed5f1da90f9cb3f9cb352082" alt="image" loading="lazy" width="" height=""/>
        </div>
       
      </div>
  </div>
 
</section>


<section class="block relative z-1 bg-white mt-24 mb-24">    
  <div class="container mx-auto"><div class="justify-center flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4  -mt-24">
      <div class="flex flex-wrap">
</div>
</div>
</div>
</div>

</section> */}

     
    </>
  )
}

export default Home