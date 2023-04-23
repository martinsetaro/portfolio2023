import React, { useEffect} from 'react'
import style from '../styles/resumen.module.css'
import programmer from '../../public/img/programmer.png';
import testerA from '../../public/img/testerA.png';
import engranaje from '../../public/img/engranaje.png';
import codigo from '../../public/img/codigo.png';
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'


const Resumen = () => {

  useEffect(()=>{
    AOS.init();
  },[])




  return (
    <div className={style.contenido}>
      <h2 className={style.titulo}>Resumen</h2>
        
    <div className={style.contenedorCardDatos}>
    

        <div className={style.contenedorDatos}>
            <h2 data-aos="zoom-out-up">Desarrollador Full Stack</h2>
           <div className={style.contenedorImagenes}>
              
              <Image data-aos="fade-down" data-aos-duration="1000"  src={programmer} alt="dev" width={400} height={400}/>
              <Image data-aos="fade-up" data-aos-duration="3000" className={`${style.pulso}`} src={codigo} alt="dev" width={200} height={200}/>
          </div>
          
           <p>Hace más de un año comencé como Desarrollador Front end , realicé algunos proyectos y logré participar de un semillero que me brindo los conocimientos de como se desarrolla un proyecto real. Mejore mi stack y hoy tengo conocimientos de backend</p>
        <h3>Herramientas que uso como desarrollador</h3>   
        <div className={style.infoHerramientas}>
        <h4 data-aos="zoom-out" className={style.textos}>HTML5</h4>
        <h4 data-aos="zoom-out" className={style.textos}>css - sass</h4>
        <h4 data-aos="zoom-out" className={style.textos}>Javascript</h4>
        <h4 data-aos="zoom-out" className={style.textos}>React js</h4>
        <h4 data-aos="zoom-out" className={style.textos}>Express</h4>
        <h4 data-aos="zoom-out" className={style.textos}>Next js</h4>
        <h4 data-aos="zoom-out" className={style.textos}>React native</h4>
        <h4 data-aos="zoom-out" className={style.textos}>Sql</h4>
        <h4 data-aos="zoom-out" className={style.textos}>Git - github</h4>
        <h4 data-aos="zoom-out" className={style.textos}>Figma</h4>
        <h4 data-aos="zoom-out" className={style.textos}>Tailwind</h4>
        <h4 data-aos="zoom-out" className={style.textos}>Redux</h4>
        <h4 data-aos="zoom-out" className={style.textos}>NodeJs</h4>

      </div>
      </div>

      <div className={style.contenedorDatos}>
        <h2 data-aos="zoom-out-up">QA Tester</h2>
        <div className={style.imagenesTester}>
            <Image  data-aos="fade-down" data-aos-duration="1000" src={testerA} alt="dev" width={400} height={400}/>
            <Image data-aos="fade-up" data-aos-duration="3000" className={style.engrane1} src={engranaje} alt="dev" width={150} height={150}/>
            <Image data-aos="fade-up" data-aos-duration="3000" className={style.engrane2} src={engranaje} alt="dev" width={100} height={100}/>
        </div>
        
        <p>¡El 2023 arranque con todo y decidí dedicarme también al testing para incrementar más mis conocimientos y poder realizar con mayor calidad mis proyectos , soy QA Tester!</p>
        <h3>Herramientas que utilizo como QA Tester</h3>
             <div className={style.infoHerramientas}>
               <h4 data-aos="zoom-out" className={style.textos}>Jira</h4>
               <h4 data-aos="zoom-out" className={style.textos}>postman</h4>
               <h4 data-aos="zoom-out" className={style.textos}>insomnia</h4>
                <h4 data-aos="zoom-out" className={style.textos}>selenium ide</h4>
               <h4 data-aos="zoom-out" className={style.textos}>cypress</h4>
               <h4 data-aos="zoom-out" className={style.textos}>excel</h4>
            </div>
      </div>

  
     
    </div>
    </div>
 
  )
}

export default Resumen
