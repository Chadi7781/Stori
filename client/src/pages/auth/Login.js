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



import React from 'react'
import { Link } from 'react-router-dom'
import ButtonPrimary from '../../util/custombutton/CustomButton'
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

function Login() {


  
  


  return (
        
        
        <div class="w-full min-h-screen bg-gray-100 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-12 text-center text-5xl font-extrabold">Welcome To Stori.</h2>
    <form>
      <div class="mb-4">
        <label class="block mb-1" for="email">Email-Address</label>
        <input  placeholder="Enter Email" className={`text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base 
    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
     focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline
      focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 
        `}/>      </div>
      <div class="mb-4">
        <label class="block mb-1" for="password">Password</label>
        <input  placeholder="Enter Password" className={`text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base 
    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
     focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline
      focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 
        `}/>      </div>
      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" type="checkbox" class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
          <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
        </div>
        <a href="#" class="text-sm"> Forgot your password? </a>
      </div>
      <div class="mt-6">
      <ButtonPrimary text="Sign In"  className="ml-8  w-full justify-center flex items-center px-6 py-3"/>

      <a href="#" class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                <div class="px-4 py-3">
                    <svg class="h-6 w-6" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                    </svg>
                </div>
                <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold rounded-full">Sign in with Google</h1></a>

        {/* <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button> */}
      </div>
      <div class="mt-6 text-center">
        <Link to="/register" href="#" class="underline">Sign up for an account</Link>
      </div>
    </form>
  </div>
</div>
  )
}

export default Login