import React from 'react'
import {  useDispatch } from 'react-redux'
import { setAccess} from '../../redux/actions/actions'
import { useHistory } from "react-router-dom";


export default function Admin() {
  const dispatch = useDispatch();
  let history = useHistory();

  const handleButon = ()=>{
    dispatch(setAccess(false));
    history.push("/");

  }
  return (
    <div>


      ESTOY EN ADMIN
      
      <button onClick={handleButon}>LogOut</button>
      
      
      </div>
  )
}
