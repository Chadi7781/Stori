import React,{useState,useEffect} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Link} from 'react-router-dom';
import { DatePicker, Input } from 'antd';
import { UserOutlined,LockOutlined,MailOutlined,PhoneOutlined } from '@ant-design/icons';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


function SignUp(props) {
  //etat initial ta3 les inputs w button
  const initialValues = {username: "", phone:"", dateBirth: "" , gender: "",email: "",password: ""};
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
      console.log(formValues.password);
    }

    //bch naml controle de saisie al input sans bib
    const validate =(values)=> {
      let errors = {};
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;// for email.
      const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // for passwrod.
      const regexPhone = /^(\+\d{1,3}[- ]?)?\d{10}$/; // for phone .
      if (!values.username) {
        errors.username="username is required";
      }
      if (!values.dateBirth){
        errors.dateBirth="datebirth is required";
      }
      if (!values.gender){
        errors.gender="gender is required";
      }
      if(!values.email) {
        errors.email = "Email is required";

      }else if(!regexEmail.test(values.email)) {
        errors.email = "Invalid email format";
      }
      if(!values.phone) {
        errors.phone = "Phone is required";

      }else if(!regexPhone.test(values.phone)) {
        errors.phone = "Invalid phone format";
      }

      if(!values.password) {
        errors.password = "Password is required";
      }
    else if(!regexPassword.test(values.password)) {
      errors.password = "password must be a minimum of 8 characters including number, Upper, Lower And one special character";
    }
      return errors;
  }

    const handleSubmit = (e) => {
    e.preventDefault(); // event bch tab9ach foorm t refreshi
    setFormErrors(validate(formValues));
    setIsSubmting(true);
  }
  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmting) {
      submitForm();
    }
  },[formErrors])

    const [value, onChange]= useState(new Date());
    const [isopen, setIsOpen]= useState(false);
    const handleClickDateBirthday = (e)=> {
        e.preventDefault();
        if(isopen) {
          setIsOpen(false);
        }
        else {

            setIsOpen(true);
        }
    }



    return (
      <Formik 

      initialValues = {initialValues}
      validate = {validate}
     onSubmit={(values) => {
        console.log(values);
      }}>
        {(formik) => {
          const {values,handleChange,handleSubmit, touched,
            handleBlur,
            isValid,
            errors,
            dirty} =formik;
        
        return (

    <div className="h-full w-full py-16 px-4 bg-gray-100" >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-52 p-10  mt-16">
          <div className="flex items-center justify-center">
               <img src={"assets/images/logo.png"} className="w-14 h-14"/>
          </div>
          <p className="text-2xl text-center font-extrabold leading-6 text-gray-800 mt-3">Register to your account</p>
          <form className="px-6 py-6" onSubmit={handleSubmit} noValidate>
                    <label className="text-sm font-medium leading-none text-gray-800">Username</label>
                    <Input size="large" name="username" type="username" id="username" value={values.username} onChange={handleChange} onBlur ={handleBlur}
             className={`bg-white border-[1px] border-gray-400 rounded focus:outline-none text-xs font-medium leading-none  text-gray-800
             py-3 w-full pl-3 mt-2 ${errors.username && touched.username ? 
             "input-error" : null}`}
             placeholder="Enter Username" prefix={<UserOutlined />} />
              {errors.username && touched.username && ( <span className="text-red-600">{errors.username}</span>)}
            <div className="mt-2 w-full">
                <label className="text-sm font-medium leading-none text-gray-800">Phone</label>
                      <Input size="large"  name="phone" id="phone" type="text"
                       value={values.phone} onChange={handleChange} onBlur={handleBlur}
                       className={`bg-white border-[1px] border-gray-400 rounded focus:outline-none text-xs font-medium leading-none  text-gray-800
                        py-3 w-full pl-3 mt-2  ${errors.phone && touched.phone ? 
                        "input-error" : null}`}
                       placeholder="Enter Phone with +216 " prefix={<PhoneOutlined />
                       } />


              {errors.phone && touched.phone && ( <span className="text-red-600">{errors.phone}</span>)}


            </div>
            <div className="mt-2 w-full">
                 <label className="text-sm font-medium leading-none text-gray-800">Email</label>
                       <Input size="large"  
                             name="email" type="email" id="email" value={values.email} onChange={handleChange} onBlur ={handleBlur}   
                       className={`bg-white border-[1px] border-gray-400 rounded focus:outline-none text-xs font-medium leading-none  text-gray-800
                         py-3 w-full pl-3 mt-2  ${errors.email && touched.email ? 
                          "input-error" : null}`}
                          placeholder="Enter email address" prefix={<MailOutlined/>}/>
                                        {errors.email && touched.email && ( <span className="text-red-600">{errors.email}</span>)}

            </div>
            <div className="mt-2 w-full">
                 <label className="text-sm font-medium leading-none text-gray-800">Password</label>
                 <Input.Password size="large"  
                 name="password" id="password" type="password"
                 value={values.password} onChange={handleChange} onBlur={handleBlur}
                 className={`bg-white border-[1px] border-gray-400 rounded focus:outline-none text-xs font-medium leading-none  text-gray-800
                  py-3 w-full pl-3 mt-2 ${errors.password && touched.password ? 
                    "input-error" : null}`}
                     placeholder="Enter password address" prefix={<LockOutlined/>}/>
                    {errors.password && touched.password && ( <span className="text-red-600">{errors.password}</span>)}

            <div className="mt-2 w-full">
                 <label className="text-sm font-medium leading-none text-gray-800">Date Birth</label>
                       <DatePicker size="large"
                        name="dateBirth" id="dateBirth" 
                         onBlur={handleBlur}
                        onChange={(value) => formik.setFieldValue("dateBirth", value)}

                         className={`bg-white border-[1px] border-gray-400 rounded focus:outline-none text-xs font-medium leading-none  text-gray-800
                         py-3 w-full pl-3 mt-2 ${errors.dateBirth && touched.dateBirth ? 
                          "input-error" : null}`}
                           placeholder="Enter date birth" 
             
            />
                                {errors.dateBirth && touched.dateBirth && ( <span className="text-red-600">{errors.dateBirth}</span>)}

            {/* {isopen && <div className="mt-3 flex items-center justify-center"> <Calendar  onChange={onChange} value={value}  /></div>} */}

            </div>
            
            <div className="mt-2 w-full">
                <label className="text-sm font-medium leading-none text-gray-800">Gender</label>
                      <div className="flex items-center justify-center ml-6">
                           <input id="country-option-1" type="radio" name="countries" value="USA" class={`h-4 w-4 
                                 border-gray-300 focus:ring-2 " aria-labelledby="country-option-1" 
                                 aria-describedby="country-option-1 ${errors.gender && touched.gender ? 
                                  "input-error" : null}`}/>
                <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
                      Male 
                </label>
                <input id="country-option-1" type="radio" name="gender" 
                value={value.gender} 
                onChange={handleChange}
                onBlur={handleBlur}
                
                class="h-4 w-4  ml-4
                 border-gray-300 focus:ring-2 " aria-labelledby="country-option-1" 
                  aria-describedby="country-option-1"/>
                 <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
                  Female
                 </label>
                </div>
                </div>
            <div className="mt-3">
            <button role="button" aria-label="create my account"
                    disabled={!(dirty && isValid)}
                    className={` ${!(dirty && isValid) ? "focus:outline-none disabled:opacity-25" : ""}
                    focus:ring-2 focus:ring-offset-2 
                    focus:ring-blue-700 text-sm font-semibold leading-none
                    text-white focus:outline-none bg-gradient-to-r from-cyan-500 to-blue-500 border rounded hover:from-blue-500 hover:to-purple-500 py-4 w-full`}>
                           Sign Up
            </button>
            </div>    
            <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Don't have account? {""}
          <Link to="/signin">
          <span className="text-sm font-medium leading-none underline text-blue-700 cursor-pointer">
            {""}
            Sign in here
          </span>
          </Link>
          </p>
         </div>
         
        </form>


        </div>
      </div>







    </div>
          );
        }}
</Formik>

)
}

export default SignUp