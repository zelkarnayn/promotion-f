import React, { useState } from 'react';
import AddFighter from "./Fighters/AddFighter";
import PostNews from "./News/PostNews"
import AddProduct from './Shop/AddProduct';
import styles from './Main.module.css'

const Admin = () => {
    const [fighter, setFighter] = useState(false)
    const [news, setNews] = useState(false)
    const [prod, setProd] = useState(false)

    const handleFighter = () => {
        setFighter(true)
        setNews(false)
        setProd(false)
    }

    const handleNews = () => {
        setNews(true)
        setFighter(false)
        setProd(false)
    }

    const handleProd = () => {
        setProd(true)
        setNews(false)
        setFighter(false)
    }

    return (
        <div>
            <div >
                <button className={styles.button} onClick={handleFighter}>Добавить бойца</button>
                <button className={styles.button} onClick={handleNews}>Добавить новость</button>
                <button className={styles.button} onClick={handleProd}>Добавить товар</button>
            </div>
            <div>
                {prod && <AddProduct/>}
                {news && <PostNews/>}
                {fighter && <AddFighter/>}
            </div>
        </div>
    );
};

export default Admin;