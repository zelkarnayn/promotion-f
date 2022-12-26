import React from 'react'
import Points from '../../points/Points'
import styles from './Life.module.scss'
import image1 from '../../photos/1.png'
import image2 from '../../photos/2.png'
import image3 from '../../photos/3.png'
import image4 from '../../photos/4.png'
import image5 from '../../photos/5.png'
import image6 from '../../photos/6.png'
import image7 from '../../photos/7.png'
import image8 from '../../photos/8.png'
import image9 from '../../photos/9.jpg'
import image10 from '../../photos/10.jpg'
import image11 from '../../photos/11.jpg'
import image12 from '../../photos/12.jpg'
import image13 from '../../photos/13.jpg'
import image14 from '../../photos/14.jpg'
import image15 from '../../photos/15.jpg'
import image16 from '../../photos/16.jpg'
import image17 from '../../photos/17.jpg'
import image18 from '../../photos/18.jpg'


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
            <p><img src={image2} alt=''/></p>
            <p><img src={image3} alt=''/></p>
            <p><img src={image4} alt=''/></p>
            <p><img src={image5} alt=''/></p>
            <p><img src={image6} alt=''/></p>
            <p><img src={image7} alt=''/></p>
            <p><img src={image8} alt=''/></p>
            <p><img src={image9} alt=''/></p>
            <p><img src={image10} alt=''/></p>
            <p><img src={image11} alt=''/></p>
            <p><img src={image12} alt=''/></p>
            <p><img src={image13} alt=''/></p>
            <p><img src={image14} alt=''/></p>
            <p><img src={image15} alt=''/></p>
            <p><img src={image16} alt=''/></p>
            <p><img src={image17} alt=''/></p>
            <p><img src={image18} alt=''/></p>
        </div>
    </div>
  )
}
