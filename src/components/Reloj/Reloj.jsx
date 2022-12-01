import React, { useEffect, useState } from "react";
import styles from "./Reloj.module.css";



export default function Reloj() {

  const fecha = Date.now();
  const hoy = new Date(fecha);
const fechaActual = hoy.toLocaleDateString()

  var fechaHora = new Date();

  const [time, setTime] = useState({
    hora: fechaHora.getHours(),
    minutos: fechaHora.getMinutes(),
    segundos: fechaHora.getSeconds(),
  });

  useEffect(() => {
    const tiempo = () => {
      if (time.hora === 25) {
        setTime({ ...time, hora: 1 });
      }

      if (time.minutos >= 60) {
        setTime({ ...time, hora: time.hora + 1, minutos: 0 });
      }

      if (time.segundos >= 60) {
        setTime({ ...time, minutos: time.minutos + 1, segundos: 0 });
      }

      setTimeout(() => {
        return setTime({ ...time, segundos: time.segundos + 1 });
      }, 1000);
    };

    //

    tiempo();
  }, [time]);
  return (
    <div className={styles.reloj}>
     <p>
     {`${fechaActual} `}
      </p> 
      
      {
      
      `${time.hora < 10 ? "0" + time.hora : time.hora}:${
        time.minutos < 10 ? "0" + time.minutos : time.minutos
      }:${time.segundos < 10 ? "0" + time.segundos : time.segundos}`}
    </div>
  );
}
