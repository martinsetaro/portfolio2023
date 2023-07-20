import styleScss from '../styles/contacto.module.scss';
import Link from 'next/link';
import contacto from '../../public/img/contacto1.jpg';
import Image from 'next/image';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect} from 'react'

const Contacto = () => {

  useEffect(()=>{
    AOS.init();
  },[])



  return (
    <div className={styleScss.contenedor}>
     
      
       
      
     
      <div className={styleScss.backgroundPrincipal}>
         <ul className={styleScss.listado}>
          <Link href="/Proyectos"><li>Proyectos</li></Link>
          <Link href="/"><li>Inicio</li></Link>
         
        </ul>
        
      </div>
      
      <div className={styleScss.infoContacto}>
            <div className={styleScss.imagenContacto}>
              <Image data-aos="fade-right" data-aos-duration="1000" src={contacto} alt="contacto" width={450} height={350}/>
            </div>
            <div className={styleScss.informacion}>

              <h2>Como contactar conmigo</h2>
              <div className={styleScss.contenedorBotones}>
                <Link href="https://www.linkedin.com/in/jmartinsetaro81/"  rel="noreferrer" target="_blank">
                  <button className={styleScss.myButton}>Linkedin</button>
                </Link>
                <Link href="https://github.com/martinsetaro"  rel="noreferrer" target="_blank">
                  <button className={styleScss.myButton}>Github</button>
                </Link>
                <Link href="/assets/martinSetaroCvOk.pdf"  download="cvMartinSetaroFrontEnd"><button className={styleScss.myButton}>Descarga CV</button></Link>
               </div> 
                
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacto
