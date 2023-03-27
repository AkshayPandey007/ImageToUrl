import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Slay from "../assests/Saly-10.png"
import logo from "../assests/logo.png"
import { ToastContainer , toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom'
import styles from "../CSS/Sign.module.css"
import axios from "axios"
import Upload from './Upload'


const Signup = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const[load,setLoad] = useState(false)



    const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  
  
  
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
  
  
    const handleValidation = () => {
      const { password, confirmPassword, username } = values;
      if (password !== confirmPassword) {
        setLoad(false)
        toast.error( "Password and confirm password should be same.", toastCss);
        return false;
      } 
      else if (username.length < 3) {
        setLoad(false)
        toast.error("Username should be greater than 3 characters.",toastCss);
        return false;
      } 
      else if (password.length < 8) {
        setLoad(false)
        toast.error("Password should be equal or greater than 8 characters.", toastCss);
        return false;
      } 
      
  
      return true;
    };



    const handleSubmit =async(e)=>{
      e.preventDefault();
      setLoad(true)
      if(handleValidation()==true)
      {
        const { email, username, password } = values;
        const { data } =await axios.post("http://localhost:8080/user/signup", {username,email,password,});
  
        if (data.status === false) {
          toast.error(data.msg, toastCss);
        }
        else{
          setLoad(false)
          navigate("/login")
        }
      }
      }
  
  return (
    <>
    {token?<Upload/>:
    <div>
        <Navbar/>


       <h1> {load?"...LOADING":""} </h1>

        <div className={styles.RegisterBox}>

    <div className={styles.leftBox}>

      <div className={styles.LogoBox}>
      <p style={{fontSize:"15px" , fontStyle:"italic"}}>Image --> URL</p>
      <img src={logo} alt="" className={styles.Logo}/>
      </div>

      <form onSubmit={(e)=>handleSubmit(e)}>

      <input type="text" placeholder='Enter Your Name' required name="username" onChange={(e) => handleChange(e)}/>

      <br/>

      <input type="email" placeholder='Enter Your Email' required name="email" onChange={(e) => handleChange(e)}/>

      <br/>
      
      <input type="password" placeholder='Create Password' required name="password" onChange={(e) => handleChange(e)}/>

      <br/>

      <input type="password" placeholder='Confirm Password'  required  name="confirmPassword" onChange={(e) => handleChange(e)}/>


      <br/>

      <button type='Submit'>REGISTER</button>


      </form>


      <span className={styles.Alredy}>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>


      </div>



      <div className={styles.rightBox}>
          <img src={Slay} alt="" className={styles.SlayLogo}/>
      </div>
      <ToastContainer/>
    </div>
    </div>
}
    </>
  )
}

export default Signup