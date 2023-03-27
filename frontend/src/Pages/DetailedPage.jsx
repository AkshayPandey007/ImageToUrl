import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UploadNav from '../Components/UploadNav'
import styles from "../CSS/Detail.module.css"

const DetailedPage = () => {
 
  const[data, setData] = useState({})
  const params = useParams()


  useEffect(()=>{
    axios.get(`http://localhost:8080/upload/?_id=${params._id}`)
    .then((res) => {
        console.log(res.data);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])
  // console.log("data" , data[0])
  return (
    <div >
      
      <UploadNav/>
      <div  className={styles.DetailBox}>
      <img src={data.imageUrl} alt=""  className={styles.detailImg}/>
      <br />
      <div className={styles.urlBox}>
     <span> URL: <a href={data.imageUrl} target='_blank' className={styles.hrfUrl} style={{overflowWrap:"break-word"}}>{data.imageUrl}</a> </span>
      </div>
      </div>
    </div>
  )
}

export default DetailedPage