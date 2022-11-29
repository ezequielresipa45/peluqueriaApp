import React from "react";
import styles from "./Turnos.module.css";
import { useHistory } from "react-router-dom";
import {  useDispatch, useSelector } from 'react-redux'
import { add_client } from '../../redux/actions/actions'


let date = new Date();
let dia = date.getDate();
let mes = date.getMonth() + 1;
let anio = date.getFullYear();

const fecha = `${anio}-${mes}-${dia}`;

export default function Turnos({ inputs, setInputs }) {


const state = useSelector((state) => state.clientes)
  const dispatch = useDispatch();

console.log(state)
  let history = useHistory();

  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, reservar: true })
  }

  const handleClickButon = () => {
    dispatch(add_client(inputs))
    alert(`Hola ${inputs.cliente}, tu reserva para ${inputs.servicio} ah sido confirmada para el ${inputs.date}, en la sucursal de ${inputs.sucursal} con ${inputs.personal}, te esperamos!! Muchas gracias.`);
    history.push("/");

  }

  const handleSiguiente = () => {

    setInputs({ ...inputs, siguiente: true })
  }


  return (
    <div className={styles.containerTurnos}>
      <h1>Reservá Tu Turno</h1>

      <form onSubmit={handleSubmit}>

        <div className={inputs.siguiente ? styles.ocultar : ''}>


          <div className={styles.inputsTexts}>

            <input type="text" placeholder="Ingrese su nombre" name="cliente" onChange={handleInput} value={inputs.cliente} autoComplete='nen' />
            <input type="email" placeholder="Ingrese su correo" name="correo" onChange={handleInput} value={inputs.correo} autoComplete='nen'/>

            {inputs.cliente && inputs.correo &&

              <button onClick={handleSiguiente} className={styles.buttonSiguiente} type='button'>Siguiente</button>
            }

          </div>

        </div>

        <div className={inputs.siguiente ? styles.contenedorInput : styles.ocultar}>

          <select name="personal" onChange={handleInput} value={inputs.personal} >
            <option selected hidden  >
              ¿Con quién querés atenderte?
            </option>
            <option value="Agustin" >Agustin</option>
            <option value="Tiago">Tiago</option>
            <option value="Enzo">Enzo</option>
            <option value="Felipe">Felipe</option>
          </select>

          <select name="servicio" onChange={handleInput} value={inputs.servicio}>
            <option selected hidden>
              ¿Qué te querés hacer?
            </option>
            <option value="Corte">Corte</option>
            <option value="Spa">Spa</option>
            <option value="Barba">Barba</option>
            <option value="Color">Color</option>
          </select>

          <select name="sucursal" onChange={handleInput} value={inputs.sucursal}>
            <option selected hidden>
              ¿Elegí una sucursal?
            </option>
            <option value="San-Justo">San Justo</option>
            <option value="Ramos-Mejia">Ramos Mejia</option>
            <option value="Mataderos">Mataderos</option>
            <option value="Recoleta">Recoleta</option>
          </select>

          {inputs.personal && inputs.servicio && inputs.sucursal && !inputs.reservar &&
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
            <button className={styles.buttonFechaReserva} onClick={handleClickButon}>
              Reservar
            </button>
          </div>

        }
      </form>
    </div>
  );
}
