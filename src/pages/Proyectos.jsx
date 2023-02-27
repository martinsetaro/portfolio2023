import styleScss from '../styles/proyectos.module.scss';
import style from '../styles/home.module.css'
import Link from 'next/link';
import ProyectoResumen from '../components/ProyectoResumen';
import Footer from '../components/Footer'

const Proyectos = () => {

 



  return (
    <div className={styleScss.contenedor}>
      
      <div className={styleScss.backgroundPrincipal}>

        <ul className={style.listado}>
          <Link href="/Contacto"><li>Contacto</li></Link>
          <Link href="/"><li>Inicio</li></Link>
        </ul>

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
