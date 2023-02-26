import styleScss from '../styles/proyectos.module.scss';
import style from '../styles/home.module.css'
import Link from 'next/link';
import React , { useState } from 'react';
import ProyectoResumen from '../components/ProyectoResumen';
import Footer from '../components/Footer'

const Proyectos = () => {

  const [nav,setNav] = useState(false)

  const mostrar = ()=>{
  
  setNav(true)
  
  }



  return (
    <div className={styleScss.contenedor}>
      
     <div
      onClick={mostrar} 
      className={style.navbar}
      >
       { nav ? <div className={style.navegacion}>
        <ul className={style.listado}>
          <Link href="/Contacto"><li>Contacto</li></Link>
          <Link href="/"><li>Inicio</li></Link>
         
        </ul>
       </div> : null}
      </div>
      <div className={styleScss.backgroundPrincipal}>
       <div className={styleScss.titulo}>
        <h2>Proyectos</h2>
       </div>
     </div>
     <ProyectoResumen/>
     <Footer/>




    </div>
  )
}

export default Proyectos
