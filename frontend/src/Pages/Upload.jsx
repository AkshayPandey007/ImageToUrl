import React, { useState } from 'react'
import UploadNav from '../Components/UploadNav'
import styles from "../CSS/Upload.module.css"
import logo from "../assests/logo.png"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Upload = () => {
  const [imagefile, setFile] = useState("");
  const [load , setLoad] = useState(false)
  const [done , setDone] = useState(true)
  const navigate = useNavigate();

  const toastCss = {
    position: "bottom-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };


  const handleChange=(event)=> {
    console.log("target", event.target.files[0])
    setFile(event.target.files[0]);
  }


  const handleSubmit=(e)=>{
    // e.preventDefault()
    const formData = new FormData();
    formData.append("photo", imagefile);
    // formData.append("upload_preset" , "y3ztqlea")
    // formData.append("cloud_name","dkpsiuvz9")
    // console.log(formData)
    setLoad(true)
    setDone(true)
    axios.post("http://localhost:8080/upload/new", formData ,{ headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }}).then((response) => {
      if(response.data.status==true)
      {
      setLoad(false)
      setDone(false)
      console.log(response.data);
      }
      else if(response.data.status==false)
      {
        // toast.error("LOGIN FIRST" )
        alert("LOGIN FIRST")
        navigate("/login")
      }
    })

  }
  return (
    <div>
      <UploadNav/>

      <div className={styles.UploadBox}>


      <div>
         <img src={logo} alt="" className={styles.UploadLogo}/>
        </div>
     
        <p className={styles.ChoosePic}>Choose A Picture : <span style={{fontSize:"15px" , fontStyle:"italic"}}>Image --> URL</span> </p>


        
        <input type="file" onChange={handleChange}/>


        <p>{done?`${load?"...Loading":""}`:`DONE`}</p>

        <button onClick={handleSubmit}>Upload</button>
       

      </div>
     
    </div>
  )
}

export default Upload