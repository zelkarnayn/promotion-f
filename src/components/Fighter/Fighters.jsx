import React from 'react';
 

import styles from './Fighters.module.scss'

const Fighters = ({ item }) => {
    
  

 

    return (
        <div className={styles.fighters_item}>
            <div>
                <img className={styles.image} src={styles} alt={styles} />
            </div>
            <div className="discription">
                <div className="fighter_name">
                <div className="name">{}</div>
                <div className="lastName">{}</div>
                <div className="alias">{}</div>
                <div className="weight">{}</div>
                <div className="height">{}</div>
                <div className="draw">{}</div>
                <div className="defeat">{}</div>
                    <div className="record">{}</div>
                    <div className="region">{}</div>
                </div>
               
            </div>
           
        </div>
    );
};

export default Fighters;