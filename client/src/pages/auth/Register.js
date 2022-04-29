// &&

import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

import ButtonPrimary from '../../util/custombutton/CustomButton'

import { toast } from 'react-toastify';


import {auth} from "../../firebaseconfig"
import {sendSignInLinkToEmail,getAuth } from 'firebase/auth';

function Login() {

  //etat initial ta3 les inputs w button
  const initialValues = { email:"", password: "" , confirmPassword: "",phone: "",password: ""};
  const [formValues,setFormValues]=useState(initialValues);
  const [formErrors,setFormErrors]= useState({});
  const [isSubmting,setIsSubmting] = useState(false);
    //kif tabda form mregla fiha 7ata error control de saisiert
    const submitForm = () => {
      console.log("Form is okey "+formValues);
    }

     //changement ta3 input
     const handleChange = (e) => {
      const {name,value} = e.target;
      setFormValues({...formValues, [name]:value});
      console.log(formValues);
      console.log(formValues.email);
    }

    
 const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("ENV ="+process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config =  {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true
    };

    sendSignInLinkToEmail(auth,formValues.email,config);

    toast.success(`Email is sent to ${formValues.email}. Click the link to complete your registration`)
  
    //Save user 
    window.localStorage.setItem("emailForRegistration", formValues.email);

    //clear state
    setFormValues({email:""});

    

  };
    


  return (
        



     <div className="flex items-center justify-center bg-gray-100 p-12 sm:mx-auto ">

<div className="bg-white shadow-md border md:max-w-full md:w-1/3   lg:2/3 border-gray-200 rounded-lg max-w-full mt-8  p-4 sm:p-6 sm:text-left  lg:p-8 dark:bg-gray-800 dark:border-gray-700">
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h2 className="mb-8 text-center text-5xl font-extrabold">Register  </h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-0">
        <label htmlFor="email" className="block mb-1" for="email">Email</label>
        <input  
          
          onChange={handleChange}
          name="email"
          value={formValues.email}
        placeholder="Enter email" className={`text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base 
    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
     focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline
      focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 
        `}/>      </div>
              {/* <div class="mb-4">
        <label class="block mb-1" for="phone">Phone</label>
        <input  
      
        placeholder="Enter phone" 
        className={`text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base 
    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
     focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline
      focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 
        `}/>      </div>
      <div class="mb-4">
        <label class="block mb-1" for="password">Password</label>
        <input  placeholder="Enter password" className={`text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base 
    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
     focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline
      focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 
        `}/>      </div>
        <div class="mb-4">
        <label class="block mb-1" for="password">Confirm Password</label>
        <input  placeholder="Confirm your password" className={`text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base 
    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
     focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline
      focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 
        `}/>      </div> */}
      <div className="mt-6">
      <ButtonPrimary text="Sign Up"  className="ml-8  w-full justify-center flex items-center px-6 py-3"/>

        {/* <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button> */}
      
      </div>
      
      <div className="mt-6 text-center">
        <Link to="/login" className="underline">Already have an account?</Link>
      </div>
    </form>
  </div>
</div>
     </div>   
	
  )
}

export default Login