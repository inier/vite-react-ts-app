import React from 'react';
import styles from './style.module.scss';
import './index.scss';

const Page1: React.FC = () => (
  <div className="box">
    <div className="item">1</div>
    <div className="item">2</div>
    <div className="item">3</div>
    <div className="item">4</div>
    <div className="item">5</div>
    <div className="item">6</div>
    <div className="item">7</div>
    <div className="item">8</div>
    <div className="item">9</div>
    <div className="item">10</div>
    <div className="item">11</div>
    <div className="item">12</div>
    <div className={styles.item2}>13</div>
    <div className={styles.item2}>14</div>
    <div className={styles.item2}>15</div>
  </div>
);

export default Page1;
