import React from 'react'
import Points from '../points/Points'
import styles from './Main.module.scss'
import images from './poyyas.png'

export default function Main() {
  return (
    <div className={styles.main}>
        <div>
            <div className={styles.title}>LFL</div>
            <Points />
            <img className={styles.images} src={images} alt='fighter'/> 
        </div>
        <div className={styles.blocks}>
            <div className={styles.block}>
              <div className={styles.citys}>АДРЕС:</div>
              <div className={styles.city}>Г. ГУДЕРМЕС</div>
              <div className={styles.city}>БЕНОЙ ТРЕВЕЛ</div>
            </div>
            <div className={styles.block}>
              <div className={styles.citys}>ТЕЛЕФОН:</div>
              <div className={styles.city}>+7 (938) 024-02-22</div>
              <div className={styles.city}>+7 (938) 024-02-22</div>
            </div>
            <div className={styles.block}>
              <div className={styles.citys}>РЕЖИМ РАБОТЫ:</div>
              <div className={styles.city}>ПН-ПТ: 10:00 - 20:00</div>
              <div className={styles.city}>СБ-ВСК: 12:00 - 20:00</div>
            </div>
        </div>
    </div>
  )
}
