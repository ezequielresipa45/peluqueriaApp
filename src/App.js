import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Conocenos from "./components/Conocenos/Conocenos";
import Turnos from "./components/Turnos/Turnos";
import styles from "./App.module.css";
import video from "./images-videos/Hombres.mp4";

function App() {
  return (
    <>
      <Route exact path="/turnos">
      <div className={styles.containerComponentTurnos}>
        <Nav />
      </div>
        <Turnos />
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
    </>
  );
}

export default App;
