import React from 'react'
import styles from './Nav.module.css'
import img from '../../images-videos/Logo.png'
import face from '../../images-videos/facebook.png'
import whatsapp from '../../images-videos/whatsapp.png'
import insta from '../../images-videos/instagram.png'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div className={styles.containerNav}>


<div className={styles.containerRedes} >
<img width={20} src={face} alt="" />
<img width={20}  src={whatsapp} alt="" />
<img width={20}  src={insta} alt="" />
</div>






      
<div className={styles.containerNavyLogo} >
<img src={img} alt="logo" width={90} height={90}/>
<nav>
      <ul>
        <Link to='/'><li>Inicio</li></Link>
        <Link to='/turnos'><li>Turnos</li></Link>
        <Link to='/contacto'><li>Contacto</li></Link>
      </ul>
    </nav>

</div>








   
      
      
      
      </div>
  )
}
