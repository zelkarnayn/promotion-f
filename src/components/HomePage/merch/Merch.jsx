import React, { useState } from 'react'
import Points from '../points/Points';
import Hudi from './Hudi';
import styles from './Merch.module.scss'
import Merchi from './Merchi';
import merch1 from '../photos/merch1.png'
import merch2 from '../photos/merch2.png'
import { NavLink } from 'react-bootstrap';

export default function Merch() {

  const [active, setActive] = useState(null);

 
  return (
    <div>
        <div>
            <div className={styles.uslugi}></div>
            <div className={styles.tochki}>
              <Points/>
            </div>
            <div className={styles.mag}>
                <NavLink to={"/shop"} className={styles.merch}>МЕРЧ</NavLink>
            </div>
        </div>
        <div className={styles.block}>
            <div className={styles.b}>
              <img src={merch1} alt=''/>
            </div>
            <div className={styles.b}>
              <img src={merch2} alt=''/>
            </div>
            <div className={styles.b}>
              <img src={merch1} alt=''/>
            </div>
            <div className={styles.b}>
              <img src={merch2} alt=''/>
            </div>
        </div>
    </div>
  )
}
