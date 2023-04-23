import styleScss from '../styles/proyectos.module.scss';
import Link from 'next/link';
import ProyectoResumen from '../components/ProyectoResumen';
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect} from 'react'

const Proyectos = () => {

 
  useEffect(()=>{
    AOS.init();
  },[])



  return (
    <div className={styleScss.contenedor}>
      
      <div className={styleScss.backgroundPrincipal}>

        <ul className={styleScss.listado}>
          <Link href="/Contacto"><li>Contacto</li></Link>
          <Link href="/"><li>Inicio</li></Link>
        </ul>

       
     </div>
     <ProyectoResumen/>
     <Footer/>




    </div>
  )
}

export default Proyectos
