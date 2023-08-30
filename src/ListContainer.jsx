/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './ListContainer.module.css';
import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import cx from 'clsx';

export default function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open');
  const [isOpenMode, setIsOpenMode] = useState(true);

  const openModeDataSize = 1;
  const closeModeDataSize = 2;

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          style={{ fontSize: '14px', backgroundColor: 'green', color: 'white' }}
        >
          New Issue
        </Button>
      </div>
      <>
        <OpenClosedFilter size={openModeDataSize} state='Open' onClick={() => setIsOpenMode(true)} selected={isOpenMode}  />
        <OpenClosedFilter size={closeModeDataSize} state='Closed' onClick={() => setIsOpenMode(false)} selected={!isOpenMode}  />
      </>
        
      
      <ListItemLayout className={styles.listFilter}>
        <div className={styles.filterLists}>
          <span>Author</span>
          <span>Label</span>
          <span>Projects</span>
          <span>Milestones</span>
          <span>Assignee</span>
          <span>Sort</span>
        </div>
      </ListItemLayout>
      <div className={styles.container}>
        <ListItem
          // checked={checkedList.filter((item) => item.id == '0')[0]}
          // onChangeCheckBox={() => setCheckedList((checkedList) => [...checkedList, '0'])}
          badges={[
            {
              color: 'red',
              title: 'bug',
            },
          ]}
        />
      </div>
    </div>
  );
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  );
}
