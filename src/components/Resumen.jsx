import style from '../styles/resumen.module.css'
import developer from '../../public/img/developer.png';
import tester from '../../public/img/tester.png'
import Image from 'next/image'

const Resumen = () => {
  return (
    <div className={style.contenido}>
      <h2 className={style.titulo}>Resumen</h2>
        
    <div className={style.contenedorCardDatos}>
      <div className={style.contenedorDatos}>
        <h2>Desarrollador Front End</h2>
        <Image src={developer} alt="dev" width={200} height={200}/>
        <p>Primeramente comenze como Desarrollador Front end</p>
      </div>

      <div className={style.contenedorDatos}>
        <h2>QA Tester</h2>
        <Image src={tester} alt="dev" width={200} height={200}/>
        <p>Sume a mis conocimientos herramientas de testeo y tambien soy QA Tester</p>
      </div>

      <div className={style.contenedorDatosHerramientas}>
        <h2>Herramientas que uso como desarrollador</h2>
        <div className={style.infoHerramientas}>
        <h4>HTML5</h4>
        <h4>css - sass</h4>
        <h4>javascript</h4>
        <h4>react js</h4>
        <h4>express</h4>
        <h4>next js</h4>
        <h4>react native</h4>
        <h4>sql</h4>
        <h4>git - github</h4>
       </div>
       </div>
      
      <div className={style.contenedorDatosHerramientas}>
         <h2>Herramientas que uso como tester</h2>
             <div className={style.infoHerramientas}>
               <h4>Jira</h4>
               <h4>postman</h4>
               <h4>insomnia</h4>
                <h4>selenium ide</h4>
               <h4>cypress</h4>
               <h4>excel</h4>
            </div>
      </div>

     </div>
    </div>
 
  )
}

export default Resumen
