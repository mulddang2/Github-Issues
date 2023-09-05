import styles from './Header.module.css';
import Button from './components/Button';
import Space from './components/Space';
// icon
import { GoEye } from 'react-icons/go';
import { AiOutlineFork } from 'react-icons/ai';
import { BsStar } from 'react-icons/bs';
import Tabs from './components/Tabs';
import cx from 'clsx';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button className={cx(styles.transparent)}>
          <GoEye style={{ marginRight: '8px' }} />
          Watch
        </Button>
        <Space />
        <Button className={cx(styles.transparent)}>
          <AiOutlineFork style={{ marginRight: '8px' }} />
          Fork <div className={styles.circle}>5</div>
        </Button>
        <Space />
        <Button className={cx(styles.transparent)}>
          <BsStar style={{ marginRight: '8px' }} />
          Star
        </Button>
      </div>
      <Tabs />
    </div>
  );
}
