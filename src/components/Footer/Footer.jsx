import React from 'react'
import style from "./Footer.module.css"

export default function Footer() {
  return <>
   <div className={style.all}>
    <div className="container">
      <div className="row text-center py-5">
        <div className="col-md-4">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
          <h3>AROUND THE WEB</h3>
          <div className="icons d-flex justify-content-center align-content-center">
            <div className= {style.icon}>
              <span><i class="fa-brands fa-facebook"></i></span>
            </div>
            <div className={style.icon}>
              <span><i class="fa-brands fa-twitter"></i></span>
            </div>
            <div className={style.icon}>
              <span><i class="fa-brands fa-linkedin-in"></i></span>
            </div>
            <div className={style.icon}>
              <span><i class="fa-solid fa-globe mx-1 icon"></i></span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
    <div className={style.allone}>
    <div className="container">
    <div className="row text-center py-4 ">
        <div className="col-md-12">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </div>
     </div>
   </div>
  
  
  
  
  
  
  </>
   
  
}
