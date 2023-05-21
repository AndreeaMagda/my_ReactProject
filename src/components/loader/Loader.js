import React from 'react'
import styles from './Loader'
import loadGif from '../../Images/loader.gif'
import  ReactDOM  from 'react-dom'
const Loader = () => {
  return ReactDOM.createPortal (
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={loadGif} alt='err loading gif'/>

        </div>
      
    </div>,
    document.getElementById("loader")
  )
}

export default Loader
