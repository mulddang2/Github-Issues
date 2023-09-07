/* eslint-disable react/prop-types */
import cx from 'clsx';
import styles from './OpenClosedFilters.module.css'

export default function OpenrClosedFilters({ isOpenMode, onClickMode }) {
  // const openModeDataSize = 1;
  // const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        //size={openModeDataSize}
        state={"Open"}
        selected={isOpenMode}
        onClick={() => onClickMode(true)}
      />
      <OpenClosedFilter
        //size={closeModeDataSize}
        state={"Closed"}
        selected={!isOpenMode}
        onClick={() => onClickMode(false)}
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