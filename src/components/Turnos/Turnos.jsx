import React from "react";
import styles from "./Turnos.module.css";


let date = new Date();
let dia = date.getDate();
let mes = date.getMonth() + 1;
let anio = date.getFullYear();

const fecha = `${anio}-${mes}-${dia}`;









export default function Turnos() {

  const [inputs, setInputs] = React.useState({

    personal:'',
    servicio:'',
    sucursal:'',
    date:'',
    reservar: false,
  })


  const handleInput = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    setInputs({...inputs, reservar: true})
  }

console.log(inputs);

  return (
    <div className={styles.containerTurnos}>
      <h1>Reservá Tu Turno</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.contenedorInput}>
          <select name="personal"  onChange={handleInput} >
            <option selected disabled hidden >
              ¿Con quién querés atenderte?
            </option>
            <option value="Agustin" >Agustin</option>
            <option value="Tiago">Tiago</option>
            <option value="Enzo">Enzo</option>
            <option value="Felipe">Felipe</option>
          </select>

          <select name="servicio"  onChange={handleInput}>
            <option selected disabled hidden>
              ¿Qué te querés hacer?
            </option>
            <option value="Corte">Corte</option>
            <option value="Spa">Spa</option>
            <option value="Barba">Barba</option>
            <option value="Color">Color</option>
          </select>

          <select name="sucursal"  onChange={handleInput}>
            <option selected disabled hidden>
              ¿Elegí una sucursal?
            </option>
            <option value="San-Justo">San Justo</option>
            <option value="Ramos-Mejia">Ramos Mejia</option>
            <option value="Mataderos">Mataderos</option>
            <option value="Recoleta">Recoleta</option>
          </select>
          {!inputs.reservar &&
          <button className={styles.button} type="submit">
            Reservar
          </button>
          } 
        </div>

        {inputs.reservar && 
          
       

        <div className={styles.contenedorFecha}>
          <p>Elegí una fecha</p>
          <input
            className={styles.inputTurnos}
            onChange={handleInput}
            type="date"
            name="date"
            value={inputs.date}
            
            min={fecha}
          />
            <button className={styles.buttonFechaReserva} type="submit">
            Reservar
          </button>
        </div>

      }




      </form>
    </div>
  );
}
