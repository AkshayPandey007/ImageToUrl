import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UploadNav from '../Components/UploadNav'
import styles from "../CSS/List.module.css"
import { Link } from 'react-router-dom'
import Login from './Login'

const ListingPage = () => {
    const[data , setData] = useState([])
    // const[tokenCheck,setToken] = useState(false)
    
   const token = localStorage.getItem("token")


    useEffect(()=>{
    axios.get("http://localhost:8080/upload")
    .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    },[])

  


  
  return (
    <>
    {token?
    <div>
      
      <UploadNav/>

     <div className={styles.mapBox}>
     {data.map((el)=>(
      <Link to={`/detail/${el._id}`} key={el._id}>  <div className={styles.mapEachBox} >

            <img src={el.imageUrl} alt="" className={styles.mapImg}/>
          

        </div></Link>
     ))}
     
     </div>
  
    </div>
    :<Login/>
     }
     </>
  )
}

export default ListingPage