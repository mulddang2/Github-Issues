/* eslint-disable react/prop-types */
import Badge from './Badge';
import styles from './ListItem.module.css';
import ListItemLayout from './ListItemLayout';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// NOTE: 한국어로 하고싶다면..
// import "dayjs/locale/ko";
// dayjs.locale("ko");

export default function ListItem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  data,
}) {
  dayjs.extend(relativeTime);
  const badges = data.labels;
  const state = data.state === 'open' ? 'opened' : 'closed';
  const date = data.state === 'open' ? data.created_at : data.closed_at;
  console.log(date);
  return (
    <ListItemLayout checked={checked}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges.map((badgeProps, idx) => (
              <Badge key={`${idx}`} {...badgeProps} />
            ))}
        </div>
        <div className={styles.description}>
          #{data.number} {state} {dayjs(date).fromNow()}
          {/* console.log({}) */}
        </div>
      </div>
    </ListItemLayout>
  );
}
