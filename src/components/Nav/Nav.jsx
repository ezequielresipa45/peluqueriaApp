import React, { useState } from "react";
import styles from "./Nav.module.css";
import img from "../../images-videos/Logo.png";
import face from "../../images-videos/facebook.png";
import whatsapp from "../../images-videos/whatsapp.png";
import insta from "../../images-videos/instagram.png";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { setAccess} from '../../redux/actions/actions'
import {  useDispatch, useSelector } from 'react-redux'


const username = "admin@gmail.com";
const password = "admin";


export default function Nav() {
  const [login, setLogin] = useState(false);
  const handleButon = () => (login ? setLogin(false) : setLogin(true));
  let location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.access)
  

  const [userDate, setUserDate] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserDate({ ...userDate, [e.target.name]: e.target.value });
  };

  let history = useHistory();




function logar(userData) {
  if (username === userData.username && password === userData.password) {
    dispatch(setAccess(true));
    history.push("/admin");
  } else {
    alert("Usuario o contraseña invalida");
  }
}



const handleSubmit = (e) => {
  e.preventDefault();
  logar(userDate);
};

  return (
    <div className={styles.containerNav}>
      <div className={styles.containerRedes}>
        <img width={20} src={face} alt="" />
        <img width={20} src={whatsapp} alt="" />
        <img width={20} src={insta} alt="" />
      </div>

      <div className={styles.containerNavyLogo}>
        <img src={img} alt="logo" width={90} height={90} />
        <nav>
          <ul>
            <Link to="/">
              <li>Inicio</li>
            </Link>
            <Link to="/turnos">
              <li>Turnos</li>
            </Link>
            <Link to="/contacto">
              <li>Contacto</li>
            </Link>

{state && (location.pathname === "/" || location.pathname === "/turnos" || location.pathname === "/contacto" || location.pathname === "/conocernos") ? 
<Link to="/admin"> <li>Admin</li></Link>: ''}


            {location.pathname === "/" && !state ? (
              <Link to="">
                <li onClick={handleButon}>Administración</li>
                {login && (
                  <div className={`${styles.containerLogin}`}>
                    <input
                      type="text"
                      placeholder="Usuario"
                      name="username"
                      onChange={handleInputChange}
                      value={userDate.username}
                    />
                    <input
                      type="password"
                      placeholder="Contraseña"
                      name="password"
                      onChange={handleInputChange}
                      value={userDate.password}
                    />
                    
                      <button onClick={handleSubmit} className={styles.butonNormal}>Ingresar</button>
                    
                  </div>
                )}
              </Link>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
