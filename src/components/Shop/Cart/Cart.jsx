import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../features/cart.slice";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";

const Cart = () => {
  const products = useSelector((state) => state.cart.productId);
  const goods = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  let array = [];
  let sum = 0;
  let counter = 0;

  for (let index = 0; index < goods.length; index++) {
    for (let i = 0; i < products.length; i++) {
      if (goods[index]._id === products[i].productId) {
        array.push(goods[index]);
        sum = sum + goods[index].price * products[i].count;
        counter = counter + products[i].count;
      }
    }
  }

  return (
    <>
      <div className={styles.cart}>
        {array.map((element, index) => (
          <CartItem product={element} key={index} />
        ))}
        <div className="sum_table">
          <div className={styles.title}>Сумма заказа</div>
          <div className={styles.price_item}>Итого: {sum} ₽</div>
          
          </div>
          <div className={styles.topay}>
        </div>
        <div className={styles.right.div}>
          <div className={styles.checkout_order}>
            <p className={styles.amount_goods}>К оплате: {sum}</p>
            <button className={styles.pay}>Оформить заказ({counter})</button>
          </div>
        </div>
      </div>
      <div className={styles.location}>
        <form className={styles.form}>
          <h2 className={styles.order_text}>Оформление заказа</h2>
          <h3 className={styles.city_text}>Город доставки</h3>
          <div className={styles.adress_order}>
            <input
              className={styles.city_input}
              type="text"
              placeholder="Название города"
            />
          </div>
          <h3 className={styles.city_text}>Способ получения</h3>
          <div className={styles.first_second} for="way">
            <label>Курьерская доставка</label>
            <input type="radio" name="choose-way" id="way" />
          </div>
          <div className={styles.first_second} for="paragraph">
            <label>Пункт выдачи</label>
            <input type="radio" name="choose-way" id="paragraph" />
          </div>
          <div className={styles.yandex_main}>
    </div>
        </form>
      </div>
    </>
  );
};

export default Cart;
