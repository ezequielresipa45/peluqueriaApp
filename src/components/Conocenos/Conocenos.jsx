import React from 'react'
import styles from './Conocenos.module.css'
import {Link} from 'react-router-dom'


export default function Conocenos() {
  return (
    <div className={styles.containerConocenos}>

    <h2>BE REAL, BE YOURSELF</h2>
   <Link to='/conocernos'> <button>CONOCENOS!</button></Link>




    </div>
  )
}
