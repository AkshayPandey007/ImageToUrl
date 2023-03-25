import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assests/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import styles from "../CSS/Login.module.css"
import axios from "axios"

const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({username: "", password: ""});


    const toastCss = {
      position: "bottom-center",
      autoClose: 5000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };
  
  
    const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };


    const handleSubmit =async(e)=>{
      e.preventDefault();
      if(handleValidation()==true)
      {
        const {  username, password } = values;
      const {data} = await axios.post("https://backend-akshaypandey007.vercel.app/user/login", {username,password})
      
        if (data.status === false) {
          console.log(data.msg)
          toast.error(data.msg, toastCss);
        }
        else{
          navigate("/upload")
        }
      }
      
    }


    
    const handleValidation = () => {
        const { password, username } = values;
         if (username == "") {
          toast.error("Username is required",toastCss);
          return false;
        } 
        else if (password ==  "") {
          toast.error("Password is required", toastCss);
          return false;
        } 
    
        return true;
      };
  return (
    <div>
        <Navbar/>

        <div className={styles.loginBox}>


        <div>
         <img src={logo} alt="" className={styles.LoginLogo}/>
        </div>
     
      <form onSubmit={(e)=>handleSubmit(e)}>



<input type="text" placeholder='Enter Your Name'  name="username" onChange={(e) => handleChange(e)}/>

<br/>

<input type="password" placeholder='Enter Password'  name="password" onChange={(e) => handleChange(e)}/>



<br/>

<button type='Submit'>LOGIN</button>


</form>


          <span className={styles.Alredy}>
            Don't have an account ? <Link to="/">Create One.</Link>
          </span>

      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login