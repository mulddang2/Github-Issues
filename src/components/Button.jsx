/* eslint-disable react/prop-types */
import cx from 'clsx';
import styles from './Button.module.css'

export default function Button({ className, children }) {


  return (
    <button className={cx(styles.button, className)} >
      {children}
    </button>
  );
}