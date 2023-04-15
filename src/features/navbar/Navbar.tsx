import * as React from 'react';
import styles from './Navbar.module.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Link } from 'react-router-dom';
import { addCountry, selectCountry } from './countrySlice';

const Navbar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { country } = useAppSelector(selectCountry);


  return (
    <nav className={styles.container}>
      <h2 className={styles.count}>
        <Link to="/" > <button className={styles.icon} > Top News </button></Link>
        <Link to="/categories" >    <button className={styles.icon} >Categories</button></Link>
        <Link to="/search" >    <button className={styles.icon} >Search</button></Link>

      </h2>
      <div className={styles.iconWrap}>
        <button className={styles.icon} onClick={()=>{dispatch(addCountry('gb'))}} >GB</button>
        <button className={styles.icon} onClick={()=>{dispatch(addCountry('us'))}}>US</button>

      </div>
    </nav>
  );
};

export default Navbar;
