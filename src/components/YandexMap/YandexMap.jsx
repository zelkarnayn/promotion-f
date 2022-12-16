import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from './Yandex.module.scss'

const YandexMap = () => {
  return (
     <div className={styles.yandex_main}>
   <YMaps>
      <div>
      <div className={styles.yandex_map}>
      <Map defaultState={{ center: [43.371674, 46.122291], zoom: 15 }} width={"100%"} height={"300px"}>
          <Placemark geometry={[43.371674, 46.122291]} />
        </Map>
      </div>
       
      </div>
    </YMaps>
     </div>
 
  );
};

export default YandexMap;
