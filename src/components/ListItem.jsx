/* eslint-disable react/prop-types */
import Badge from './Badge';
import styles from './ListItem.module.css';
import ListItemLayout from './ListItemLayout';

export default function ListItem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  data,
}) {
  const badges = data.labels;

  return (
    <ListItemLayout checked={checked}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {data.labels.length > 0 &&
            badges.map((badgeProps, idx) => (
              <Badge key={`${idx}`} {...badgeProps} />
            ))}
        </div>
        <div className={styles.description}># Description</div>
      </div>
    </ListItemLayout>
  );
}
