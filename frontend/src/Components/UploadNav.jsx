import React, { useState } from 'react'
import styles from "../CSS/UploadNav.module.css"
import logo from "../assests/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import Typewriter from "typewriter-effect"



const UploadNav = () => {
  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  
  const navigate = useNavigate()
  
  
  const handleLogout=()=>{
    
    localStorage.clear()
    localStorage.setItem("error","Please Login" )
    navigate("/login")
  }
  
  const error = localStorage.getItem("error")

  // if(localStorage.name==null)
  // {
  //   setLog(false)
  // }

  const handleLogBtn=()=>{
    navigate('/login')
  }
 
  return (
    <div>
         <div className={styles.NavBox}>
        

        <div className={styles.NavLeftBox}>
            <div className={styles.LogoBox}>
      <Link to='/uploadImage'>  <img src={logo} alt="" style={{height:"100%" , width:"100%" , objectFit:"contain"}}/> </Link>
        </div>
        </div>


        <div className={styles.Typewriter}>
          
        <Typewriter  options={{
        autoStart:true,
        loop:true,
        delay:200,
       
        strings:error===null?[
          
        `Hi ${name}`,
        `${email}`,
        ]:[`${error}`]
      }}/>
        </div>

        <div className={styles.NavRightBox}>
        
      <Link to="/list" className={styles.NavRLU}> <div>Listing</div> </Link> 
      {/* {handleLog?<div className={styles.NavRLU} onClick={handleLogout}>LogOut</div>:<div className={styles.NavRLU} onClick={handleLogBtn}>LogIn</div> }  */}

          <div onClick={handleLogout} className={styles.NavRLU}>{name?"Logout":"Login"}</div>
        </div>


    </div>
    </div>
  )
}

export default UploadNav