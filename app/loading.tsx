import styles from '@/components/loader/Loader.module.css';
export default function Loading() {
  return (
    <div className="z-10 absolute flex items-center justify-center w-screen h-screen bg-white bg-opacity-50">
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
    </div>
  );
}
