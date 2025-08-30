import styles from './Notification.module.scss';
const Notification = ({ message }) => <p className={styles.notification}>{message}</p>;
export default Notification;