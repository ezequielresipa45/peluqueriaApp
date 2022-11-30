import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Conocenos from "./components/Conocenos/Conocenos";
import Turnos from "./components/Turnos/Turnos";
import styles from "./App.module.css";
import video from "./images-videos/Hombres.mp4";
import React from "react";
import Admin from "./components/Admin/Admin";
import { useSelector } from "react-redux";
import Error404 from "./components/Error404/Error404";
import Contacto from "./components/Contacto/Contacto";
import Conocernos from './components/Conocernos/Conocernos'

function App() {
  const state = useSelector((state) => state.access);

  const [inputs, setInputs] = React.useState({
    cliente: "",
    correo: "",
    personal: "",
    servicio: "",
    sucursal: "",
    date: "",
    reservar: false,
    siguiente: false,
  });

  if (state) {
    return (
      <>
        <Switch>
          <Route exact path="/turnos">
            <div className={styles.containerComponentTurnos}>
              <Nav />
            </div>
            <Turnos inputs={inputs} setInputs={setInputs} />
          </Route>

          <Route exact path="/">
            <div className={styles.containerApp}>
              <video
                className={styles.video}
                src={video}
                type="video/mp4"
                autoPlay
                muted
                loop
              />

              <div className={styles.containerComponent}>
                <Nav />

                <Conocenos />
              </div>
            </div>
          </Route>

          <Route exact path="/admin">
            <Nav />
            <Admin />
          </Route>

          <Route exact path="/contacto">
          <Nav/>
            <Contacto/>
          </Route>

          <Route exact path="/conocernos">
            <div className={styles.containerComponentTurnos}>

          <Nav/>

            </div>
            <Conocernos/>
          </Route>



          <Route>
            <Error404 />
          </Route>
        </Switch>
      </>
    );
  } else {
    return (
      <>
        <Switch>
          <Route exact path="/turnos">
            <div className={styles.containerComponentTurnos}>
              <Nav />
            </div>
            <Turnos inputs={inputs} setInputs={setInputs} />
          </Route>

          <Route exact path="/">
            <div className={styles.containerApp}>
              <video
                className={styles.video}
                src={video}
                type="video/mp4"
                autoPlay
                muted
                loop
              />

              <div className={styles.containerComponent}>
                <Nav />

                <Conocenos />
              </div>
            </div>
          </Route>

          <Route exact path="/contacto">
            <Nav/>
            <Contacto/>
          </Route>

          <Route exact path="/conocernos">
          <div className={styles.containerComponentTurnos}>

<Nav/>

  </div>
            <Conocernos/>
          </Route>

          <Route component={Error404} />
        </Switch>
      </>
    );
  }
}

export default App;
