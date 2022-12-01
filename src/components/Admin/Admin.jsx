import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAccess } from "../../redux/actions/actions";
import { useHistory } from "react-router-dom";
import styles from "./Admin.module.css";
import LogOut from "../../images-videos/cerrar-sesion.png";
import Logo from "../../images-videos/Logo.png";
import Reloj from "../Reloj/Reloj";

export default function Admin() {
  const [menu, setMenu] = useState(false);

  const handleMenu = (e) => {
    setMenu(e);
  };

  const dispatch = useDispatch();
  let history = useHistory();

  const handleButon = () => {
    dispatch(setAccess(false));
    history.push("/");
  };
  return (
    <div className={styles.container_admin}>
      <div className={styles.nav_admin}>
        <div className={styles.nav_admin}>
          <img src={Logo} alt="logo Barber" width={40} />

          <Reloj />
        </div>

        <div className={styles.cortesPendientes}>
          <p>CORTES PENDIENTES</p>
          {/* //ESTO  TIENE QE SER DINAMICO SEGUN LA CANTIDAD DE CORTES QE HALLA PENDIENTES--- */}
          <h5>5</h5>
        </div>

        <div className={styles.nav_admin}>
          <p>Hola, Admin</p>
          <img
            title="Salir"
            className={styles.img_nav}
            src={LogOut}
            alt="Icon-LogOut"
            onClick={handleButon}
            width={30}
          />
        </div>
      </div>

      <div className={styles.containerHeaderAdmin}>
        <div className={styles.menuLateral}>
          <p onClick={() => handleMenu(false)}>🪒 Cortes</p>
          <p onClick={() => handleMenu(true)}>🧒 Usuarios</p>
        </div>

        {!menu ? (
          <div className={styles.headerAdmin}>Soy Cortes</div>
        ) : (
          <div className={styles.headerAdmin}>Soy Usuarios</div>
        )}
      </div>
    </div>
  );
}
