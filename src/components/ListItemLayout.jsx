/* eslint-disable react/prop-types */
import cx from 'clsx'
import styles from './ListItemLayout.module.css';

export default function ListItemLayout({ checked, children, className }) {
  return (
    <div className={cx(className, styles.wrapper)}>
      <input
        type="checkbox"
        className={styles.checkbox}
        value={checked}
        //onChange={onChangeCheckBox}
      />
      {children}
    </div>
  );
}
