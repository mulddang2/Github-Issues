import styles from './Header.module.css';
import Button from './components/Button';
import Space from './components/Space';
// icon
import { GoEye } from 'react-icons/go';
import { AiOutlineFork } from 'react-icons/ai';
import { BsStar } from 'react-icons/bs';
import Tabs from './components/Tabs';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button
          style={{
            fontSize: '14px',
            backgroundColor: 'transparent',
            color: 'black',
          }}
        >
          <GoEye style={{ marginRight: '8px' }} />
          Watch
        </Button>
        <Space />
        <Button
          style={{
            fontSize: '14px',
            backgroundColor: 'transparent',
            color: 'black',
          }}
        >
          <AiOutlineFork style={{ marginRight: '8px' }} />
          Fork <div className={styles.circle}>5</div>
        </Button>
        <Space />
        <Button
          style={{
            fontSize: '14px',
            backgroundColor: 'transparent',
            color: 'black',
          }}
        >
          <BsStar style={{ marginRight: '8px' }} />
          Star
        </Button>
      </div>
      <Tabs />
    </div>
  );
}
