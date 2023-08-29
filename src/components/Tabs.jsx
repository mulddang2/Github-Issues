/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Tabs.module.css';
import cx from 'clsx';

const tabList = ['Code', 'Issues', 'Pull Requests'];

export default function Tabs() {
  /* NOTE: 몇번째가 눌렸는지 기억해야해서, useState에 저장하는 것.
  클릭버튼이 눌리면 인덱스가 바뀜.   

  기억해야할 규칙: map으로 여러개의 child를 나열했을 때는, 반드시 key값을 주어야한다.

  */
  
  const [selectedTabIdx, setSelectedTabIdx] = useState(0)

  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, idx) => (
        <Tab key={`${idx}`} title={tab} selected={selectedTabIdx === idx} onClick={() => setSelectedTabIdx(idx)} />
      ))}
    </ul>
  )
}

function Tab({ title, selected, onClick, number }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  );
}
