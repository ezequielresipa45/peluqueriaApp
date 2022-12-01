import React from 'react'
import {  useDispatch } from 'react-redux'
import { setAccess} from '../../redux/actions/actions'
import { useHistory } from "react-router-dom";
import styles from './Admin.module.css'
import LogOut from '../../images-videos/cerrar-sesion.png'


export default function Admin() {
  const dispatch = useDispatch();
  let history = useHistory();

  const handleButon = ()=>{
    dispatch(setAccess(false));
    history.push("/");

  }
  return (
    <div className={styles.container_admin}>

      <div className={styles.nav_admin}>

      
<img src={LogOut} alt="Icon-LogOut" onClick={handleButon} width={30} />
      </div>

      ESTOY EN ADMIN
      
      
      
      </div>
  )
}
