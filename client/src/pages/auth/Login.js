import React from 'react'

import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 ">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto ">
      <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">
              <h2 className="text-center font-extrabold text-3xl lg:text-4xl text-gray-800">
                Login
              </h2>
              <form className="mt-8">
                <div>
                <input  className="bg-gray-50 border border-gray-200 w-full p-4 text-sm h-8 outline-none rounded text-gray-600 focus:border-indigo-500" type="email" placeholder="Email"/>

                </div>
                <br/>
                <div>
                <input  className="bg-gray-50 border border-gray-200 w-full p-4 text-sm h-8 focus:outline-none rounded text-gray-600" type="password" placeholder="Password"/>
                
                </div>
                <div>
                <br/>
                <button class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
                <div className="flex items-center  justify-between">
        <div className="flex flex-row items-center mt-4">
          <input type="checkbox" className="focus:ring-blue-500 h-4 text-blue-600 border-gray-300 rounded"/>
          <label for="comments" className="ml-2 text-sm font-normal text-gray-600">Remember me</label>
        </div>
        <div>
                <a class="text-sm text-blue-600 hover:underline" href="#">Forgot password?</a>
            </div>

      </div>
      <div className="flex items-center justify-center">
      <Link to="/signup">
        
        <span  class="text-sm text-gray-600 hover:underline-none">Create Account</span></Link>

      </div>

                </div>
              </form>

      
      
      
      </div>
    
{/* 
<div className="flex items-left">
<img  src="assets/shop.png"></img>

</div> */}
      </div>
      
    </div>
  )
}

export default Login;