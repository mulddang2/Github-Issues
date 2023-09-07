/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './ListContainer.module.css';
import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import Pagination from './components/Pagination';
import ListFilter from './components/ListFilter';
import OpenrClosedFilters from './OpenClosedFilters';

const GITHUB_API = 'https://api.github.com';
export default function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open');

  // 받아온 데이터를 저장
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState(false);
  const [isOpenMode, setIsOpenMode] = useState(true);
  const maxPage = 10;
  // NOTE: params로 들어오는 값이 { page, state: isOpenMode ? 'open' : 'closed' } 이다.
  async function getData(params) {
    const { data } = await axios.get(
      `${GITHUB_API}/repos/facebook/react/issues`,
      {params},
      {
        headers: {
          Authorization: 'import.meta.env.VITE_GITHUB_TOKEN',
        },
      }
    );
    setList(data);
  }

  useEffect(() => {
    getData({ page, state: isOpenMode ? 'open' : 'closed' });
  }, [page, isOpenMode]); // NOTE: 빈 배열을 넣게 되면, dom이 그려진 후에 getData가 실행된다.

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button className={styles.newIssue}>New Issue</Button>
        </div>
        <OpenrClosedFilters
          isOpenMode={isOpenMode}
          onClickMode={setIsOpenMode}
        />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(filteredData) => {
              // 필터링된 요소에 맞게 데이터를 불러오기
            }}
          />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((item) => (
            <ListItem
              data={item}
              key={item.id}
              checked={checked}
              onClickCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={maxPage}
          currentPage={page}
          onClickPageButton={(pageNumber) => setPage(pageNumber)}
        />
      </div>
    </>
  );
}

// function OpenrClosedFilters({ data }) {
//   // const openModeDataSize = 1;
//   // const closeModeDataSize = 2;

//   return (
//     <>
//       <OpenClosedFilter
//         size={openModeDataSize}
//         state="Open"
//         onClick={() => setIsOpenMode(true)}
//         selected={isOpenMode}
//       />
//       <OpenClosedFilter
//         size={closeModeDataSize}
//         state="Closed"
//         onClick={() => setIsOpenMode(false)}
//         selected={!isOpenMode}
//       />
//     </>
//   );
// }

// function OpenClosedFilter({ size, state, onClick, selected }) {
//   return (
//     <span
//       role="button"
//       className={cx(styles.textFilter, { [styles.selected]: selected })}
//       onClick={onClick}
//     >
//       {size} {state}
//     </span>
//   );
// }
