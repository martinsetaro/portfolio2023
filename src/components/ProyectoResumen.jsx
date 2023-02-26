import style from '../styles/proyectos.module.scss';
import Image from 'next/image';
import movie from '../../public/img/movie.png'
import store from '../../public/img/store.png'
import citas from '../../public/img/citas.png'
import buscador from '../../public/img/buscador.png'



const ProyectoResumen = () => {


  return (
    <div className={style.contenedor}>
     
      <div className={style.cardProyectos}>
          <div className={style.cardImg}>
            <Image src={movie} alt="movie" width={550} height={350}/>
          </div>
          <div className={style.cardInfo}>
            <h2>Movie City</h2>
            <p>Se trata de un proyecto realizado para un challenge de Alkemy desarrollado en React Next Js y utilicé Tailwind para el estilo. Use como alojamiento Netlify .Es una cartelera de cine, cuenta con login , selección de favoritos y buscador de películas. Se consume una API para obtener los datos.</p>
            <h3>Link del proyecto : <a href='https://moviecitycartelera.netlify.app/' rel="noreferrer" target="_blank"> https://moviecitycartelera.netlify.app/</a></h3>
            <h3>Link del repositorio :<a href='https://github.com/martinsetaro/movieCity' rel="noreferrer" target="_blank"> https://github.com/martinsetaro/movieCity</a> </h3>
          </div>
      </div>

      <div className={style.cardProyectos}>
          <div className={style.cardInfo}>
            <h2>Tienda Electronica</h2>
            <p>Otro challenge de Alkemy , donde debería desarrollar una tienda electrónica algo distinto a lo tradicional, que cuente con varios productos que se puedan elegir por tipo y también ordenar de mayor a menor y viceversa. También tiene la opción de sumar monedas y con estas simular una compra y se van descontando el saldo inicial. Desarrollado con React NextJs , para los estilos utilicé Tailwind. Este proyecto incorporé el UseContext para compartir datos y funciones entre distintos componentes.
            </p>
            <h3>Link del proyecto : <a href='https://storeconnextjs.netlify.app/' rel="noreferrer" target="_blank"> https://storeconnextjs.netlify.app/</a></h3>
            <h3>Link del repositorio :<a href='https://github.com/martinsetaro/Store-app-Next-JS' rel="noreferrer" target="_blank"> https://github.com/martinsetaro/Store-app-Next-JS</a> </h3>
          </div>

          <div className={style.cardImg}>
            <Image src={store} alt="movie" width={550} height={350}/>
          </div>
        </div>

          <div className={style.cardProyectos}>
             <div className={style.cardImg}>
               <Image src={citas} alt="movie" width={550} height={350}/>
             </div>

          <div className={style.cardInfo}>
            <h2>Seguimiento Pacientes</h2>
            <p>Desarrollé de una aplicación web para el registro de pacientes , en este caso elegí la temática de veterinaria. La aplicación está desarrollada en Vite React js y Tailwind para los estilos. Se puede ingresar un paciente , modificar datos y eliminar.
            </p>
            <h3>Link del proyecto : <a href='https://agendaveterinariacitas.netlify.app/' rel="noreferrer" target="_blank"> https://agendaveterinariacitas.netlify.app/</a></h3>
            <h3>Link del repositorio :<a href='https://github.com/martinsetaro/agenda-citas-veterinaria' rel="noreferrer" target="_blank"> https://github.com/martinsetaro/agenda-citas-veterinaria</a> </h3>
          </div>
        </div>

        <div className={style.cardProyectos}>
             <div className={style.cardInfo}>
               <h2>Buscador con opciones</h2>
             <p>Desarrollé un buscador en este ejemplo lo realicé con automoviles, se puede filtrar por año,color,puertas,valor. Está desarrollado en javascript - css - Html.
             </p>
            <h3>Link del proyecto : <a href='https://buscadorjavascriptmoderno.netlify.app/' rel="noreferrer" target="_blank"> https://buscadorjavascriptmoderno.netlify.app/</a></h3>
            <h3>Link del repositorio :<a href='https://github.com/martinsetaro/buscador-Javascript' rel="noreferrer" target="_blank"> https://github.com/martinsetaro/buscador-Javascript</a> </h3>
           </div>
          <div className={style.cardImg}>
            <Image src={buscador} alt="movie" width={550} height={350}/>
          </div>
        </div>
    </div>
  )
}

export default ProyectoResumen
