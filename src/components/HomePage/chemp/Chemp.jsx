import React from 'react'
import Points from '../points/Points'
import styles from './Chemp.module.scss'
import image1 from '../photos/1.jpg'
import poyas from '../main/poyyas.png'

export default function Chemp() {
  return (
    <div className={styles.main}>
        <div className={styles.chempBlock}>
            <div className={styles.chemp_text}>НАШИ ДОСТИЖЕНИЯ ЧЕМПИОНЫ ЛИГИ LFL</div>
            <Points />
            <div className={styles.chemp_text2}>К вашему вниманию представлены действующие чемпионы разных весовых категорий</div>
        </div>
        <div className={styles.imagesBlock}>
            <div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Яндаев Ризван</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <p>Кочевник</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <p>84кг. средний</p>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <p>20</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <p>0</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <p>0</p>
                            </div>
                        </div>
                        <img className={styles.images} src={image1} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Абдразаков Асхаб</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <p>Мудрый</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <p>77кг. полусредний</p>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <p>12</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <p>0</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <p>0</p>
                            </div>
                        </div>
                        <img className={styles.images} src={image1} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Байраев Лом-Али</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <p>Умный</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <p>63кг. полулегкий</p>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <p>20</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <p>0</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <p>0</p>
                            </div>
                        </div>
                        <img className={styles.images} src={image1} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Мехтиев Дени</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <p>Механик</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <p>93кг. полутяжелый</p>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <p>24</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <p>0</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <p>0</p>
                            </div>
                        </div>
                        <img className={styles.images} src={image1} alt=''/>
                    </div>
                </div>
            </div>
            <div className={styles.secondBlock}>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Янгулбаев Малик</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <p>Скала</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <p>77кг. полусредний</p>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <p>18</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <p>0</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <p>0</p>
                            </div>
                        </div>
                        <img className={styles.images} src={image1} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Цуров Адам</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <p>Гитлер</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <p>120кг. тяжелый</p>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <p>2000</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <p>0</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <p>0</p>
                            </div>
                        </div>
                        <img className={styles.images} src={image1} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Джукаев Дени</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <p>Добряк</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <p>100кг. тяжелый</p>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <p>200</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <p>0</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <p>0</p>
                            </div>
                        </div>
                        <img className={styles.images} src={image1} alt=''/>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.image}  src={poyas} alt=''/>
                    <div className={styles.opis}>
                        <div>
                            <h2 className={styles.h2}>Мартазанов Саид</h2>
                            <div className={styles.rec}>
                                <p>Псевдоним:</p>
                                <p>Препод</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Вес:</p>
                                <p>70кг. легкий</p>
                            </div>
                            <h3 className={styles.h3}>Рекорд</h3>
                            <div className={styles.rec}>
                                <p>Побед:</p>
                                <p>16</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Поражений:</p>
                                <p>0</p>
                            </div>
                            <div className={styles.rec}>
                                <p>Ничья:</p>
                                <p>0</p>
                            </div>
                        </div>
                        <img className={styles.images} src={image1} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
