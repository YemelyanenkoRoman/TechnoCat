import styles from '@/components/loader/Loader.module.css';
const Loader = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.ball}></span>
      <span className={styles.ball2}></span>
      <ul className={styles.ul_loader}>
        <li className={styles.li_loader}></li>
        <li className={styles.li_loader}></li>
        <li className={styles.li_loader}></li>
        <li className={styles.li_loader}></li>
        <li className={styles.li_loader}></li>
      </ul>
    </div>
  );
};

export default Loader;
