import React from 'react'
import styles from './Loader.module.scss'
import loadGif from '../../Images/loader.gif'
import  ReactDOM  from 'react-dom'
const Loader = () => {
  return ReactDOM.createPortal (
    <div className={styles.wrapper}>
         <div className={styles.loader}>
            <img style={{ width: '200px', borderRadius: '20%'}}
             src={loadGif} alt='err loading gif'/>

       </div>
  
     </div>
    ,
    document.getElementById("loader")
  )
}

export default Loader
