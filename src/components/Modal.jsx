/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import cx from 'clsx';

import styles from './Modal.module.css';

export default function Modal({ opened, title, onClose, placeholder, searchDataList, onClickCell }) {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(searchDataList)

  // NOTE: 필터기능.. bug.. 치면 필터링 되서 나옴
useEffect(() => {
  setFilteredData(searchDataList.filter((item) => item === searchValue))
}, [searchDataList, searchValue])

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {filteredData.map((data) => (<div key={data} onClick={onClickCell} role="button">{data}</div>))}
    </div>
  );
}
