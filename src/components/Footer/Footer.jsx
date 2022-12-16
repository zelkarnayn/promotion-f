import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (

    <footer className={styles.footer_main}>
      <div className={styles.lfl_styles}>
        <h3 className={styles.lfl}>LFL</h3>

        <p className={styles.signUp}>
        Следите за новостями на сайте, чтобы быть в курсе<br></br>про наших бойцов и про лигу
           
        </p>
      </div>

        <div className={styles.aboutUs}>
          <a className={styles.nav_link} href="/">
            О нас
          </a>

        

          <a className={styles.nav_link} href="/">
            бойцы
          </a>

          <a className={styles.nav_link} href="/">
            Новости
          </a>
        </div>

        <div className={styles.company}>
          <a className={styles.nav_link} href="/">
            Магазин
          </a>
          <a className={styles.nav_link} href="/">
           Турниры
          </a>

          <a className={styles.nav_link} href="/">
            Рейтинги
          </a>

         

        
        </div>

        <div className={styles.div_support}>
          <a className={styles.nav_link} href="/">
            Поддержка
          </a>

       

          <a className={styles.nav_link} href="/">
          Лицензирование
          </a>

       

          <a className={styles.nav_link} href="/">
          Контакт
          </a>
        </div>

        <div className={styles.div_follow}>
         
          <a className={styles.nav_link} href="/">
            Instagram
          </a>
          <a className={styles.nav_link} href="/">
            Telegram
          </a>
          
          <a className={styles.nav_link} href="/">
            Youtube
          </a>
        </div>
    </footer>
  );
}

export default Footer