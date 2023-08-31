/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './ListContainer.module.css';
import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import cx from 'clsx';
import { IoMdArrowDropdown } from 'react-icons/io';
import Modal from './components/Modal';

export default function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open');
  const [isOpenMode, setIsOpenMode] = useState(true);

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
      <OpenrClosedFilters />
      <ListItemLayout className={styles.listFilter}>
        <ListFilter />
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

function ListFilter() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
    <div className={styles.filterLists}>
      <ListFilterItem onClick={()=> setShowModal(true)}>Author</ListFilterItem>
      <ListFilterItem onClick={()=> setShowModal(true)}>Label</ListFilterItem>
      <ListFilterItem onClick={()=> setShowModal(true)}>Projects</ListFilterItem>
      <ListFilterItem onClick={()=> setShowModal(true)}>Milestones</ListFilterItem>
      <ListFilterItem onClick={()=> setShowModal(true)}>Assignee</ListFilterItem>
      <ListFilterItem onClick={()=> setShowModal(true)}>Sort</ListFilterItem>
    </div>
    <Modal opened={showModal} onClose={() => setShowModal(false)}/>
    </>
  );
}

function ListFilterItem({ onClick, children }) {
  return (
    <span role="button" onClick={onClick}>
      {children} <IoMdArrowDropdown />
    </span>
  );
}

function OpenrClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true);
  const openModeDataSize = 1;
  const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        onClick={() => setIsOpenMode(true)}
        selected={isOpenMode}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state="Closed"
        onClick={() => setIsOpenMode(false)}
        selected={!isOpenMode}
      />
    </>
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
