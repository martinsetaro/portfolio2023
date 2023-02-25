
import React , { useState } from 'react';
import style from '../styles/home.module.css'
import 'animate.css';
import Resumen from '../components/Resumen';
import Footer from '../components/Footer';
import Link from 'next/link';





const index = () => {
 
  const [nav,setNav] = useState(false)

const mostrar = ()=>{

setNav(true)

}


  return (
    <div className={style.backgroundPrincipal}>
      <div
      onClick={mostrar} 
      className={style.navbar}
      >
       { nav ? <div className={style.navegacion}>
        <ul className={style.listado}>
          <Link href="/Contacto"><li>Contacto</li></Link>
          <Link href="/Proyectos"><li>Proyectos</li></Link>
         
        </ul>
       </div> : null}
      </div>
      <div className={style.presentacion}>
        
        <div className={style.titulo}>
        <h2 className="animate__animated animate__flipInX">Martin Setaro</h2>
        <h3 className="animate__animated animate__backInDown">Desarrollador Front End</h3>
        <h3 className="animate__animated animate__backInDown">Analista QA </h3>
        </div>
      </div>
      
     <Resumen/>
     <Footer/>

    </div>
  )
}

export default index


