import React from 'react'
import styles from './Error404.module.css'
import image from '../../images-videos/error-404.jpg'
import { useHistory } from 'react-router-dom'



export default function Error404() {

    let history = useHistory()

    setTimeout(() => history.push('/'), 4000);


    return (
        <div className={styles.container404}>

            <img src={image} alt="Error 404" />
        </div>
    )
}
