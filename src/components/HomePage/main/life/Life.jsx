import React from 'react'
import Points from '../../points/Points'
import styles from './Life.module.scss'
import image1 from '../../photos/1.jpg'

export default function Life() {
  return (
    <div>
        <div>
            <div className={styles.life}>Вне Актагона</div>
            <div>
              <Points/>
            </div>
        </div>
        <div className={styles.photo}>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
            <p><img src={image1} alt=''/></p>
        </div>
    </div>
  )
}
