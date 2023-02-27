import styleScss from '../styles/contacto.module.scss';
import style from '../styles/home.module.css';
import Link from 'next/link';
import contacto from '../../public/img/contacto1.jpg';
import Image from 'next/image';
import Footer from '../components/Footer';

const Contacto = () => {




  return (
    <div className={styleScss.contenedor}>
     
      
       
      
     
      <div className={styleScss.backgroundPrincipal}>
         <ul className={style.listado}>
          <Link href="/Proyectos"><li>Proyectos</li></Link>
          <Link href="/"><li>Inicio</li></Link>
         
        </ul>
        <div className={styleScss.titulo}>
          <h2>Contacto</h2>
        </div>
      </div>
      
      <div className={styleScss.infoContacto}>
            <div className={styleScss.imagenContacto}>
              <Image src={contacto} alt="contacto" width={450} height={350}/>
            </div>
            <div className={styleScss.informacion}>

              <h2>Como contactar conmigo</h2>
              <div className={styleScss.contenedorBotones}>
                <Link href="https://www.linkedin.com/in/jmsetaro81/"  rel="noreferrer" target="_blank">
                  <button className={styleScss.btn}>Linkedin</button>
                </Link>
                <Link href="https://github.com/martinsetaro"  rel="noreferrer" target="_blank">
                  <button className={styleScss.btn}>Github</button>
                </Link>
                <Link href="/assets/MartinSetaroCV81.pdf"  download="cvMartinSetaro"><button className={styleScss.btn}>Descarga CV</button></Link>
               </div> 
                
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacto
