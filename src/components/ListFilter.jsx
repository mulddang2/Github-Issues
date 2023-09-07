/* eslint-disable react/prop-types */
import { IoMdArrowDropdown } from 'react-icons/io';
import styles from './ListFilter.module.css';
import { useState } from 'react';
import Modal from './Modal';

export default function ListFilter({ onChangeFilter }) {
  const [showModal, setShowModal] = useState();
  const filterList = [
    'Author',
    'Label',
    'Projects',
    'Milestones',
    'Assignee',
    'Sort',
  ];

  return (
    <>
      <div className={styles.filterLists}>
        {filterList.map((filter) => (
          <ListFilterItem
            key={filter}
            searchDataList={[]}
            onClick={() => setShowModal(filter)}
            onClose={() => setShowModal()}
            showModal={showModal === filter}
          >
            {filter}
          </ListFilterItem>
        ))}
      </div>
    </>
  );
}

function ListFilterItem({
  onClick,
  onClose,
  searchDataList,
  children,
  placeholder,
  onChangeFilter,
  showModal,
}) {
  // const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={onClick}>
        {children} <IoMdArrowDropdown />
      </span>
      <div className={styles.modalContainer}>
        <Modal
          placeholder={placeholder}
          opened={showModal}
          onClose={onClose}
          searchDataList={searchDataList}
          onClickCell={() => {
            // 클릭된 정보를 통해 리스트 필터링
            onChangeFilter();
          }}
        />
      </div>
    </div>
  );
}
