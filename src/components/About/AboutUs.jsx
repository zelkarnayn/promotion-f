import React from "react";
 
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div>
      <div className={styles.ourLeague}>
        <div className={styles.league}>LEGENDARY FIGHT LEAGUE</div>   <br />Легендарная бойцовская лига -
        <div className={styles.infoAboutWeb}>
          основателeм является Сайдулаев Ахмед, <br /> наша лига дает шанс заявить о себе начинающим бойцам, если ты молод и хочешь почувствовать адреналин мы ждем тебя.
      
        </div>
        <h3>Наши контактные данные:</h3> <br />
        <div className={styles.social}>
        <br />
        <a className={styles.social_media } href="@intocode_manager">Telegram</a> <br />
        <a className={styles.social_media } href="Инстаграм">Instagram</a> <br />
        <a className={styles.social_media} href="Инстаграм">Youtube</a>

        </div>
        <a className={styles.social_media} href="Номер">+7928-000-00</a>
     
        <h3>Наш Адрес:</h3>
        <a className={styles.adress} href="https://yandex.ru/maps/11026/gudermes/?ll=46.120255%2C43.372542&mode=whatshere&whatshere%5Bpoint%5D=46.122699%2C43.371801&whatshere%5Bzoom%5D=17&z=16.33">
          Чеченская республика г.Гудермес ул. Ерёменко, 38А
        </a>
      </div>
 
    </div>
  );
};

export default AboutUs;
