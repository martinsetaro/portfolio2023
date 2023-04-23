import style from '../styles/proyectos.module.scss';
import Image from 'next/image';
import movie from '../../public/img/movie.png'
import store from '../../public/img/store.png'
import citas from '../../public/img/citas.png'
import buscador from '../../public/img/buscador.png'
import burbujas from '../../public/img/burbujas.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect} from 'react'



const ProyectoResumen = () => {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className={style.contenedor}>
     
      <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1200" className={style.cardProyectos}>
          <div className={style.cardImg}>
            <Image src={movie} alt="movie" width={550} height={350}/>
          </div>
          <div className={style.cardInfo}>
            <h2>Movie City</h2>
            <p>Se trata de un proyecto realizado para un challenge de Alkemy desarrollado en React Next Js y utilicé Tailwind para el estilo. Use como alojamiento Netlify .Es una cartelera de cine, cuenta con login , selección de favoritos y buscador de películas. Se consume una API para obtener los datos.</p>
            <div className={style.contenedorBotones}>
              <button className={style.myButton}><a href='https://moviecitycartelera.netlify.app/' rel="noreferrer" target="_blank">Link Proyecto</a></button>
              <button className={style.myButton}><a href='https://github.com/martinsetaro/movieCity' rel="noreferrer" target="_blank">Link repositorio</a></button>
           </div>
       </div>

      </div>

      <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1200" className={style.cardProyectos}>
          <div className={style.cardInfo}>
            <h2>Tienda Electronica</h2>
            <p>Otro challenge de Alkemy , donde debería desarrollar una tienda electrónica algo distinto a lo tradicional, que cuente con varios productos que se puedan elegir por tipo y también ordenar de mayor a menor y viceversa. También tiene la opción de sumar monedas y con estas simular una compra y se van descontando el saldo inicial. Desarrollado con React NextJs , para los estilos utilicé Tailwind. Este proyecto incorporé el UseContext para compartir datos y funciones entre distintos componentes.
            </p>
            <div className={style.contenedorBotones}>
            <button className={style.myButton}><a href='https://storeconnextjs.netlify.app/' rel="noreferrer" target="_blank">Link proyecto</a></button>
            <button className={style.myButton}><a href='https://github.com/martinsetaro/Store-app-Next-JS' rel="noreferrer" target="_blank">Link repositorio</a> </button>
            </div>
          </div>

          <div className={style.cardImg}>
            <Image src={store} alt="movie" width={550} height={350}/>
          </div>
        </div>

          <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1200" className={style.cardProyectos}>
             <div className={style.cardImg}>
               <Image src={citas} alt="movie" width={550} height={350}/>
             </div>

          <div className={style.cardInfo}>
            <h2>Seguimiento Pacientes</h2>
            <p>Desarrollé de una aplicación web para el registro de pacientes , en este caso elegí la temática de veterinaria. La aplicación está desarrollada en Vite React js y Tailwind para los estilos. Se puede ingresar un paciente , modificar datos y eliminar.
            </p>
            <div className={style.contenedorBotones}>
            <button  className={style.myButton}><a href='https://agendaveterinariacitas.netlify.app/' rel="noreferrer" target="_blank">Link proyecto</a></button>
            <button  className={style.myButton}><a href='https://github.com/martinsetaro/agenda-citas-veterinaria' rel="noreferrer" target="_blank">Link repositorio</a> </button>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1200" className={style.cardProyectos}>
             <div className={style.cardInfo}>
               <h2>Buscador con opciones</h2>
             <p>Desarrollé un buscador en este ejemplo lo realicé con automoviles, se puede filtrar por año,color,puertas,valor. Está desarrollado en javascript - css - Html.
             </p>
             <div className={style.contenedorBotones}>
            <button  className={style.myButton}><a href='https://buscadorjavascriptmoderno.netlify.app/' rel="noreferrer" target="_blank">Link proyecto</a></button>
            <button  className={style.myButton}><a href='https://github.com/martinsetaro/buscador-Javascript' rel="noreferrer" target="_blank">Link repositorio</a> </button>
           </div>
           </div>
          <div className={style.cardImg}>
            <Image src={buscador} alt="movie" width={550} height={350}/>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1200" className={style.cardProyectos}>
             <div className={style.cardImg}>
               <Image src={burbujas} alt="movie" width={550} height={350}/>
             </div>

          <div className={style.cardInfo}>
            <h2>Burbujas de algodón</h2>
            <p>Burbujas de algodón es una página para un jardin de infantes. Este es uno de los 6 proyectos que ofrece la empresa ID ideas para realizar y sumar experiencia. Es un proyecto fullstack ya que desarrollé el front end y el backend. Cuenta con una base de datos donde se almacenan las consultas que se hacen mediante un formulario, ese mismo formulario se envía por correo electrónico y tiene una vista principal donde se pueden dejar comentarios sobre el jardín de infantes.
            </p>
            <div className={style.contenedorBotones}>
            <button  className={style.myButton}><a href='https://burbujasdealgodon.vercel.app/' rel="noreferrer" target="_blank">Link proyecto</a></button>
            <button  className={style.myButton}><a href='https://github.com/martinsetaro/burbujasdealgodon' rel="noreferrer" target="_blank">Link repositorio</a> </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProyectoResumen
