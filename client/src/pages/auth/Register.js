// import React from 'react'

// import {Link} from 'react-router-dom';

// function Login() {
//   return (
//     <div className="flex flex-col h-screen bg-gray-100 ">
//       <div className="grid place-items-center mx-2 my-20 sm:my-auto ">
//       <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
//             px-6 py-10 sm:px-10 sm:py-6 
//             bg-white rounded-lg shadow-md lg:shadow-lg">
//               <h2 className="text-center font-extrabold text-3xl lg:text-4xl text-gray-800">
//                 Login
//               </h2>
//               <form className="mt-8">
//                 <div>
//                 <input  className="bg-gray-50 border border-gray-200 w-full p-4 text-sm h-8 outline-none rounded text-gray-600 focus:border-indigo-500" type="email" placeholder="Email"/>

//                 </div>
//                 <br/>
//                 <div>
//             <label className="text-sm font-medium leading-none text-gray-800">Username</label>
//                     <input  placeholder="Name" className={`text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base 
//                       transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
//                        focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline
//                         focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 
//                         }`}/>
                                        
//                 </div>
//                 <div>
//                 <br/>
//                 <button class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
//                 <div className="flex items-center  justify-between">
//         <div className="flex flex-row items-center mt-4">
//           <input type="checkbox" className="focus:ring-blue-500 h-4 text-blue-600 border-gray-300 rounded"/>
//           <label for="comments" className="ml-2 text-sm font-normal text-gray-600">Remember me</label>
//         </div>
//         <div>
//                 <a class="text-sm text-blue-600 hover:underline" href="#">Forgot password?</a>
//             </div>

//       </div>
//       <div className="flex items-center justify-center">
//       <Link to="/signup">
        
//         <span  class="text-sm text-gray-600 hover:underline-none">Create Account</span></Link>

//       </div>

//                 </div>
//               </form>

      
      
      
//       </div>
    
// {/* 
// <div className="flex items-left">
// <img  src="assets/shop.png"></img>

// </div> */}
//       </div>
      
//     </div>
//   )
// }

// export default Login;

// import React,{useState,useEffect} from 'react'
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import {Link} from 'react-router-dom';
// import { DatePicker, Input } from 'antd';
// import { UserOutlined,LockOutlined,MailOutlined,PhoneOutlined } from '@ant-design/icons';
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";


// function SignUp(props) {
//   //etat initial ta3 les inputs w button
//   const initialValues = {username: "", phone:"", dateBirth: "" , gender: "",email: "",password: ""};
//   const [formValues,setFormValues]=useState(initialValues);
//   const [formErrors,setFormErrors]= useState({});
//   const [isSubmting,setIsSubmting] = useState(false);
//     //kif tabda form mregla fiha 7ata error control de saisiert
//     const submitForm = () => {
//       console.log("Form is okey "+formValues);
//     }

//      //changement ta3 input
//      const handleChange = (e) => {
//       const {name,value} = e.target;
//       setFormValues({...formValues, [name]:value});
//       console.log(formValues.password);
//     }

//     //bch naml controle de saisie al input sans bib
//     const validate =(values)=> {
//       let errors = {};
//       const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;// for email.
//       const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // for passwrod.
//       const regexPhone = /^(\+\d{1,3}[- ]?)?\d{10}$/; // for phone .
//       if (!values.username) {
//         errors.username="username is required";
//       }
//       if (!values.dateBirth){
//         errors.dateBirth="datebirth is required";
//       }
//       if (!values.gender){
//         errors.gender="gender is required";
//       }
//       if(!values.email) {
//         errors.email = "Email is required";

//       }else if(!regexEmail.test(values.email)) {
//         errors.email = "Invalid email format";
//       }
//       if(!values.phone) {
//         errors.phone = "Phone is required";

//       }else if(!regexPhone.test(values.phone)) {
//         errors.phone = "Invalid phone format";
//       }

//       if(!values.password) {
//         errors.password = "Password is required";
//       }
//     else if(!regexPassword.test(values.password)) {
//       errors.password = "password must be a minimum of 8 characters including number, Upper, Lower And one special character";
//     }
//       return errors;
//   }

//     const handleSubmit = (e) => {
//     e.preventDefault(); // event bch tab9ach foorm t refreshi
//     setFormErrors(validate(formValues));
//     setIsSubmting(true);
//   }
//   useEffect(() => {
//     if(Object.keys(formErrors).length === 0 && isSubmting) {
//       submitForm();
//     }
//   },[formErrors])

//     const [value, onChange]= useState(new Date());
//     const [isopen, setIsOpen]= useState(false);
//     const handleClickDateBirthday = (e)=> {
//         e.preventDefault();
//         if(isopen) {
//           setIsOpen(false);
//         }
//         else {

//             setIsOpen(true);
//         }
//     }



//     return (
//       <Formik 

//       initialValues = {initialValues}
//       validate = {validate}
//      onSubmit={(values) => {
//         console.log(values);
//       }}>
//         {(formik) => {
//           const {values,handleChange,handleSubmit, touched,
//             handleBlur,
//             isValid,
//             errors,
//             dirty} =formik;
        
//         return (

//     <div className="h-full w-full py-16 px-4 bg-gray-100" >
//       <div className="flex flex-col items-center justify-center">
//         <div className="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-52 p-10  mt-16">
//           <div className="flex items-center justify-center">
//                <img src={"assets/images/logo.png"} className="w-14 h-14"/>
//           </div>
//           <p className="text-2xl text-center font-extrabold leading-6 text-gray-800 mt-3">Register to your account</p>
//           <form className="px-6 py-6" onSubmit={handleSubmit} noValidate>
//                     <label className="text-sm font-medium leading-none text-gray-800">Username</label>
                  
                        
//                         {errors.username && touched.username && ( <span className="text-red-600">{errors.username}</span>)}
//             <div className="mt-2 w-full">
//             <label className="text-sm font-medium leading-none text-gray-800">Username</label>
//                     <input  placeholder="Name" className={`text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base 
//                       transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
//                        focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline
//                         focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400  ${errors.username && touched.username ? 
//                           "input-error" : null}`}/>
                        
//                         {errors.username && touched.username && ( <span className="text-red-600">{errors.username}</span>)}


//             </div>
//             <div className="mt-2 w-full">
               
//             <label className="text-sm font-medium leading-none text-gray-800">Username</label>
//                     <input  placeholder="Name" className={`text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base 
//                       transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
//                        focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline
//                         focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400  ${errors.username && touched.username ? 
//                           "input-error" : null}`}/>
                        
//                         {errors.username && touched.username && ( <span className="text-red-600">{errors.username}</span>)}

//             </div>
//             <div className="mt-2 w-full">
               
//             <label className="text-sm font-medium leading-none text-gray-800">Username</label>
//                     <input  placeholder="Name" className={`text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base 
//                       transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
//                        focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline
//                         focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400  ${errors.username && touched.username ? 
//                           "input-error" : null}`}/>
                        
//                         {errors.username && touched.username && ( <span className="text-red-600">{errors.username}</span>)}

        
//             <div className="mt-3">
//             <button role="button" aria-label="create my account"
//                     disabled={!(dirty && isValid)}
//                     className={` ${!(dirty && isValid) ? "focus:outline-none disabled:opacity-25" : ""}
//                     focus:ring-2 focus:ring-offset-2 
//                     focus:ring-blue-700 text-sm font-semibold leading-none
//                     text-white focus:outline-none bg-gradient-to-r from-cyan-500 to-blue-500 border rounded hover:from-blue-500 hover:to-purple-500 py-4 w-full`}>
//                            Sign Up
//             </button>
//             </div>    
//             <p className="text-sm mt-4 font-medium leading-none text-gray-500">
//             Don't have account? {""}
//           <Link to="/signin">
//           <span className="text-sm font-medium leading-none underline text-blue-700 cursor-pointer">
//             {""}
//             Sign in here
//           </span>
//           </Link>
//           </p>
//          </div>
         
//         </form>


//         </div>
//       </div>







//     </div>
//           );
//         }}
// </Formik>

// )
// }

// export default SignUp



import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import ButtonPrimary from '../../util/custombutton/CustomButton'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {auth} from "../../firebaseconfig";

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
    const config =  {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true
    };


    await auth.sendSignInLinkToEmail(formValues.email,config);

    toast.success(`Email is sent to ${formValues.email}. Click the link to complete your registration`)
  
    //Save user 
    window.localStorage.setItem("emailForRegistration", formValues.email);

    //clear state
    formValues.setEmail("");

    

  };
    


  return (
        



     <div className="flex items-center justify-center bg-gray-100 p-12 sm:mx-auto ">
	<div class="bg-white shadow-md border md:max-w-full md:w-1/3   lg:2/3 border-gray-200 rounded-lg max-w-full mt-8  p-4 sm:p-6 sm:text-left  lg:p-8 dark:bg-gray-800 dark:border-gray-700">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-8 text-center text-5xl font-extrabold">Register  </h2>
    <form onSubmit={handleSubmit}>
      <div class="mb-0">
        <label class="block mb-1" for="email">Email</label>
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
      <div class="mt-6">
      <ButtonPrimary text="Sign Up"  className="ml-8  w-full justify-center flex items-center px-6 py-3"/>

        {/* <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button> */}
      
      </div>
      
      <div class="mt-6 text-center">
        <Link to="/login" class="underline">Already have an account?</Link>
      </div>
    </form>
  </div>
</div>
     </div>   
	
  )
}

export default Login