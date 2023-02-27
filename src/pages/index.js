
import style from '../styles/home.module.css'
import 'animate.css';
import Resumen from '../components/Resumen';
import Footer from '../components/Footer';
import Link from 'next/link';





const Index = () => {
 



  return (
    <div className={style.backgroundPrincipal}>
      
      <div className={style.presentacion}>
        <ul className={style.listado}>
          <Link href="/Contacto"><li>Contacto</li></Link>
          <Link href="/Proyectos"><li>Proyectos</li></Link>
         
        </ul>
        
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

export default Index


