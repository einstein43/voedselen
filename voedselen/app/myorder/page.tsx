'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import classNames from 'classnames';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  quantity: number;
}

export default function MyOrder() {
  const [orderData, setOrderData] = useState<OrderItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch and load JSON data
    fetch('./orderMockData.json')
      .then((response) => response.json())
      .then((data: OrderItem[]) => {
        setOrderData(data);
        calculateTotalPrice(data); // Calculate total price initially
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Calculate the total price whenever orderData changes
  useEffect(() => {
    calculateTotalPrice(orderData);
  }, [orderData]);

  // Update the quantity of an item
  const updateQuantity = (item: OrderItem, increment: boolean) => {
    setOrderData((prevOrderData) =>
      prevOrderData.map((orderItem) => {
        if (orderItem.id === item.id) {
          return {
            ...orderItem,
            quantity: increment ? orderItem.quantity + 1 : Math.max(0, orderItem.quantity - 1),
          };
        }
        return orderItem;
      })
    );
  };

  const calculateTotalPrice = (data: OrderItem[]) => {
    // Initialize the total price
    let totalPrice = 0;
  
    // Calculate the total price by iterating over each item
    for (const item of data) {
      const itemTotal = item.price * item.quantity;
      totalPrice += itemTotal;
    }
  
    // Update the total price in the state
    setTotalPrice(totalPrice);
  };

  const log = () => {
    console.log(orderData);
    console.log("Total price €" + totalPrice.toFixed(2))
  };

  // Filter foods and drinks
  const foodItems = orderData.filter((item) => item.category.name.toLowerCase() !== 'Drinks'.toLowerCase());
  const drinkItems = orderData.filter((item) => item.category.name.toLowerCase() === 'Drinks'.toLowerCase());

  return (
    <main className={styles.main}>
      <h1 className={classNames(styles.middleTop, styles.mainHeader)}>Ordered items</h1>

      <div className={classNames(styles.middleMiddle, styles.defaultBackground)}>
        <div className={classNames(styles.order)}>
          <h3>Drinks:</h3>
          {drinkItems.map((item) => (
            <ul key={item.id} className={classNames(styles.orderData)}>
              <span>{item.name}</span>
              <span>€{item.price.toFixed(2)}</span>
              <span>
                <button onClick={() => updateQuantity(item, false)} className={classNames(styles.btnQuantity)}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => updateQuantity(item, true)} className={classNames(styles.btnQuantity)}>
                  +
                </button>
              </span>
            </ul>
          ))}

          <br></br><br></br>
          
          <h3>Food:</h3>
          {foodItems.map((item) => (
            <ul key={item.id} className={classNames(styles.orderData)}>
              <span>{item.name}</span>
              <span>€{item.price.toFixed(2)}</span>
              <span>
                <button onClick={() => updateQuantity(item, false)} className={classNames(styles.btnQuantity)}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => updateQuantity(item, true)} className={classNames(styles.btnQuantity)}>
                  +
                </button>
              </span>
            </ul>
          ))}
        </div>
        <button onClick={log} className={classNames(styles.btnFilled)}>
          Confirm order
        </button>
        <div>
            <h3>Total Price:</h3>
            <p>€{totalPrice.toFixed(2)}</p>
          </div>
      </div>
    </main>
  );
}
