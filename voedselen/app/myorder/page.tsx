import styles from './page.module.css';
import classNames from 'classnames';

export default function MyOrder() {
    return (
        <main className={styles.main}>
      <h1 className={classNames(styles.middleTop, styles.mainHeader)}>Ordered items</h1>
    
      <div className={classNames(styles.middleMiddle, styles.defaultBackground)}>
        <div className={classNames(styles.orderSection)}>
          <h3>Drinks:</h3>
          <ul className={classNames(styles.orderData)}>
          <span className={classNames(styles.orderData1)}>Coca Cola</span><span >className={classNames(styles.orderData1)}</span><span></span>
          <li>Ice Tea €4,60 </li>
          <li>Leffe Blond €7,60 </li>
          </ul>
        </div>
        
        <div>
          <h3>Food:</h3> 
          <ul>
          <li>Chicken Noodle Soup €5,99</li>
          <li>Tomato Soup €5,99</li>
          <li>Spaghetti Bolognese €7,99</li>
          </ul>
        </div>
      </div>
    </main>
    )
};